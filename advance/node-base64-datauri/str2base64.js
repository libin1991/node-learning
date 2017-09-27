/**
 * 字符串base64编码解码
 */
let str = "Hello World!";

/* bse64编码 */
let sb = new Buffer(str);
let base64Str = sb.toString('base64');
console.log(base64Str);

/* base64解码 */
let deStr = new Buffer(base64Str, 'base64');
console.log(deStr.toString());
