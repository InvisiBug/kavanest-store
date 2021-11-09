"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var radiatorSchema = new mongoose_1["default"].Schema({
    room: { type: String },
    inlet: { type: Number },
    outlet: { type: Number }
});
exports["default"] = radiatorSchema;
