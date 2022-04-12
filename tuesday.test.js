const func1 = require('./codewars/1.js');
const func2 = require('./codewars/2.js');
const func3 = require('./codewars/3.js');
const func4 = require('./codewars/4.js');

describe('1', () => {
	test('Sum of positive', () => {
		expect(func1([ 1, -4, 7, 12 ])).toBe(20);
		expect(func1([ 2, -7, 5, 8 ])).toBe(15);
		expect(func1([])).toBe(0);
	});

	test('Opposite number', () => {
		expect(func2(1)).toBe(-1);
		expect(func2(14)).toBe(-14);
		expect(func2(-33)).toBe(33);
	});

	test('String repeat', () => {
		expect(func3('Hello', 3)).toBe('HelloHelloHello');
		expect(func3('Go', 5)).toBe('GoGoGoGoGo');
		expect(func3('Repeat', 2)).toBe('RepeatRepeat');
	});

	test('Remove First and Last Character', () => {
		expect(func4('number')).toBe('umbe');
		expect(func4('last')).toBe('as');
		expect(func4('expect')).toBe('xpec');
	});
});
