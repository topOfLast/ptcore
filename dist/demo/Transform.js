"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const Example = () => (react_1.default.createElement(ink_1.Transform, { transform: output => output.toUpperCase() },
    react_1.default.createElement(ink_1.Text, null, "Hello World")));
exports.default = Example;
