import { FC } from 'react';
interface CliData {
    input: string[];
    flags: Record<string, boolean | string>;
    help: string;
    showHelp: () => void;
    showVersion: () => void;
    pkg: {
        name: string;
        version: string;
        license: string;
    };
}
declare const App: FC<{
    name?: string;
    cli?: CliData;
}>;
export default App;
