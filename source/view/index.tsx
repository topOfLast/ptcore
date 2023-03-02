import React from "react";
import {Box, Text, useFocus, useFocusManager, useInput, useApp} from 'ink';

// import { getParse } from "../parser";
// const  scriptFile = require('../temp/script.js');

const HomePage = () => {

	const { focusNext, focusPrevious } = useFocusManager();
	const { exit } = useApp();

	useInput((_input, key) => {
		if (key.escape) {
			exit();
		} else if (key.upArrow) {
			focusPrevious();
		} else if (key.downArrow) {
			focusNext();
		}
	});

	function handleEnter(key: string): void {
		console.log('handle enter:', key);
		// getParse('D:/code/babel-scaner/source/temp/script.js').then( res => console.log('res:', res));
	}

	return (<Box flexDirection="column" padding={1}>
		<Box marginBottom={1}>
			<Text color="yellow">
				使用'Tab', '↑', '↓'更改选项(Esc退出):
			</Text>
		</Box>
		<Item autoFocus={true} label="Parser" onEnter={handleEnter} />
		<Item autoFocus={false} label="Second" onEnter={handleEnter} />
		<Item autoFocus={false} label="Third" onEnter={handleEnter} />
	</Box>);
};

const Item = ({ label, autoFocus = false, onEnter }:{label: string, autoFocus: boolean, onEnter: (key: string) => void}) => {
	const {isFocused} = useFocus({ autoFocus });
	useInput((_input, key) => {
		if (key.return && isFocused && typeof onEnter === 'function') {
			onEnter(label);
		}
	});
	return (
		<Text color={isFocused ? 'green' : ''}>
			<Text>·</Text> {label} {isFocused && <Text>👈👈</Text>}
		</Text>
	);
};

export default HomePage;
