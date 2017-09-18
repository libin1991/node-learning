# NodeJS 进程模块process

## 环境变量：process.env

```
/** 
 * 判断node服务运行的环境
 */
console.log(process.env); // 返回当前用户的环境变量

if (process.env.NODE_ENV == 'production') {
	process.stdout.write('生产环境');
}
else {
	process.stdout.write('非生产环境');
}

// 命令行输入：node env.js NODE_ENV=production
// 输出：非生产环境
```

## 异步：process.nextTick(fn)
* 该函数将fn放入node事件循环的下一个tick执行
* 该函数比setTimeout(fn, 0)性能高

```
console.log(1);
process.nextTick(() => {
	console.log(2);
});
console.log(3);

// 依次输出：1、3、2
```

## 获取命令行参数：process.argv

```
/**
 * process.argv
 * 获取命令行参数
 * 返回一个数组：
 * 元素0：node
 * 元素1：可执行文件的绝对路径
 * 元素x：其他
 */
process.argv.forEach((val, index, arr) => {
	console.log("参数" + index + ":" + arr);
});

```

## 获取node程序特有的参数：process.execArgv

```
process.execArgv.forEach((val, index, arr) => {
	console.log('参数' + index + "：" + val);
});

console.log("----分割线----");

process.argv.forEach((val, index, arr) => {
	console.log('参数' + index + "：" + val);
});

// 命令行输入：node --harmony execArgv.js --nick zx
// 输出如下：
// 参数0：--harmony
// ----分割线----
// 参数0：C:\Program Files\nodejs\node.exe
// 参数1：C:\Users\ZX\Desktop\node\node-learning-note\basic\node-process\execArgv.js
// 参数2：--nick
// 参数3：zx
```

## 当前工作路径：process.cwd() 和 process.chdir()
* process.cwd()：返回当前工作路径
* process.chdir(directory)：切换当前工作路径

```
console.log('当前工作路径：' + process.cwd()); // 形如：当前工作路径：C:\Users\ZX\Desktop\node

// 尝试切换Node.js进程的当前工作路径
try {
	process.chdir('ymp');
	console.log('新工作路径：' + process.cwd());
}
catch (err) {
	console.log('切换失败：' + err);
}
```

## 进程间通信（IPC）
* process.connected：如果当前进程是子进程，且与父进程之间通过IPC通道连接着，则为true
* process.disconnect()：断开与父进程之间的IPC通道，此时会将 process.connected 置为false

> connected.js

```
let childProcess = require('child_process');

childProcess.fork('./connectedChild.js', { // 通过fork创建子进程（父子进程之间创建了IPC通道）
	stdio: 'inherit'
});
```

> connectedChild.js

```
/*
 * 连接父进程
 */
console.log('正在与父进程之前通过IPC通道连接：' + process.connected);

process.disconnect(); // 断开与父进程的连接

console.log('正在与父进程之前通过IPC通道连接：' + process.connected);
```

只需运行`connected.js`即可。

## 标准输入输出：process.stdin、process.stdout

```
/**	
 * 标准输入输出
 */
process.stdin.setEncoding('utf8'); // 设置编码

process.stdin.on('readable', () => {
	let chunk = process.stdin.read();

	if (chunk) {
		process.stdout.write(`data: ${chunk}`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('结束！');
});

// 运行该程序，随意输入数据即可
```