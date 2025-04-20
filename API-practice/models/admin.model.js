import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const AdminSchema = mongoose.Schema({
  _id: Number,

  username: {
    type: String,
    required: [true, "Username is Required!!"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Password is Required!!"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required!!"],
    maxLength: 10,
    minLengthL: 5,
    trim: true,
  },
  role: String,
  status: Number,
  info: String,
});

//apply validation on AdminSchema
AdminSchema.plugin(uniqueValidator);

const AdminSchemaModel = mongoose.model("admin-data", AdminSchema);

export default AdminSchemaModel;
