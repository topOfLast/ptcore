"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
// @ts-ignore;
var ink_1 = require("ink");
var Example = function () {
    var _a = (0, react_1.useState)([]), tests = _a[0], setTests = _a[1];
    (0, react_1.useEffect)(function () {
        var completedTests = 0;
        var timer;
        var run = function () {
            // Fake 10 completed tests
            if (completedTests++ < 10) {
                setTests(function (previousTests) { return __spreadArray(__spreadArray([], previousTests, true), [
                    {
                        id: previousTests.length,
                        title: "Test #".concat(previousTests.length + 1)
                    }
                ], false); });
                setTimeout(run, 100);
            }
        };
        run();
        return function () {
            clearTimeout(timer);
        };
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Static, { items: tests }, function (test) { return (react_1.default.createElement(ink_1.Box, { key: test.id },
            react_1.default.createElement(ink_1.Text, { color: "green" },
                "\u2714 ",
                test.title))); }),
        react_1.default.createElement(ink_1.Box, { marginTop: 1 },
            react_1.default.createElement(ink_1.Text, { dimColor: true },
                "Completed tests: ",
                tests.length))));
};
exports.default = Example;
