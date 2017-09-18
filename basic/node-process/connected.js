/**
 * IPC（进程间通信）
 */
let childProcess = require('child_process');

childProcess.fork('./connectedChild.js', { // 通过fork创建子进程（父子进程之间创建了IPC通道）
	stdio: 'inherit'
});