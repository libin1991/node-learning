/**
 * process.nextTick(fn)
 * 事件队列的下一个tick执行
 * 该函数将fn放入node事件循环的下一个tick执行
 * 该函数比setTimeout(fn, 0)性能高
 */
console.log(1);
process.nextTick(() => {
	console.log(2);
});
console.log(3);

// 依次输出：1、3、2
