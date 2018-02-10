'use strict';

const classes = require('./classes');

const regex = /(\w+)\(([^+-=*/]*)\)/;

class Parser {
	constructor(x) {
		this._parsed = [];
		this._raw = this._input = this._tmp = x;
	}

	parse(_x = this._tmp) {
		let x = _x;

		this.prepare(x);

		try {
			while (x !== '') {
				const tmp = this.parseone(x);

				if (!tmp) continue;

				if (classes[tmp[1]]) {
					this._parsed.push(new classes[tmp[1]](tmp[2]));
					if (tmp[2]) {
						this.parsesub(this._parsed[this._parsed.length - 1]);
					}
				} else {
					console.warn(`Не найден класс для функции ${tmp[1]}`);
				}

				x = x.slice(tmp[0].length + tmp.index);
			}
		} catch (e) {
			console.error(e);
			console.dir(this.parsed);
		}

		return this._parsed;
	}

	parsesub(_x) {
		let x = _x;

		// this.prepare(x);

		try {
			while (x !== '') {
				console.log(x);
				const tmp = this.parseone(x);

				if (!tmp) break;

				if (classes[tmp[1]]) {
					this._parsed[this._parsed.length - 1].sub.push(new classes[tmp[1]](tmp[2]));
				} else {
					console.warn(`Не найден класс для функции ${tmp[1]}`);
				}
			}
		} catch (e) {
			console.error(e);
			console.dir(this.parsed);
		}

		return this._parsed;
	}

	parseone(x) {
		// TODO: Проверка на оператор
		return regex.exec(x);
	}

	prepare(x = this._input) {
		const tmp = this._input;
			// .replace(/\+/g, 'plus()')
			// .replace(/-/g, 'minus()')
			// .replace(/\*/g, 'multiply()')
			// .replace(/\//g, 'divide()');

		// this._tmp = this._input = tmp;
		return tmp;
	}

	get parsed() {
		return this._parsed;
	}
}

module.exports = Parser;