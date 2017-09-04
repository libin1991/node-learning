/**
 * 在开始监听端口前关闭服务端
 */
let net = require('net');

const PORT = 8989;
const HOST = '127.0.0.1';

// tcp客户端
let server = net.createServer(() => {});

server.on('close', () => {
	console.log('服务端关闭！');
});

server.on('error', (err) => {
	console.log('服务端异常=>' + err.message);
});

server.close((err) => {
	if (err) {
		// 服务端是没有运行的，所以会运行到这里
		console.log('服务端关闭异常：' + err.message);
	}
	else {
		console.log('服务端正常关闭');
	}
});
