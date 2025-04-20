import url from "url";
import "../models/connection.js";
import UserSchemaModel from "../models/user.model.js";

export const save = async (request, response) => {
  const userDetails = {
    ...request.body,
    _id: 1,
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

  response.send("<h1>Its working</h1>");
};

export const getData = (request, response) => {
  const urlObj = url.parse(request.url, true).query;
  console.log(urlObj);
  response.send("<h1> Get All the data from database </h1>");
};
