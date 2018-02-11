'use strict';

class func {
	constructor(fnc = 'unknown function', x = '') {
		this.fnc = fnc;
		this.x = x;
		this.sub = [];

		{
			this.toString = this.toString.bind(this);
		}
	}

	toString() {
		function recursive(root) {
			let out = `${root.fnc}(`;

			for (const sub of root.sub) {
				out += sub.fnc;
				if (sub.sub.length) out += `(${recursive(sub)})`;
			}

			out += ')';

			return out;
		}

		return recursive(this);
	}
}

module.exports = func;