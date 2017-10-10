# NodeJS 缓冲-Buffer
Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在被创建时确定，且无法调整。

Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require('buffer').Buffer。

## 基本使用
```
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

```
其中，`Buffer.alloc()`返回一个指定大小的被填满的`Buffer`实例。这个方法虽然明显地比`Buffer.allocUnsafe()`慢，但是可以确保新创建的`Buffer`实例绝不会包含旧的和潜在的敏感数据。

## Buffer与字符编码
`Buffer`实例一般用于表示编码字符的序列，比如UTF-8、UCS2、Base64或十六进制编码。通过使用显式的字符编码，就可以实现`Buffer`实例与普通JS字符串之间的相互转换。
```
/**
 * Buffer与字符编码
 */
const buf = Buffer.from('Hello World', 'ascii');
console.log(buf.toString('hex'));

console.log('-'.repeat(20));
console.log(buf.toString('base64'));

```

## 相关方法

- Buffer.compare()

    ```
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
    ```

- Buffer.concat()

    ```
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
	```

- Buffer.equals()

    ```
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
	```

- Buffer.fill()
    
    ```
	let buf = Buffer.alloc(10);
	buf.fill('-');

	console.log(buf.toString()); // ----------
	```

- 遍历接口

    ```
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
    ```
