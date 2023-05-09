import React, { useState } from "react";
// @ts-ignore
import {Box, Text, useFocus, useFocusManager, useInput, useApp, Newline} from 'ink';
import cliSpinners from "cli-spinners";
import SelectInput from '../components/SelectInput';
import TextInput from '../components/TextInput';
import {Task, TaskList} from '../components/TaskList';
import {downloadAppTemplate, installAppDependencies, initAppDir, OPTIONS} from '../utils'

const TIPs = [
	'请选择使用的语言：',
	'请选择Vue版本：',
	'请选择编译类型：'
]

const data: { lang: string, vue: string, type: string } = {} as { lang: string, vue: string, type: string };

const AddApp = ({ appName }: { appName: string }) => {
	const [step, setStep] = useState(0);
	const [input, setInput] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);
	const [isShowTask, setIsShowTask] = useState(false);
	const [taskStatus, setTaskStatus] = useState<Array<'pending'|'loading'|'success'|'warning'|'error'>>(['loading', 'pending', 'pending']);
	const {exit} = useApp();

	function handleConfirm() {
		if (input) {
			const firstChat = input[0] as string;
			setInput('');
			if (firstChat.toUpperCase() === 'Y') {
				setIsShowTask(true);
				downloadAppTemplate(data, appName).then(() => {
					setTaskStatus(['success', 'loading', 'pending']);
					initAppDir(data, appName).then(() => {
						setTaskStatus(['success', 'success', 'loading']);
						installAppDependencies(data, appName).then(() => {
							setTaskStatus(['success', 'success', 'success']);
							setShowSuccess(true);
							exit();
						}).catch(e => {
							setTaskStatus(['success', 'success', 'error']);
							exit();
						});
					});
				}).catch(e => {
					setTaskStatus(['error', 'pending', 'pending']);
					exit();
				});
			} else if (firstChat.toUpperCase() === 'N') {
				setStep(0);
			}
		}
	}

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

	return (showSuccess
			? <Box flexDirection="column" padding={1}>
				<Text color="green">app添加成功！</Text>
				<Text color="green">运行 yarn {appName} 启动项目。</Text>
			</Box>
			: isShowTask
				? <Box padding={1}>
					<TaskList>
						<Text>{`ptcore - 正在添加 ${appName}：`}<Newline/></Text>
						<Task label="1. 下载模板" state={taskStatus[0]} spinner={cliSpinners.dots}/>
						<Task label="2. 初始化目录" state={taskStatus[1]} spinner={cliSpinners.dots}/>
						<Task label="3. 安装项目依赖" state={taskStatus[2]} spinner={cliSpinners.dots}/>
					</TaskList>
				</Box>
				: step === 3
					? <Box marginBottom={1} padding={1}>
						<Text>
							<Text>{`ptcore - 正在初始化 ${appName} 配置`}</Text>
							<Newline/><Newline/>
							<Text color="yellow">
								{`你选择的配置如下: lang: ${data.lang} + ${data.vue} + ${data.type}。是否确认开始添加App？（Y/N）`}
							</Text>
							<TextInput value={input} onChange={setInput} onSubmit={handleConfirm}/>
						</Text>
					</Box>
					: <Box flexDirection="column" padding={1}>
						<Box marginBottom={1}>
							<Text>
								<Text>{`ptcore - 正在初始化 ${appName} 配置`}</Text>
								<Newline/>
								<Text color="yellow"> {TIPs[step]} </Text>
							</Text>
						</Box>
						<SelectInput items={OPTIONS[step]} onSelect={({value}: { value: string }) => handleEnter(value)}/>
					</Box>
	);
};

export default AddApp;
