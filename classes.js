'use strict';

const classes = [
	'cos',
	'exp',
	'sin',
	'x'
];

for (const c of classes) {
	exports[c] = require(`./classes/${c}`);
}