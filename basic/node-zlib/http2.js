/**
 * 服务端文件gzip压缩
 */
const http = require('http');
const zlib = require('zlib');
const fs = require('fs');

let server = http.createServer((req, res) => {
	let acceptEncoding = req.headers['accept-encoding'];
	let gzip;

	// 判断请求的头部是否包含accept-encoding且其包含值gzip
	if (acceptEncoding.indexOf('gzip') != -1) {
		gzip = zlib.createGzip();

		res.writeHead(200, {
			'content-encoding': 'gzip'
		});

		fs.createReadStream('./test/test.html').pipe(gzip).pipe(res);
	}
	else {
		fs.createReadStream('./test/test.html').pipe(res);
	}
});

server.listen('3100');
