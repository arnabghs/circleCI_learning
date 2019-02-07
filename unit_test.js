const assert = require('assert');

const add = function (a, b) {
	return a + b;
}

const sub = function (a, b) {
	return a - b;
}


describe('add', () => {
	it(' return sum', () => {
		let actualOutput = add(3, 3);
		let expectedOutput = 6;
		assert.deepEqual(actualOutput, expectedOutput);
	});
});