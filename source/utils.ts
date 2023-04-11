// const gitClone = require('git-clone/promise');
// const rm = require('rimraf').sync;

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export async function downloadTemplate(data: { lang: string, vue: string, type: string }, path: string) {
	await sleep(2000);
	return;
	// const templateUrl = 'git@git.patsnap.com:core-product/tpl-starters.git'
	// await gitClone(templateUrl, path, {
	// 	// checkout: `template-${data.lang}-${data.vue}-${data.type}`,
	// })
	// rm(path + '/.git');
	// return true;
}

export async function initProjectDir(data: { lang: string, vue: string, type: string }, path: string) {
	await sleep(2000);
	return;
}

export async function installDependencies(data: { lang: string, vue: string, type: string }, path: string) {
	await sleep(2000);
	return;
}
