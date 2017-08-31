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
