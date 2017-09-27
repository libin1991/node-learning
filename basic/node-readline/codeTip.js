/**
 * 自动完成：代码提示
 */
const readline = require('readline');
const fs = require('fs');

let completer = (line) => {
    const command = 'npm';
    const subCommands = ['help', 'init', 'install'];

    // 当输入为空，或者为npm的一部分时，按tab自动补全为npm
    if (line.length < command.length) {
        return [command.indexOf(line) === 0 ? [command] : [], line];
    }

    // 输入npm，按tab提示 help init install
    let hits = subCommands.filter((subCommand) => { // 过滤函数，寻找符合的条目到hits中
        const lineTrippedCommand = line.replace(command, '').trim();

        return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0;
    });

    if (hits.length === 1) {
        hits = hits.map((hit) => {
            return [command, hit].join(' ');
        });
    }

    return [hits.length ? hits : subCommands, line]
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer
});
