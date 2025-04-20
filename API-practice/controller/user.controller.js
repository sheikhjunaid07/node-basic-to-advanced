import "../models/connection.js";
import UserSchemaModel from "../models/user.model.js";

export const save = async (request, response) => {
  const userDetails = {
    ...request.body,
    _id: 2,
    role: "user",
    status: 0,
    info: Date(),
  };

  try {
    await UserSchemaModel.create(userDetails);
    response.status(201).json({ status: true });
  } catch {
    response.status(500).json({ status: false });
  }
  response.send("<h1>Working</h1>");
};
