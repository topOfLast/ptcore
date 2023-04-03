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
const react_1 = __importStar(require("react"));
const view_1 = __importDefault(require("./view"));
// @ts-ignore
const App = ({ cli }) => {
    // @ts-ignore;
    const [command, setCommand] = react_1.useState('');
    const [name, setName] = react_1.useState('');
    react_1.useEffect(() => {
        if (cli.input.length > 1 && cli.input[0] === 'init' && cli.input[1]) {
            setCommand(cli.input[0]);
            setName(cli.input[1]);
        }
        else {
            cli.showHelp();
        }
    }, []);
    return (command === 'init' ? react_1.default.createElement(view_1.default, { projectName: name }) : react_1.default.createElement(react_1.default.Fragment, null));
};
module.exports = App;
exports.default = App;
