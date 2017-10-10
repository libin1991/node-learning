let buf1 = Buffer.from([1, 2]);
let buf2 = Buffer.alloc(3);

buf1.copy(buf2);

console.log(buf1);

buf2.copy(buf1);
console.log(buf2);
