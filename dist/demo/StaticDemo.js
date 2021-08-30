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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const Example = () => {
    const [tests, setTests] = react_1.useState([]);
    react_1.useEffect(() => {
        let completedTests = 0;
        let timer;
        const run = () => {
            // Fake 10 completed tests
            if (completedTests++ < 10) {
                setTests(previousTests => ([
                    // ...previousTests,
                    {
                        id: previousTests.length,
                        title: `Test #${completedTests}`
                    }
                ]));
                timer = setTimeout(run, 1000);
            }
        };
        run();
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Static, { items: tests }, test => (react_1.default.createElement(ink_1.Box, { key: test.id },
            react_1.default.createElement(ink_1.Text, { color: "green" },
                "\u2714 ",
                test.title)))),
        react_1.default.createElement(ink_1.Box, { marginTop: 1 },
            react_1.default.createElement(ink_1.Text, { dimColor: true },
                "Completed tests: ",
                tests.length))));
};
exports.default = Example;