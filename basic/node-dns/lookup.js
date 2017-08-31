var dns = require('dns');

var options = {
	all: true // 默认是false，只返回一个地址
};

// dns.lookup(hostname[, options], callback)
dns.lookup('www.github.com', options, function(err, address, family) {
	if (err) {
		throw err;
	}

	console.log('例子1：' + JSON.stringify(address));
});

dns.lookup('www.github.com', function(err, address, family) {
	if (err) {
		throw err;
	}

	console.log('例子2：' + address);
});
