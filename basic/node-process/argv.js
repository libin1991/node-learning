/**
 * process.argv
 * 获取命令行参数
 * 返回一个数组：
 * 元素0：node
 * 元素1：可执行文件的绝对路径
 * 元素x：其他
 */
process.argv.forEach((val, index, arr) => {
	console.log("参数" + index + ":" + arr);
});
