# NodeJs 逐行读取readline
readline主要用来实现逐行读取。比如读取用户输入，读取文件内容。

## 简单示例
将用户输入转为大写。

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

## 文件逐行读取
假如有个日志文件如下：

    [2016-12-09 13:56:48.407] [INFO] access - ::ffff:127.0.0.1 - - "GET /oc/v/account/user.html HTTP/1.1" 200 213125 "http://www.example.com/oc/v/account/login.html" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36"
    [2016-12-09 14:00:10.618] [INFO] access - ::ffff:127.0.0.1 - - "GET /oc/v/contract/underlying.html HTTP/1.1" 200 216376 "http://www.example.com/oc/v/account/user.html" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36"
    [2016-12-09 14:00:34.200] [INFO] access - ::ffff:127.0.0.1 - - "GET /oc/v/contract/underlying.html HTTP/1.1" 200 216376 "http://www.example.com/oc/v/account/user.html" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36"

提取其中信息的脚本：

    /**
     * 文件逐行读取：日志分析
     */
    const readline = require('readline');
    const fs = require('fs');

    const rl = readline.createInterface({
        input: fs.createReadStream('./test.log')
    });

    rl.on('line', (line) => {
        const arr = line.split(' ');
        console.log('访问时间：%s %s，访问地址：%s', arr[0], arr[1], arr[13]);
    });

## 自动补全

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


