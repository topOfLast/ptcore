"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// @ts-ignore;
var ink_1 = require("ink");
var Example = function () { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(ink_1.Text, { color: "green" }, "I am green"),
    react_1.default.createElement(ink_1.Text, { color: "black", backgroundColor: "white" }, "I am black on white"),
    react_1.default.createElement(ink_1.Text, { color: "#ffffff" }, "I am white"),
    react_1.default.createElement(ink_1.Text, { bold: true }, "I am bold"),
    react_1.default.createElement(ink_1.Text, { italic: true }, "I am italic"),
    react_1.default.createElement(ink_1.Text, { underline: true }, "I am underline"),
    react_1.default.createElement(ink_1.Text, { strikethrough: true }, "I am strikethrough"),
    react_1.default.createElement(ink_1.Text, { inverse: true }, "I am inversed"),
    react_1.default.createElement(ink_1.Text, { color: "green" }, "Green"),
    react_1.default.createElement(ink_1.Text, { color: "#005cc5" }, "Blue"),
    react_1.default.createElement(ink_1.Text, { color: "rgb(232, 131, 136)" }, "Red"))); };
exports.default = Example;
