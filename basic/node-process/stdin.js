/**	
 * 标准输入输出
 */
process.stdin.setEncoding('utf8'); // 设置编码

process.stdin.on('readable', () => {
	let chunk = process.stdin.read();

	if (chunk) {
		process.stdout.write(`data: ${chunk}`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('结束！');
});

// 运行该程序，随意输入数据即可