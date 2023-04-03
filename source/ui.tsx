import React, {FC, useEffect, useState} from 'react';
import HomePage from './view'

interface CliData {
	input: string[],
	flags: Record<string, boolean | string>
	help: string,
	showHelp: () => void,
	showVersion: () => void,
	pkg: {
		name: string,
		version: string,
		license: string
	}
}

// @ts-ignore
const App: FC<{name?: string, cli?: Object}> = ({ cli }: { cli: CliData }) => {
	// @ts-ignore;
	const [command, setCommand] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		if (cli.input.length > 1 && cli.input[0] === 'init' && cli.input[1]) {
			setCommand(cli.input[0]);
			setName(cli.input[1])
		} else {
			cli.showHelp();
		}
	}, [])
	return (command === 'init' ? <HomePage projectName={name}/> : <></>)
};

module.exports = App;
export default App;
