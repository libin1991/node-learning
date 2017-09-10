# NodeJS 路径处理模块path

## 获取路径、文件名和扩展名
1. path.basename(path[, ext])
    - `path`<string>
    - `ext`<string> 文件扩展名
该方法会返回路径的最后一部分。
```
/**
 * 获取文件名
 */
const path = require('path');
console.log(path.basename('./test.html'));
```
