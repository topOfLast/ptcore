import React, {FC, useEffect, useState} from 'react';
// @ts-ignore;
import {Box, Text} from 'ink';
// @ts-ignore;
import TextInput from './components/TextInput';
import InitProject from './view/InitProject';
import AddApp from './view/AddApp';

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
const App: FC<{ name?: string, cli?: CliData }> = ({cli}: { cli: CliData }) => {
    const [command, setCommand] = useState('');
    const [name, setName] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        if (cli.input.length > 0) {
            setCommand(cli.input[0] as string);
            setName(cli.input[1] || '')
        } else {
            cli.showHelp();
        }
    }, [])
    return (
        // 初始化项目
        command === 'init'
            ? name
                ? <InitProject projectName={name}/>
                : <Box flexDirection="column" padding={1}>
                    <Box marginRight={1} marginBottom={1}>
                        <Text>{'使用ptcore - 创建项目'}</Text>
                    </Box>
                    <Box marginRight={1}>
                        <Text>Please enter project name:</Text>
                        <TextInput value={input} onChange={setInput} onSubmit={() => setName(input)}/>
                    </Box>
                </Box>
            // 新增app
            : command === 'add'
                ? name
                    ? <AddApp appName={name}/>
                    : <Box flexDirection="column" padding={1}>
                        <Box marginRight={1} marginBottom={1}>
                            <Text>{'使用ptcore - 新增应用'}</Text>
                        </Box>
                        <Box marginRight={1}>
                            <Text>Please enter app name:</Text>
                            <TextInput value={input} onChange={setInput} onSubmit={() => setName(input)}/>
                        </Box>
                    </Box>
                : <></>
    )
};

module.exports = App;
export default App;
