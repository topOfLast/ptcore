#!/usr/bin/env node
import React from 'react';
// @ts-ignore;
import {render} from 'ink';
import meow from 'meow';
import App from './ui';
// @ts-ignore
import figlet from 'figlet';

// @ts-ignore;
const cli = meow<{ input: string[], flags: Record<string, { type: string }> }>(`
	Usage
		$ patsnap-core <command> [options]

	Commands
		init: Initialize a project
		add: Add a new package to an existing project

	Examples
		$ patsnap-core init analytics-next

`, {
    autoHelp: false,
    autoVersion: true,
    flags: {
        name: {
            type: 'string',
            alias: 'n',
            isRequired: false,
        }
    }
});

figlet("ptcore", {
    font: 'Small Isometric1'
}, function (err: any, data: string) {
    if (err) {
        return;
    }
    console.log(data);
});

// @ts-ignore
render(<App name={cli.flags['name']} cli={cli}/>);
