let fs = require('fs');
let express = require('express');
let multer = require('multer');

let app = express();

/**
 * 创建文件夹
 */
let createFolder = (folder) => {
	try {
		fs.accessSync(folder);
	}
	catch (e) {
		fs.mkdirSync(folder);
	}
}

let uploadFolder = './upload/';
createFolder(uploadFolder);

/**
 * storage自定义配置（使用filename）
 */
let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadFolder);
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname + '-' + Date.now());
	}
});

// 通过 storage 选项来进行自定义
let upload = multer({
	storage: storage
});

/**
 * 单文件上传
 */
app.post('/upload', upload.single('logo'), (req, res, next) => {
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
 * http服务
 */
app.get('/', (req, res, next) => {
	let form = fs.readFileSync('./index2.html', {
		encoding: 'utf8'
	});

	res.send(form);
});

app.listen(3100);
