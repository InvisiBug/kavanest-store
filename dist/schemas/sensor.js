"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var SensorSchema = new mongoose_1["default"].Schema({
    room: { type: String },
    rawTemperature: { type: Number },
    temperature: { type: Number },
    humidity: { type: Number },
    connected: { type: Boolean }
});
exports["default"] = SensorSchema;
