# NodeJs 提取图片转为dataURI嵌入到网页

## 字符串的base64编码解码

```
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

```

## 提取图片二进制数据并转为dataURI

```
/**
 * NodeJs读取图片二进制数据转为base64再转成对应的dataURI
 */
const fs = require('fs');

let filePath = './flowers.jpg';

fs.readFile(filePath, null, (err, data) => {
	if (err) {
		return err;
	}

	let binaryData = data;
	let base64Str = binaryData.toString('base64');
	let dataURI = 'data:image/jpg;base64,' + base64Str;

	console.log(dataURI);
})

```
## 一个服务端例子
```
const fs = require('fs');
const http = require('http');

let tmpl = `
	<!DOCTYPE html>
	<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>

	<body>
		<img src="$dataURI">
	</body>

	</html>
`;

let server = http.createServer((req, res) => {
	let filePath = './flowers.jpg';

	let data = fs.readFileSync(filePath);
	let base64Str = data.toString('base64');
	let dataURI = 'data:image/jpg;base64,' + base64Str;

	res.end(tmpl.replace('$dataURI', dataURI));
});

server.listen(3101);

console.log('请打开浏览器输入: http://localhost:3101');

```
