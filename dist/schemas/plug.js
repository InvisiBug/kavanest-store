"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var plugSchema = new mongoose_1["default"].Schema({
    name: { type: String },
    id: { type: String },
    state: { type: Boolean },
    connected: { type: Boolean }
});
exports["default"] = plugSchema;
