'use strict';

const prompt = require('prompt-sync')();

const Parser = require('./parser');

const parser = new Parser(prompt('Введите функцию:'));

const out = parser.parse();

console.log(JSON.stringify(out, 0, 4));