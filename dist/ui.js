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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
// @ts-ignore;
var ink_1 = require("ink");
// @ts-ignore;
var TextInput_1 = __importDefault(require("./components/TextInput"));
var InitProject_1 = __importDefault(require("./view/InitProject"));
// @ts-ignore
var App = function (_a) {
    var cli = _a.cli;
    var _b = react_1.useState(''), command = _b[0], setCommand = _b[1];
    var _c = react_1.useState(''), name = _c[0], setName = _c[1];
    var _d = react_1.useState(''), input = _d[0], setInput = _d[1];
    react_1.useEffect(function () {
        if (cli.input.length > 0) {
            setCommand(cli.input[0]);
            setName(cli.input[1] || '');
        }
        else {
            cli.showHelp();
        }
    }, []);
    return (command === 'init' ? name ? react_1.default.createElement(InitProject_1.default, { projectName: name }) :
        react_1.default.createElement(ink_1.Box, { flexDirection: "column", padding: 1 },
            react_1.default.createElement(ink_1.Box, { marginRight: 1, marginBottom: 1 },
                react_1.default.createElement(ink_1.Text, null, '使用ptcore - 创建项目')),
            react_1.default.createElement(ink_1.Box, { marginRight: 1 },
                react_1.default.createElement(ink_1.Text, null, "Please enter project name:"),
                react_1.default.createElement(TextInput_1.default, { value: input, onChange: setInput, onSubmit: function () { return setName(input); } })))
        : react_1.default.createElement(react_1.default.Fragment, null));
};
module.exports = App;
exports.default = App;
