const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

/**
 * Buffer.compare()
 * 通常用于`Buffer`实例数组的排序
 */
let arr = [buf1, buf2];
console.log(arr.sort(Buffer.compare));

console.log([buf1, buf2, buf3].sort(Buffer.compare));
