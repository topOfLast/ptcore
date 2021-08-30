"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import TextDemo from './demo/TextDemo'
// import BoxDemo from './demo/BoxDemo'
const StaticDemo_1 = __importDefault(require("./demo/StaticDemo"));
const App = () => (
// <TextDemo/>
// <BoxDemo />
react_1.default.createElement(StaticDemo_1.default, null));
module.exports = App;
exports.default = App;
