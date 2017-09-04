// 客户端
let net = require('net');

let client = net.connect('/tmp/server.socket', () => {
	console.log('连接到服务端');
});

client.on('data', (data) => {
	console.log(`data is ${data.toString()}`);

	client.end();
});

client.on('error', (err) => {
	console.log('Error: ' + err.message);
});
