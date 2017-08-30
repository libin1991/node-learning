var dns = require('dns');

dns.resolveCname('www.github.com', function(err, address) {
	if (err) {
		throw err;
	}

	console.log(JSON.stringify(address));
});
