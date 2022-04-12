/*

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

const repeatStr = (str, num) => {
	let r = '';
	for (let q = 0; q < num; q = q + 1) {
		r = r + str;
	}
	return r;
};

module.exports = repeatStr;
