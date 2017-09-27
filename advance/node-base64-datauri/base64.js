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
