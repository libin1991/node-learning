/**
 * Buffer与TypedArray
 */
const arr = new Unit16Array(2);
arr[0] = 5000;
arr[1] = 4000;

// 拷贝`arr`的内容 
const buf1 = Buffer.from(arr);

// 与`arr`共享内存 
const buf2 = Buffer.from(arr.buffer);

console.log(buf1); // 输出: <Buffer 88 a0>
console.log(buf2); // 输出: <Buffer 88 13 a0 0f>

arr[1] = 6000;

console.log(buf1); // 输出: <Buffer 88 a0>
console.log(buf2); // 输出: <Buffer 88 13 70 17>
