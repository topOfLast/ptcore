import React from "react";
import {Box, Text, useFocus, useFocusManager, useInput, useApp} from 'ink';

import { getParse } from "../parser";
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
		} else if (key.return) {
			console.log('input', _input, '1111:', key);
			getParse('D:/code/babel-scaner/source/temp/script.js').then( res => console.log('res:', res));
			exit();
		}
	});

	return (<Box flexDirection="column" padding={1}>
		<Box marginBottom={1}>
			<Text>
				Press Tab to focus next element, Shift+Tab to focus previous element,
				Esc to reset focus.
			</Text>
		</Box>
		<Item label="parser" />
		<Item label="Second" />
		<Item label="Third" />
	</Box>);
};

const Item = ({ label }:{label: string}) => {
	const {isFocused} = useFocus();
	return (
		<Text>
			{label} {isFocused && <Text color="green">&lt;--</Text>}
		</Text>
	);
};

export default HomePage;
