/** 
 * 判断node服务运行的环境
 */
console.log(process.env); // 返回当前用户的环境变量

if (process.env.NODE_ENV == 'production') {
	process.stdout.write('生产环境');
}
else {
	process.stdout.write('非生产环境');
}

// 命令行输入：node env.js NODE_ENV=production
// 输出：非生产环境
// 为什么？
