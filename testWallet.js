var Colu = require('colu')

var settings = {
   network: 'testnet',
    privateSeed: null,
    coloredCoinsHost: 'https://testnet.api.coloredcoins.org',
    coluHost: 'https://testnet.engine.colu.co'
}

var colu = new Colu(settings)
colu.on('connect', function () {
  var privateSeed = colu.hdwallet.getPrivateSeed()

    console.log("privateSeed: ", privateSeed)
});

colu.init()