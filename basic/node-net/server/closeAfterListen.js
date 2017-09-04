/**
 * 在监听端口后关闭服务端
 */
let net = require('net');

const PORT = 8899;
const HOST = '127.0.0.1';

// tcp服务端
let server = net.createServer((socket) => {
	// 会立即关闭所以就不做什么了
});

server.listen(PORT, HOST, () => {
	server.close((err) => {
		if (err) {
			console.log('服务端关闭异常：' + err.message);
		}
		else {
			console.log('服务端正常关闭');
		}
	});
});

server.on('close', () => {
	console.log('服务端关闭');
});

server.on('error', (err) => {
	console.log('error: 服务端异常：' + err.message);
});
