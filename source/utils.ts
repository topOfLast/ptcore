const gitClone = require('git-clone/promise');
const rm = require('rimraf').sync;
const spawn = require('cross-spawn');
const replaceInFile = require('replace-in-file');

export const NEED_REPLACE_FILES = [
	'package.json',
	'README.md',
	'apps/**/*.js',
	'apps/**/*.ts',
	'apps/**/*.html',
];

export const IGNORE_REPLACE_FILES = [
	'node_modules/**',
	'common-i18n/**',
];

export const REPLACE_PROJECT_KEY = /\{\{PROJECT_NAME\}\}/g;
export const REPLACE_APP_KEY = /\{\{APP_NAME\}\}/g;

export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
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
	})
	rm(path + '/.git');
	return true;
}

export async function initProjectDir(data: { lang: string, vue: string, type: string }, name: string) {
	await replaceInFile({
		files: NEED_REPLACE_FILES.map(file => `${name}/${file}`),
		ignore: IGNORE_REPLACE_FILES.map(file => `${name}/${file}`),
		from: REPLACE_PROJECT_KEY,
		to: name,
	});
	return;
}

export async function installDependencies(data: { lang: string, vue: string, type: string }, path: string) {
	await runCommand('git', ['clone', 'git@git.patsnap.com:core-product/common/vue2/common-i18n.git'], path);
	await runCommand('yarn', [], path);
	return;
}
