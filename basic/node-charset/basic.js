/**
 * 简单示例字符编码
 */
const iconv = require('iconv-lite');

let text = '你好世界';

let buff;

buff = iconv.encode(text, 'utf8');
console.log(buff);

// 接下来尝试用不同解码输出
console.log(iconv.decode(buff, 'gbk')); // 自然乱码
console.log(iconv.decode(buff, 'utf8')); // 这样就Ok
