"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
exports.options = exports.plugStore = exports.valveStore = exports.sensorStore = exports.offsetStore = exports.radiatorStore = void 0;
var schemas_1 = require("./schemas");
var mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
var connection = mongoose_1["default"].createConnection((_a = process.env.URI) !== null && _a !== void 0 ? _a : "");
connection.on("connected", function () {
    var _a;
    console.log((_a = "🔗 Connected to " + process.env.URI) !== null && _a !== void 0 ? _a : "");
});
connection.on("error", function (err) {
    console.log("Mongoose connection error" + err);
});
//* Mongoose store models
exports.radiatorStore = connection.model("radiator", schemas_1.radiator);
exports.offsetStore = connection.model("offset", schemas_1.offset);
exports.sensorStore = connection.model("sensor", schemas_1.sensor);
exports.valveStore = connection.model("valve", schemas_1.valve);
exports.plugStore = connection.model("plug", schemas_1.plug);
exports.options = { "new": true, upsert: true };
