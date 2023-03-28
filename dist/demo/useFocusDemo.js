"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var Focus = function () { return (react_1["default"].createElement(ink_1.Box, { flexDirection: "column", padding: 1 },
    react_1["default"].createElement(ink_1.Box, { marginBottom: 1 },
        react_1["default"].createElement(ink_1.Text, null, "Press Tab to focus next element, Shift+Tab to focus previous element, Esc to reset focus.")),
    react_1["default"].createElement(Item, { label: "First" }),
    react_1["default"].createElement(Item, { label: "Second" }),
    react_1["default"].createElement(Item, { label: "Third" }))); };
var Item = function (_a) {
    var label = _a.label;
    var isFocused = ink_1.useFocus().isFocused;
    return (react_1["default"].createElement(ink_1.Text, null,
        label,
        " ",
        isFocused && react_1["default"].createElement(ink_1.Text, { color: "green" }, "(focused)")));
};
exports["default"] = Focus;
