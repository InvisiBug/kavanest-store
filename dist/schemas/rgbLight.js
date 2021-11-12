"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var rgbLightSchema = new mongoose_1["default"].Schema({
    name: { type: String },
    red: { type: Number },
    green: { type: Number },
    blue: { type: Number },
    mode: { type: Number },
    connected: { type: Boolean }
});
exports["default"] = rgbLightSchema;
