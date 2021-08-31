"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import TextDemo from './demo/TextDemo'
// import BoxDemo from './demo/BoxDemo'
// import StaticDemo from './demo/StaticDemo'
// import Transform from './demo/Transform'
// import UseInputDemo from './demo/useInputDemo'
const useFocusDemo_1 = __importDefault(require("./demo/useFocusDemo"));
const App = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(useFocusDemo_1.default, null)));
module.exports = App;
exports.default = App;
