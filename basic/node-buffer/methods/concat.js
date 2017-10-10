/**
 * Buffer.compare(list [, totalLength])
 * 返回一个合并list中所有`Buffer`的新建`Buffer`
 * 长度由totalLength指定
 * 若无totalLength，则从list中所有`Buffer`的计算得到
 */
let buf1 = Buffer.alloc(10);
let buf2 = Buffer.alloc(20);

let totalLength = buf1.length + buf2.length;
console.log(totalLength); // 45

let buf3 = Buffer.concat([buf1, buf2], totalLength);
console.log(buf3.length); // 45

let buf4 = Buffer.concat([buf1, buf2], 3);
console.log(buf4.length); // 3
console.log(buf4); // <Buffer 00 00 00>

let buf5 = Buffer.from([1, 2]);
let buf6 = Buffer.from([3, 4]);
let buf7 = Buffer.concat([buf5, buf6], 3);
console.log(buf7); // <Buffer 00 00 00>

let buf8 = Buffer.concat([buf5, buf6], buf5.length + buf6.length);
console.log(buf8); // <Buffer 01 02 03 04>

let buf9 = Buffer.concat([buf5, buf6]);
console.log(buf9); // <Buffer 01 02 03 04>


