/**
 * 服务端字符串gzip压缩
 */
var http = require('http');
var zlib = require('zlib');

var resText = "Fuck Me";

var server = http.createServer((req, res) => {
	var acceptEncoding = req.headers['accept-encoding'];

	// 判断是否包含accept-encoding头部，且有值gzip
	if (acceptEncoding.indexOf('gzip') != -1) {
		res.writeHead(200, {
			'content-encoding': 'gzip'
		});

		res.end(zlib.gzipSync(resText));
	}
	else {
		res.end(resText);
	}
});

server.listen('3100');
