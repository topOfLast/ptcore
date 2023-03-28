"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var Example = function () { return (react_1["default"].createElement(ink_1.Transform, { transform: function (output) { return output.toUpperCase(); } },
    react_1["default"].createElement(ink_1.Text, null, "Hello World"))); };
exports["default"] = Example;
