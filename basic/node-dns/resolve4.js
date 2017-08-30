var dns = require('dns');

dns.resolve4('www.github.com', function(err, address) {
	if (err) {
		throw err;
	}

	console.log(JSON.stringify(address));
});
