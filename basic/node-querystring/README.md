# NodeJs 查询字符串模块querystring

## 查询参数解析
* 基础用法

    ```
    /**
     * 查询参数解析
     */
    const querystrig = require('querystring');
    let str = 'author=zx&age=20';
    
    let obj = querystrig.parse(str);
    console.log(obj);
    // 输出：
    // { author: 'zx', age: '20' }
    
    ```


* 自定义字符解析字符串

    ```
    /**
     * 查询参数解析
     */
    const querystring = require('querystring');
    let str = 'author-zx|age-21';
    
    let obj = querystring.parse(str, '|', '-');
    console.log(obj);
    
    // 输出：
    // { author: 'zx', age: '21' }
    
    ```


## 查询参数拼接

```
/**
 * 拼接字符串
 */
const querystring = require('querystring');

let obj1 = {
	"author": "zx",
	"age": "21"
};
let str1 = querystring.stringify(obj1);

console.log(str1);

let str2 = querystring.stringify(obj1, '|', '-');
console.log(str2);

// 输出：
// author=zx&age=21
// author-zx|age-21

```
