// Fork of https://github.com/sindresorhus/figures
import isUnicodeSupported from 'is-unicode-supported';

const symbols = {
	arrowRight: '→',
	tick: '✔',
	info: 'ℹ',
	warning: '⚠',
	cross: '✖',
	squareSmallFilled: '◼',
	clock:'🕐',
	pointer: '❯',
};

const fallbackSymbols = {
	arrowRight: '→',
	tick: '√',
	info: 'i',
	warning: '‼',
	cross: '×',
	squareSmallFilled: '■',
	clock:'■',
	pointer: '>',
};

export default (
	isUnicodeSupported()
		? symbols
		: fallbackSymbols
);
