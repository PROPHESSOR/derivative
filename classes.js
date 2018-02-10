'use strict';

const classes = [
	'cos',
	'exp',
	'sin'
];

for (const c of classes) {
	exports[c] = require(`./classes/${c}`);
}