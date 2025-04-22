import "../models/connection.js";
import url from "url";
import UserSchemaModel from "../models/user.model.js";

export const save = async (request, response) => {
  const users = await UserSchemaModel.find({ role: "user" });
  const len = users.length;
  const _id = len == 0 ? 1 : users[len - 1]._id + 1;
  const userDetails = {
    ...request.body,
    _id: _id,
    status: 0,
    role: "user",
    info: Date(),
  };

  try {
    await UserSchemaModel.create(userDetails);
    response.status(201).json({ status: true });
  } catch {
    response.status(500).json({ status: false });
  }
};

export const fetch = async (request, response) => {
  var condition_obj = url.parse(request.url, true).query.condition_obj;
  if (condition_obj != undefined) condition_obj = JSON.parse(condition_obj);
  else condition_obj = {};

  // console.log(condition_obj);
  var userList = await UserSchemaModel.find(condition_obj);
  if (userList.length != 0) response.status(201).json(userList);
  else response.status(500).json({ status: "Resources Not Found!!" });
};

export const deleteUser = async (request, response) => {
  var obj = request.body;
  if (obj != undefined) {
    var condition_obj = JSON.parse(request.body.condition_obj);
    let userDetails = await UserSchemaModel.findOne(condition_obj);
    if (userDetails) {
      let user = await UserSchemaModel.deleteOne(condition_obj);
      if (user) response.status(200).json({ Status: "OK" });
      else response.status(500).json({ Status: "Server Error" });
    } else
      response.status(404).json({ status: "Requested resource not available" });
  } else {
    response.status(500).json({ status: "Please enter valid condition" });
  }
};

export const update = async (request, response) => {
  var obj = request.body;
  if (obj != undefined) {
    let userDetails = await UserSchemaModel.findOne(
      JSON.parse(request.body.condition_obj)
    );
    if (userDetails) {
      let user = await UserSchemaModel.updateOne(
        JSON.parse(req.body.condition_obj),
        { $set: JSON.parse(req.body.content_obj) }
      );
      if (user) res.status(200).json({ msg: "OK" });
      else response.status(500).json({ status: "Server Error" });
    } else
      response.status(404).json({ status: "Requested resource not available" });
  } else response.status(500).json({ status: "Please enter valid condition" });
};
