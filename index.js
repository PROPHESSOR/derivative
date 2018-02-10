'use strict';

const prompt = require('prompt-sync')();

const Parser = require('./parser');

const parser = new Parser(prompt('Введите функцию:'));

console.dir(parser.parse());