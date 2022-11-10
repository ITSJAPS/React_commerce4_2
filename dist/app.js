"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("./config/config"));
//Japs: imports Swagger
//Japs: imports Routes
//Japs: imports Middlewares
//Japs: Config para variables de entorno

//Japs: Declaramos la variable app igualandola a express
var app = (0, _express["default"])();
//Japs: Settings
app.set('port', _config["default"].PORT);
//Japs: Middlewares generales
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
//Japs: Routes
var api = _config["default"].API_URL;
app.get("".concat(api), function (req, res) {
  res.send("<h1>RESTful running in root</h1> <p> eCommerce: <b>".concat(api, "/api-docs</b> for more information.</p>"));
});
app.get('/Japs', function (req, res) {
  res.send("<h1>RESTful running in Japs</h1> <p> eCommerce: <b>".concat(api, "/api-docs</b> for more information.</p>"));
});
// Routes
// Swagger Docs
// Middleware para el manejo de errores
// Export App
var _default = app;
exports["default"] = _default;