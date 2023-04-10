import React from 'react';
// @ts-ignore;
import { Text } from 'ink';

const Example = () => (
	<>
		<Text color="green">I am green</Text>
		<Text color="black" backgroundColor="white">
			I am black on white
		</Text>
		<Text color="#ffffff">I am white</Text>
		<Text bold>I am bold</Text>
		<Text italic>I am italic</Text>
		<Text underline>I am underline</Text>
		<Text strikethrough>I am strikethrough</Text>
		<Text inverse>I am inversed</Text>

		<Text color="green">Green</Text>
		<Text color="#005cc5">Blue</Text>
		<Text color="rgb(232, 131, 136)">Red</Text>
	</>
);

export default Example;
