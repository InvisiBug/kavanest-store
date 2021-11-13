import mongoose from "mongoose";

const valveSchema = new mongoose.Schema({
  name: { type: String },
  state: { type: Boolean },
  demand: { type: Boolean },
  connected: { type: Boolean },
});

export default valveSchema;
