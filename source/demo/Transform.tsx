import React from 'react';
// @ts-ignore;
import {Transform, Text} from 'ink';

const Example = () => (
	<Transform transform={(output: string) => output.toUpperCase()}>
		<Text>Hello World</Text>
	</Transform>
);

export default Example;
