var dns = require('dns');

var ip = '10.136.149.168';
var port = 80;

// 通过ip反查域名
// 受系统配置文件影响，只会输出自己的主机名
dns.lookupService(ip, port, (err, hostname, service) => {
	if (err) {
		throw err;
	}

	console.log('hostname: ', hostname);
});
