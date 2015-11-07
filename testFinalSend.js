var Colu = require('colu')
var apikey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXRhcmFqZHV0dGEwMUBnbWFpbC5jb20iLCJleHAiOiIyMDE1LTExLTA3VDE2OjE0OjQxLjU3M1oiLCJ0eXBlIjoiYXBpX2tleSJ9.yg52G1WePJVKEHfKKChM8voDby7D7WePM_A712w3oFE'

var settings = {
    network: 'mainnet',
    apiKey: apikey,
    privateSeed: '4c00c91108db54763b7183cbb6c4745c52058f01c65d5cb8d985046485a535fe'
}
var colu = new Colu(settings)
var assetId = 'LHeKDRrtnEzKwXsL3GuPPpT6wQELb4iXU7V5P'
var fromAddress = '1J4jMPd5vEmXuM4MgWsT7hreqZvbRmCtht'
var toAddress = '1BYpxiCUufqyNiRvFPexw4aGQaTBmWuXYQ'
var phoneNumber = '+353899822774'

var send = {
    from: [fromAddress],
    to: [{
        phoneNumber: phoneNumber,
        assetId: assetId,
        amount: 5
    }],
    metadata: {        
        'assetName': 'Xanax',
        'issuer': 'Dr. Rob OConner',
        'description': '1 mg of Xanax'
    }
};

colu.on('connect', function () {
    colu.sendAsset(send, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
})

colu.init()