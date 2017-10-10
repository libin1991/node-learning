/**
 * 创建buffer
 */

// 创建一个长度为10且用0填充的Buffer
const buf1 = Buffer.alloc(10);
console.log(buf1); 

// 创建一个长度为10且用0x1填充的Buffer
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);


// 创建一个长度为10且未初始化的Buffer
// 该方法比调用 Buffer.alloc() 更快
// 但返回的数据可能包含旧数据
// 因此需要用 fill() 或 write() 重写
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3); // 打印出的数据其中就包含有数据

// 创建一个包含 [0x1, 0x2, 0x3] 的Buffer
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4); 

// 创建体格包含UTF-8字节的Buffer
const buf5 = Buffer.from('tést');
console.log(buf5);

// 创建一个包含 Latin-1 字节的Buffer
const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6); 
