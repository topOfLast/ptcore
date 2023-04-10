import React, { FC, useEffect, useState } from 'react';
// @ts-ignore;
import { Box, Text } from 'ink';
// @ts-ignore;
import TextInput from './components/TextInput';
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
	const [input, setInput] = useState('');

	useEffect(() => {
		if (cli.input.length > 1 && cli.input[0] === 'init') {
			setCommand(cli.input[0]);
			setName(cli.input[1] || '')
		} else {
			cli.showHelp();
		}
	}, [])
	return (command === 'init' ? name ? <HomePage projectName={name}/> :
			<Box>
				<Box marginRight={1}>
					<Text>Enter project name:</Text>
				</Box>
				<TextInput value={input} onChange={setInput} onSubmit={() => setName(input)} />
			</Box>
		: <></>)
};

module.exports = App;
export default App;
