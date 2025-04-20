import "../models/connection.js";
import AdminSchemaModel from "../models/admin.model.js";

export const saveAdmin = async (request, response) => {
  const adminDetails = {
    ...request.body,
    _id: 101,
    role: "admin",
    status: 0,
    info: Date(),
  };

  try {
    await AdminSchemaModel.create(adminDetails);
    response.status(201).json({ status: true });
  } catch {
    response.status(500).json({ status: false });
  }
};
