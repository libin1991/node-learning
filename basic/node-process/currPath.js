/*
 * 当前工作路径
 * process.cwd() VS process.chdir()
 * process.cwd()：返回当前工作路径
 * process.chdir()：切换当前工作路径
 */
console.log('当前工作路径：' + process.cwd()); // 形如：当前工作路径：C:\Users\ZX\Desktop\node

// 尝试切换Node.js进程的当前工作路径
try {
	process.chdir('ymp');
	console.log('新工作路径：' + process.cwd());
}
catch (err) {
	console.log('切换失败：' + err);
}