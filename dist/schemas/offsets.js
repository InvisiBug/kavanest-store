"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var RoomOffsetSchema = new mongoose_1["default"].Schema({
    name: { type: String },
    livingRoom: { type: Number },
    kitchen: { type: Number },
    liamsRoom: { type: Number },
    study: { type: Number },
    ourRoom: { type: Number }
});
exports["default"] = RoomOffsetSchema;
