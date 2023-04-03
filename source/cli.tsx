#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ ptcore init <package>

	Options
		--help show help message.
		--version show current version.

	Examples
	  $ ptcore init analytics-next

`, {
	flags: {
		name: {
			type: 'string'
		}
	}
});

render(<App name={cli.flags.name} cli={cli}/>);
