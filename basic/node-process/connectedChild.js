/*
 * 连接父进程
 */
console.log('正在与父进程之前通过IPC通道连接：' + process.connected);

process.disconnect(); // 断开与父进程的连接

console.log('正在与父进程之前通过IPC通道连接：' + process.connected);
