/**
 * process.execArgv
 * 获取node程序特有的参数
 */
process.execArgv.forEach((val, index, arr) => {
	console.log('参数' + index + "：" + val);
});

console.log("----分割线----");

process.argv.forEach((val, index, arr) => {
	console.log('参数' + index + "：" + val);
});

// 命令行输入：node --harmony execArgv.js --nick zx
// 输出如下：
// 参数0：--harmony
// ----分割线----
// 参数0：C:\Program Files\nodejs\node.exe
// 参数1：C:\Users\ZX\Desktop\node\node-learning-note\basic\node-process\execArgv.js
// 参数2：--nick
// 参数3：zx