# zlib压缩
## 压缩/解压缩字符串
```
/*
 * 使用gzip压缩字符串、解压缩字符串
 */
var fs = require('fs');
var zlib = require('zlib');

var inStr = 'Fuck Me';

// 压缩
var gzipOut = zlib.gzipSync(inStr);
console.log('gzip out is: ' + gzipOut);

// 解压缩
var gunzipOut = zlib.gunzipSync(gzipOut);
console.log('gunzip out is: ' + gunzipOut);
```

## 压缩/解压缩文件
```
/**
 * 使用gzip压缩本地文件
 */
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./test/hello.txt');
var outFile = fs.createWriteStream('./test/hello.txt.gz');

inFile.pipe(gzip).pipe(outFile);
```

```
/**
 * 使用gunzip解压缩
 */
var fs = require('fs');
var zlib = require('zlib');

var gunzip = zlib.createGunzip();

var inFile = fs.createReadStream('./test/hello.txt.gz');

// 使用时间作为文件名
var time = new Date().getTime();

var outFile = fs.createWriteStream('./test/hello'+ time + '.txt');

inFile.pipe(gunzip).pipe(outFile);

```

## 服务端的使用
### 压缩字符串
```
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
```

### 压缩文件
```
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
```
