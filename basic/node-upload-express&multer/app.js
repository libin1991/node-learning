let fs = require('fs');
let express = require('express');
let multer = require('multer');

let app = express();

/**
 * 单文件上传
 */
let uploadSingle = multer({
	dest: 'upload-single/'
});

app.post('/upload-single', uploadSingle.single('logo'), (req, res, next) => {
	var file = req.file;
	var fileInfo = {};

	// 获取文件信息
	fileInfo.mimetype = file.mimetype;
	fileInfo.originalname = file.originalname;
	fileInfo.size = file.size;
	fileInfo.path = file.path;

	// 设置响应类型及编码
	res.set({
		'content-type': 'application/json; charset=utf-8'
	});

	res.send(JSON.stringify(fileInfo));
});

/**
 * 多文件上传
 */
let uploadMulti = multer({
	dest: 'upload-multer/'
});

app.post('/upload-multi', uploadMulti.array('logos', 2), (req, res, next) => {
	var files = req.files;
	var fileInfos = [];

	// 获取文件信息
	for (let i in files) {
		var file = files[i];
		var fileInfo = {};

		fileInfo.mimetype = file.mimetype;
		fileInfo.originalname = file.originalname;
		fileInfo.size = file.size;
		fileInfo.path = file.path;

		fileInfos.push(fileInfo);
	}
	
	// 设置响应类型及编码
	res.set({
		'content-type': 'application/json; charset=utf-8'
	});
	res.end(JSON.stringify(fileInfos), 'utf8');
});


/**
 * http服务
 */
app.get('/', (req, res, next) => {
	let form = fs.readFileSync('./index.html', {
		encoding: 'utf8'
	});

	res.send(form);
});

app.listen(3100);
