const gitClone = require('git-clone/promise');
const rm = require('rimraf').sync;

export async function downloadTemplate(data: { lang: string, vue: string, type: string }, path: string) {
	console.log('ssss', data);
	const templateUrl = 'git@git.patsnap.com:core-product/tpl-starters.git'
	await gitClone(templateUrl, path, {
		// checkout: `template-${data.lang}-${data.vue}-${data.type}`,
	})
	rm(path + '/.git');
	return true;
}
