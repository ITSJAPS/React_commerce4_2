"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var _default = {
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000,
  API_URL: process.env.API_URL || '/api/v1'
  //CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000'
  //DATABASE: process.env.DATABASE || 'db_default',
  //DB_USER: process.env.DB_PASSWORD || 'admin',
  //DB_PASSWORD: process.env.DB_USER || 'admin',
};
exports["default"] = _default;