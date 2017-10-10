// 例子一：编码一样，内容一样
let buf1 = Buffer.from('A');
let buf2 = Buffer.from('A');
console.log(buf1.equals(buf2)); // true

// 例子二：编码不同，内容一样
let buf3 = Buffer.from('ABC');
let buf4 = Buffer.from('414243', 'hex');
console.log(buf3.equals(buf4)); // true

// 例子三：编码一样，内容不同
let buf5 = Buffer.from('B');
let buf6 = Buffer.from('C');
console.log(buf5.equals(buf6)); // false


