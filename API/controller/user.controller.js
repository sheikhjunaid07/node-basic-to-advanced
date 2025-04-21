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

export const fetch = (request, response) => {
  var condition_obj = url.parse(request.url, true).query.condition_obj;
  if (condition_obj != undefined) condition_obj = JSON.parse(condition_obj);
  else condition_obj = {};

  console.log(condition_obj);
};
