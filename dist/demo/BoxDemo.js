"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
class BoxDemo extends react_1.default.Component {
    render() {
        return react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
                react_1.default.createElement(ink_1.Box, null,
                    react_1.default.createElement(ink_1.Box, { borderStyle: "single", marginRight: 2 },
                        react_1.default.createElement(ink_1.Text, null, "single")),
                    react_1.default.createElement(ink_1.Box, { borderStyle: "double", marginRight: 2 },
                        react_1.default.createElement(ink_1.Text, null, "double")),
                    react_1.default.createElement(ink_1.Box, { borderStyle: "round", marginRight: 2 },
                        react_1.default.createElement(ink_1.Text, null, "round")),
                    react_1.default.createElement(ink_1.Box, { borderStyle: "bold" },
                        react_1.default.createElement(ink_1.Text, null, "bold"))),
                react_1.default.createElement(ink_1.Box, { marginTop: 1 },
                    react_1.default.createElement(ink_1.Box, { borderStyle: "singleDouble", marginRight: 2 },
                        react_1.default.createElement(ink_1.Text, null, "singleDouble")),
                    react_1.default.createElement(ink_1.Box, { borderStyle: "doubleSingle", marginRight: 2 },
                        react_1.default.createElement(ink_1.Text, null, "doubleSingle")),
                    react_1.default.createElement(ink_1.Box, { borderStyle: "classic" },
                        react_1.default.createElement(ink_1.Text, null, "classic")))),
            react_1.default.createElement(ink_1.Box, { borderStyle: "round", borderColor: "green", width: 20 },
                react_1.default.createElement(ink_1.Text, null, "Green Rounded Box")));
    }
}
exports.default = BoxDemo;
