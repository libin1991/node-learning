/**
 * tcp客户端
 */
let net = require('net');

const PORT = 8989;
const HOST = '127.0.0.1';

// 创建连接
let client = net.createConnection(PORT, HOST);

client.on('connect', () => {
	console.log('客户端已与服务端连接');
});

client.on('data', (data) => {
	console.log('客户端收到服务端内容：' + data);
});

client.on('close', () => {
	console.log('客户端已断开连接');
});

// 到此连接结束
// client.end('你好啊，猜猜我是不是客户端');
