"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var valveSchema = new mongoose_1["default"].Schema({
    name: { type: String },
    state: { type: Boolean },
    demand: { type: Boolean },
    connected: { type: Boolean }
});
exports["default"] = valveSchema;
