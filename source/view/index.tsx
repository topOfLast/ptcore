import React, { useState } from "react";
import { Box, Text, useFocus, useFocusManager, useInput, useApp, Newline } from 'ink';
import { downloadTemplate } from '../utils'

// import { getParse } from "../parser";
// const  scriptFile = require('../temp/script.js');

const TIPs = [
	'请选择使用的语言：',
	'请选择Vue版本：',
	'请选择编译类型：'
]

const OPTIONS = [
	[{key: 'js', label: 'JavaScript'},{key: 'ts', label: 'TypeScript'},],
	[{key: 'Vue2', label: 'Vue 2.7+'},{key: 'Vue3', label: 'Vue 3+'},],
	[{key: 'ssr', label: 'SSR'},{key: 'spa', label: 'SPA'},],
]

const data: { lang: string, vue: string, type: string } = {} as { lang: string, vue: string, type: string };

const HomePage = ({ projectName }: { projectName: string}) => {
	const [step, setStep] = useState(0);
	const { focusNext, focusPrevious } = useFocusManager();
	const { exit } = useApp();

	useInput((_input, key) => {
		if (key.escape) {
			exit();
		} else if (key.upArrow) {
			focusPrevious();
		} else if (key.downArrow) {
			focusNext();
		} else if (_input === 'Y' || _input === 'y') {
			// doSomething
			downloadTemplate(data, projectName).then(() => {
				exit();
			});
		}
	});

	function handleEnter(key: string): void {
		switch (step) {
			case 0:
				data.lang = key;
				setStep(1);
				break;
			case 1:
				data.vue = key;
				setStep(2);
				break;
			case 2:
				data.type = key;
				setStep(3);
				break;
		}
	}

	return (step === 3 ? <Box marginBottom={1} marginTop={1}>
		<Text>
			<Text>{`ptcore - 正在初始化项目 ${projectName} 配置`}</Text>
			<Newline />
			<Newline />
			<Text color="yellow">{`你选择的配置如下: lang: ${data.lang} + ${data.vue} + ${data.type}。是否确认开始初始化？（Y/N）`}</Text>
		</Text>
	</Box> : <Box flexDirection="column" padding={1}>
		<Box marginBottom={1} marginTop={1}>
			<Text>
				<Text>{`ptcore - 正在初始化项目 ${projectName} 配置`}</Text>
				<Newline />
				<Newline />
				<Text color="yellow"> {TIPs[step]} </Text>
			</Text>
		</Box>
		{/*@ts-ignore*/}
		{OPTIONS[step].map((item, index) =>
			<Item key={item.key} autoFocus={index === 0} label={item.label} onEnter={() => handleEnter(item.key)} />
		)}
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
