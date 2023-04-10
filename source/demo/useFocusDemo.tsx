import React from "react";
// @ts-ignore;
import {Box, Text, useFocus} from 'ink';

const Focus = () => (
	<Box flexDirection="column" padding={1}>
		<Box marginBottom={1}>
			<Text>
				Press Tab to focus next element, Shift+Tab to focus previous element,
				Esc to reset focus.
			</Text>
		</Box>
		<Item label="First" />
		<Item label="Second" />
		<Item label="Third" />
	</Box>
);

const Item = ({ label }:{label: string}) => {
	const {isFocused} = useFocus();
	return (
		<Text>
			{label} {isFocused && <Text color="green">(focused)</Text>}
		</Text>
	);
};

export default Focus;
