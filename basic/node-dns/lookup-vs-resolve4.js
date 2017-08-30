var dns = require('dns');

dns.lookup('www.github.com', (err, address, family) => {
	if (err) {
		throw err;
	}

	console.log('dns.lookup => ', address);
});


dns.resolve4('www.github.com', (err, address, family) => {
	if (err) {
		throw err;
	}

	console.log('dns.resolve4 => ', address);
});
