"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
// import TextDemo from './demo/TextDemo'
// import BoxDemo from './demo/BoxDemo'
// import StaticDemo from './demo/StaticDemo'
// import Transform from './demo/Transform'
// import UseInputDemo from './demo/useInputDemo'
// import UseFocusDemo from './demo/useFocusDemo'
var view_1 = __importDefault(require("./view"));
var App = function (_a) {
    var cli = _a.cli;
    // <>
    // {/* <TextDemo/> */}
    // {/* <BoxDemo /> */}
    // {/* <StaticDemo /> */}
    // {/* <Transform /> */}
    // {/* <UseInputDemo /> */}
    // {/* <UseFocusDemo /> */}
    // </>
    react_1.useEffect(function () {
        console.log('mounted:', cli);
    }, []);
    return react_1["default"].createElement(view_1["default"], null);
};
module.exports = App;
exports["default"] = App;
