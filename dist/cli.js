#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// @ts-ignore;
var ink_1 = require("ink");
var meow_1 = __importDefault(require("meow"));
var ui_1 = __importDefault(require("./ui"));
// @ts-ignore;
var cli = meow_1.default("\n\tUsage\n\t  $ ptcore init <package>\n\n\tOptions\n\t\t--help show help message.\n\t\t--version show current version.\n\n\tExamples\n\t  $ ptcore init analytics-next\n\n", {
    flags: {
        name: {
            type: 'string',
        }
    }
});
// @ts-ignore
ink_1.render(react_1.default.createElement(ui_1.default, { name: cli.flags['name'], cli: cli }));
