/**
 * 使用gzip压缩本地文件
 */
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./test/hello.txt');
var outFile = fs.createWriteStream('./test/hello.txt.gz');

inFile.pipe(gzip).pipe(outFile);
