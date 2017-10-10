let buf = Buffer.from('abc');

for (let key of buf.keys()) {
	console.log(`key is ${key}`);
}
// key is 0
// key is 1
// key is 2

for (let value of buf.values()) {
	console.log(`value is ${value}`);
}
// value is 97
// value is 98
// value is 99

for (let [key, value] of buf.entries()) {
	console.log(`${key}: ${value}`);
}
// 0: 97
// 1: 98
// 2: 99
