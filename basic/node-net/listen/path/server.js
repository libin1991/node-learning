// 路径
let net = require('net');

let server = net.createServer((socket) => {
	socket.end('hello~~');

	// 关闭服务端
	server.close();
});

server.on('error', (err) => {
	console.log('Error: ' + err.message);
});

server.listen('/tmp/server.socket');
