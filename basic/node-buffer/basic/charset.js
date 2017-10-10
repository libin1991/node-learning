/**
 * Buffer与字符编码
 */
const buf = Buffer.from('Hello World', 'ascii');
console.log(buf.toString('hex'));

console.log('-'.repeat(20));
console.log(buf.toString('base64'));
