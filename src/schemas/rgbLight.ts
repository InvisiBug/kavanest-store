import mongoose from "mongoose";

const rgbLightSchema = new mongoose.Schema({
  name: { type: String },
  red: { type: Number },
  green: { type: Number },
  blue: { type: Number },
  mode: { type: Number },
  connected: { type: Boolean },
});

export default rgbLightSchema;
