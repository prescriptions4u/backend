var Colu = require('colu')

var settings = {
   network: 'testnet',
    privateSeed: null,
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co'
}

var colu = new Colu(settings)
colu.on('connect', function () {
  var privateSeed = 'ccd02b96ffccc11b0eb83b878e660e65ebcf1e8f01424a010d85449b98e1bda9';

    console.log("privateSeed: ", privateSeed)
});

colu.init()