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
