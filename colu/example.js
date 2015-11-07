var Colu = require('colu');
var http = require('http');
/*Require the colu library and initialize a colu object with the above settings*/

/*Hello world*/
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	res.end('Hello Colu\n')

}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')

/*
Define the initalizsations for working on top of the testnet network
We choose to use the coloredcoins.org API
*/
var settings = {
	network: 'testnet',
	privateSeed: 'ccd02b96ffccc11b0eb83b878e660e65ebcf1e8f01424a010d85449b98e1bda9',
	coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
	coluHost: 'https://testnet.engine.colu.co'
}


var colu = new Colu(settings)

var asset = {
	amount: 100000
}

colu.on('connect', function(){
	colu.issueAsset(asset, function(err, body){
		if(err){
			return console.error(err)
		}
		console.log("Body: ",  body)
	})


colu.init()









})

colu.init();

