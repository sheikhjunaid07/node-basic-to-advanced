import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema = mongoose.Schema({
  _id: Number,

  name: {
    type: String,
    required: [true, "Name is Required!!"],
    lowercase: true,
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email is Required!!"],
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: [true, "Password is Required!!"],
    maxLength: 10,
    minLength: 5,
    trim: true,
  },

  mobile: {
    type: Number,
    required: [true, "Mobile Number is Required!!"],
    maxLength: 10,
    minLength: 10,
    trim: true,
  },

  address: {
    type: String,
    required: [true, "Address is Required!!"],
    trim: true,
  },

  city: {
    type: String,
    required: [true, "city is Required!!"],
    trim: true,
  },

  gender: {
    type: String,
    required: [true, "Gender is Required!!"],
    trim: true,
  },
  role: String,
  status: Number,
  info: String,
});

//apply validation on UserSchema
UserSchema.plugin(uniqueValidator);

//connect schema to collections
const UserSchemaModel = mongoose.model("user-data", UserSchema);

export default UserSchemaModel;
