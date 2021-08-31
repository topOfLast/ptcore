"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const Focus = () => (react_1.default.createElement(ink_1.Box, { flexDirection: "column", padding: 1 },
    react_1.default.createElement(ink_1.Box, { marginBottom: 1 },
        react_1.default.createElement(ink_1.Text, null, "Press Tab to focus next element, Shift+Tab to focus previous element, Esc to reset focus.")),
    react_1.default.createElement(Item, { label: "First" }),
    react_1.default.createElement(Item, { label: "Second" }),
    react_1.default.createElement(Item, { label: "Third" })));
const Item = ({ label }) => {
    const { isFocused } = (0, ink_1.useFocus)();
    return (react_1.default.createElement(ink_1.Text, null,
        label,
        " ",
        isFocused && react_1.default.createElement(ink_1.Text, { color: "green" }, "(focused)")));
};
exports.default = Focus;
