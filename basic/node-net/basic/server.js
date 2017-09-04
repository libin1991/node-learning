/**
 * tcp服务端
 */
let net = require('net');
const PORT = 8989;
const HOST = '127.0.0.1';

let server = net.createServer((socket) => {
	socket.write('1. connection 触发\n');

	socket.on('data', (data) => {
		console.log('收到客户端请求：' + data);

		// 给客户端返回数据
		socket.write('你好啊~客户端。');
	});

	socket.on('close', () => {
		console.log('客户端走了~~~~~~');
	});
})
.on('error', (err) => {
	console.log('创建服务端失败=>' + err);
});

// 服务端连接事件
server.on('connection', (socket) => {
	socket.end('2. connection 触发\n');
});

server.listen(PORT, HOST, () => {
	console.log('服务端开始运行，地址：' + HOST + ':' + PORT);
});
