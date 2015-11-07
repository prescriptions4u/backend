var Colu = require('colu')
var settings = {
    network: 'testnet',
    privateSeed: 'ccd02b96ffccc11b0eb83b878e660e65ebcf1e8f01424a010d85449b98e1bda9'
}
var colu = new Colu(settings)

console.log("before asset");

var asset = {
    amount: 123,

    //patient needs to be able to issue asset to pharmacist
    reissuaeable: true,

    transfer: [{

    	//address of the person we are sending it to
    	// any change will be issued back to our own address
    	address: 'miPznpFr7xQpWXp3dfYXBXKiVcdLKNPazT',
    	amount: '1'
    }],

    metadata: {
    	'assetName': 'Loads of heroin',
    	'issuer': 'Dr. John Doe',
    	'description': 'Gettin\' wrecked'
    }
}

console.log('after asset');

colu.on('connect', function () {
    
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
});

colu.init()