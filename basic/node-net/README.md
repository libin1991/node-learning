# net
`net`模块提供了基于流的TCP或IPC服务器（net.careteServer()）和客户端（net.createConnection()）的异步网络API。
该模块主要包括两部分：
- net.Server: TCP server，内部通过sokcet实现与客户端的通信
- net.Socket: 全双工的stream接口。

# 基础例子
* server.js
```
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
```

* client.js
```
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

```
