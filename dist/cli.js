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
var cli = meow_1.default("\n\tUsage\n\t\t$ ptcore <command> [options]\n\n\tCommands\n\t\tinit: Initialize a project\n\t\tadd: Add a new package to an existing project\n\n\tExamples\n\t\t$ ptcore init analytics-next\n\n", {
    autoHelp: false,
    flags: {
        name: {
            type: 'string',
            alias: 'n',
            isRequired: false,
        }
    }
});
// @ts-ignore
ink_1.render(react_1.default.createElement(ui_1.default, { name: cli.flags['name'], cli: cli }));
