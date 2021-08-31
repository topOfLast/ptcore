"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const Robot = () => {
    const { exit } = (0, ink_1.useApp)();
    const [x, setX] = react_1.default.useState(1);
    const [y, setY] = react_1.default.useState(1);
    (0, ink_1.useInput)((input, key) => {
        if (input === 'q') {
            exit();
        }
        if (key.leftArrow) {
            setX(Math.max(1, x - 1));
        }
        if (key.rightArrow) {
            setX(Math.min(20, x + 1));
        }
        if (key.upArrow) {
            setY(Math.max(1, y - 1));
        }
        if (key.downArrow) {
            setY(Math.min(10, y + 1));
        }
    });
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Text, null, "Use arrow keys to move the face. Press \u201Cq\u201D to exit."),
        react_1.default.createElement(ink_1.Box, { height: 12, paddingLeft: x, paddingTop: y },
            react_1.default.createElement(ink_1.Text, null, "^_^"))));
};
exports.default = Robot;
