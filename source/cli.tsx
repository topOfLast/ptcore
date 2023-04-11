#!/usr/bin/env node
import React from 'react';
// @ts-ignore;
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

// @ts-ignore;
const cli = meow<{ input: string[], flags: Record<string, { type: string }>}>(`
	Usage
		$ ptcore <command> [options]

	Commands
		init: Initialize a project
		add: Add a new package to an existing project

	Examples
		$ ptcore init analytics-next

`, {
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
render(<App name={cli.flags['name']} cli={cli}/>);
