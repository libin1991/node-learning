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
