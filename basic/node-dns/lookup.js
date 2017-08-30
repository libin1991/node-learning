var dns = require('dns');

var options = {
	all: true // 默认是false，只返回一个地址
};

// dns.lookup(hostname[, options], callback)
dns.lookup('www.github.com', function(err, address, family) {
	if (err) {
		throw err;
	}

	console.log('例子1：' + address);
});
