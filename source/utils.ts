const gitClone = require('git-clone/promise');
const rm = require('rimraf').sync;
const spawn = require('cross-spawn');
const replaceInFile = require('replace-in-file');
const { promises: fs } = require('fs');

export const NEED_REPLACE_FILES = [
	'package.json',
	'README.md',
	'apps/**/README.md',
	'apps/**/package.json',
	'apps/**/.env.development',
	'apps/**/.env.production',
	'apps/**/*.js',
	'apps/**/*.ts',
	'apps/**/*.html',
];

export const APP_NEED_REPLACE_FILES = [
	'package.json',
	'README.md',
	'.env.development',
	'.env.production',
	'**/README.md',
	'**/*.js',
	'**/*.ts',
	'**/*.html',
];

export const OPTIONS = [
	[{key: 'ts', label: 'TypeScript', value: 'ts'}, {key: 'js', label: 'JavaScript', value: 'js'},],
	[{key: 'vue2', label: 'Vue 2.7+', value: 'vue2'}, {key: 'vue3', label: 'Vue 3+', value: 'vue3'},],
	[{key: 'spa', label: 'SPA', value: 'spa'}, {key: 'ssr', label: 'SSR', value: 'ssr'},],
]

export const IGNORE_REPLACE_FILES = [
	'node_modules/**',
	'common-i18n/**',
];

export const REPLACE_PROJECT_KEY = /\{\{PROJECT_NAME\}\}/g;
export const REPLACE_APP_KEY = /\{\{APP_NAME\}\}/g;

export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const replaceInFilePromise = (options: any) => {
	return new Promise<void>((resolve, reject) => {
		try {
			replaceInFile(options, () => resolve());
		} catch (e) {
			reject(e);
		}
	});
}

/**
 * 添加项目启动命令
 * @param path
 * @param name
 */
async function addRunScript(path: string, name: string): Promise<void> {
	const file = await fs.readFile(path, 'utf8');
	const fileObj = JSON.parse(file);
	fileObj.scripts[name] = `yarn workspace ${name} run serve`;
	return fs.writeFile(path, JSON.stringify(fileObj, null, 4), 'utf8');
}

/**
 * 执行命令
 * @param command command
 * @param args arguments
 * @param cwd current working directory
 */
export function runCommand(command: string, args: string[], cwd: string): Promise<number> {
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, {
			cwd,
			stdio: 'ignore', // ignore, pipe, inherit, overlay, overlapped
		});
		child.on('close', (code: number) => {
			if (code !== 0) {
				reject({
					command: `${command} ${args.join(' ')}`,
				});
				return;
			}
			resolve(0);
		});
	});
}

export async function cloneCommonI18n(): Promise<boolean> {
	const i18nUrl = 'git@git.patsnap.com:core-product/common/vue2/common-i18n.git';
	await gitClone(i18nUrl);
	return true;
}

export async function downloadTemplate(data: { lang: string, vue: string, type: string }, path: string) {
	const templateUrl = 'git@git.patsnap.com:core-product/tpl-starters.git'
	await gitClone(templateUrl, path, {
		checkout: `template-${data.lang}-${data.vue}-${data.type}`,
	});
	await gitClone(templateUrl, `${path}/apps/${path}`, {
		checkout: 'template-app',
	});
	rm(path + '/.git');
	rm(`${path}/apps/${path}/.git`);
	return true;
}

export async function initProjectDir(data: { lang: string, vue: string, type: string }, name: string) {
	// 替换项目名称
	await replaceInFilePromise({
		files: NEED_REPLACE_FILES.map(file => `${name}/${file}`),
		ignore: IGNORE_REPLACE_FILES.map(file => `${name}/${file}`),
		from: REPLACE_PROJECT_KEY,
		to: name,
	});
	// 替换应用名称
	await replaceInFilePromise({
		files: NEED_REPLACE_FILES.map(file => `${name}/${file}`),
		ignore: IGNORE_REPLACE_FILES.map(file => `${name}/${file}`),
		from: REPLACE_APP_KEY,
		to: name,
	});
	// 添加启动命令
	await addRunScript(`${name}/package.json`, name);
	return;
}

export async function installDependencies(data: { lang: string, vue: string, type: string }, path: string) {
	await runCommand('git', ['clone', 'git@git.patsnap.com:core-product/common/vue2/common-i18n.git'], path);
	await runCommand('yarn', [], path);
	return;
}

export async function downloadAppTemplate(data: { lang: string, vue: string, type: string }, path: string) {
	const templateUrl = 'git@git.patsnap.com:core-product/tpl-starters.git'
	await gitClone(templateUrl, `apps/${path}`, {
		checkout: 'template-app',
	});
	rm(`apps/${path}/.git`);
	return true;
}

export async function initAppDir(data: { lang: string, vue: string, type: string }, name: string) {
	// 替换应用名称
	await replaceInFilePromise({
		files: NEED_REPLACE_FILES,
		ignore: IGNORE_REPLACE_FILES,
		from: REPLACE_APP_KEY,
		to: name,
	});
	// 添加启动命令
	await addRunScript(`package.json`, name);
	return;
}

export async function installAppDependencies(data: { lang: string, vue: string, type: string }, path: string) {
	await runCommand('yarn', [], './');
	return;
}
