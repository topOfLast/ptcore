"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// @ts-ignore;
var ink_1 = require("ink");
var Robot = function () {
    var exit = ink_1.useApp().exit;
    var _a = react_1.default.useState(1), x = _a[0], setX = _a[1];
    var _b = react_1.default.useState(1), y = _b[0], setY = _b[1];
    ink_1.useInput(function (input, key) {
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
