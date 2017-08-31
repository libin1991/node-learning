var dns = require('dns');

var ip = '192.30.255.113';
var port = 80;

// 通过ip反查域名
// 受系统配置文件影响
dns.lookupService(ip, port, (err, hostname, service) => {
	if (err) {
		throw err;
	}

	console.log('hostname: ', hostname);
});
