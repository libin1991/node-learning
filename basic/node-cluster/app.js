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
