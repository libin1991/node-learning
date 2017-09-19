# NodeJs 集群模块cluster
一个单一的Node.js实例运行在一个单独的线程上。为了利用多核系统的优势，用户可以启动一个Node.js集群去处理负载。`cluster`模块可以轻松地创建一些共享服务器端口的子进程。

> 基础示例

```
/**
 * 使用cluster创建一些共享服务器端口的子进程
 */
const cluster = require('cluster');
const http = require('http');
const numOfCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`主进程 ${process.pid} 正在运行`);

    for (let i = 0; i < numOfCPUs; i++) {
        cluster.fork(); // 衍生工作进程
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出`);
    });
}
else {
    /* 工作进程可以共享任何TCP连接 */
    /* 在此共享一个HTTP服务器 */
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello World！\n');
    }).listen(8005);

    console.log(`工作进程 ${process.pid} 已启动`);
}

```
