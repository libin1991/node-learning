function show() {
    console.log(1);

    setTimeout(console.log, 2000, 2);
}

show();

console.trace('show');
// 输出形如：
// 1
// Trace: show
//     at Object.<anonymous> (C:\Users\ZX\Desktop\node\node-learning-note\basic\node-console\trace.js:9:9)
//     at Module._compile (module.js:570:32)
//     at Object.Module._extensions..js (module.js:579:10)
//     at Module.load (module.js:487:32)
//     at tryModuleLoad (module.js:446:12)
//     at Function.Module._load (module.js:438:3)
//     at Module.runMain (module.js:604:10)
//     at run (bootstrap_node.js:390:7)
//     at startup (bootstrap_node.js:150:9)
//     at bootstrap_node.js:505:3
// 2
