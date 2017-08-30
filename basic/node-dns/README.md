# dns模块下函数大类
该模块包含两类不同的函数：
 1. 使用操作系统配置文件进行域名解析，而且没必要进行网络通信。该分类只有一个函数：
 `dns.lookup`。

 ```
 var dns = require('dns');

 dns.lookup('www.github.com', (err, address, family) => {
	if (err) {
		throw err;
	}

	console.log('Address: ', address);
 });
 ```

 2. 连接到一个实际的dns服务器进行域名解析的函数，该类函数总是使用网络去进行域名查询。
 这些函数不使用`dns.lookup`使用的系统配置文件，比如`ets/hosts`。

 ```
 var dns = require('dns');

 dns.resolve4('www.github.com', (err, address, family) => {
 	if (err) {
 		throw err;
 	}

 	console.log('Address: ', address);
 });
 ```

# 函数调用说明
 - dns.lookupService(ip, port, callback)
 使用`getnameinfo`获取传入的ip地址和端口对应的主机和服务。
 （使用的是系统配置文件）

 ```
 var dns = require('dns');

 dns.lookupService('192.30.255.133', 80, (err, hostname, service) => {
 	if (err) {
 		throw err;
 	}

 	console.log('host: ', hostname);
 });
 ```

 - dns.resolve(hostname[, rrtype], callback)
 根据主机名返回一个由`rrtype`指定类别的地址信息的数组。

 ```
 var dns = require('dns');

 dns.resolve('www.github.com', 'CNAME', (err, address) => {
	if (err) {
		throw err;
	}

	console.log(address);
 });
 ```

 - dns.resolve4(hostname, callback)
 同`dns.resolve`，但是只返回IPv4 地址。（A records）

 - dns.resolve6(hostname, callback)
 同`dns.resolve4`，但是只返回IPv6 地址。（AAAA records）

 - dns.reverse(ip, callback)
 根据ip地址返回一个包含主机信息的数组。

 ```
 var dns = require('dns');

 dns.reverse('192.30.255.133', (err, hostnames) => {
 	if (err) {
 		throw err;
 	}

 	console.log('hostnames: ', hostnames);
 });
 ```