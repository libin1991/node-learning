const lable = '运行时长：';
console.time(lable);

// process.nextTick(() => {
//     console.timeEnd(lable);
// });

setTimeout(console.timeEnd, 1000, lable); // 输出：运行时长：: 1001.320ms
