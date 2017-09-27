/**
 * 将读取到的输入自动转换成大写
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入一个单词：', (answer) => {
    console.log('您输入的单词的大写为：%s', answer.toUpperCase());

    rl.close();
});
