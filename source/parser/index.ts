import { parse } from '@babel/parser';
import { promises } from 'fs';

export async function getParse(code: string) {
	const fileData = await promises.readFile(code, { encoding: 'utf8'});
    return parse(fileData);
}
