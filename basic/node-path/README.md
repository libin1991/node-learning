# NodeJS 路径处理模块path

## 常见方法

### path.basename(path[, ext])
- `path`<string>
- `ext`<string> 文件扩展名

该方法会返回路径的最后一部分。

    ```
    /**
    * 获取文件名
    */
    const path = require('path');
    console.log(path.basename('./test.html')); // 输出：test.html
    ```

### path.dirname(path)
- `path`<string>

该方法会返回路径下的文件夹名。

    ```
    /**
    * 获取文件夹名
    */
    const path = require('path');

    console.log(path.dirname('/node-path/test.html')); // 输出：/node-path
    console.log(path.dirname('/node-learning/basic/node-path/test.html')); // 输出：/node-learning/basic/node-path
    ```

### path.extname(path)
- `path`<string>

该函数会返回文件的扩展名。

    ```
    /**
    * 获取文件扩展名
    */
    const path = require('path');

    let file = 'test.html';

    console.log(path.extname(file)); // 输出：.html
    ```

### path.format(pathObject)
* `pathObject`<Object>
- dir <string>
- root <string>
- base <string>
- name <string>
- ext <string>

与`path.parse()`相反，该函数会返回一个格式化的路径。

    ```
    /**
    * 格式化路径
    */
    const path = require('path');

    var path1 = path.format({ // linux系统形式
        root: '/node-path/',
        base: 'test.html'
    });

    // 输出：/node-path/test.html
    console.log(path1);


    var path2 = path.format({ // windows系统格式
        dir: '/node-path',
        name: 'test',
        ext: '.html'
    });

    // 输出：/node-path\test.html
    console.log(path2);
    ```

### path.parse(path)
- `path`<string>

该函数做与`path.format()`相反的工作。

    ```
    /** 
    * 解析路径
    */
    let path = require('path');

    let filePath = 'c:\\path\\dir\\test.txt';

    /* windows系统，形如：
    { root: 'c:\\',
    dir: 'c:\\path\\dir',
    base: 'test.txt',
    ext: '.txt',
    name: 'test' 
    } 
    */
    console.log(path.parse(filePath));

    let pathFile2 = '/home/user/dir/test.txt';

    /* linux，形如：
    { root: '/',
    dir: '/home/user/dir',
    base: 'test.txt',
    ext: '.txt',
    name: 'test' 
    }
    */
    console.log(path.parse(pathFile2));
    ```
