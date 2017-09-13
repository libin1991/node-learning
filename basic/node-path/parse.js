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
