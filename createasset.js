var Colu = require('colu')
var apikey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXRhcmFqZHV0dGEwMUBnbWFpbC5jb20iLCJleHAiOiIyMDE1LTExLTA3VDE2OjE0OjQxLjU3M1oiLCJ0eXBlIjoiYXBpX2tleSJ9.yg52G1WePJVKEHfKKChM8voDby7D7WePM_A712w3oFE'

var settings = {
    network: 'mainnet',
    apiKey: apikey,
    privateSeed: '6aae337c51030d9438e61f172a0b275236fc405c81a675dd89906410df6559a1'
}
var colu = new Colu(settings)
var asset = {
    amount: 10,
    metadata: {        
        'assetName': 'Xanax',
        'issuer': 'Dr. Rob OConner',
        'description': '1 mg of Xanax'
    }
}

colu.on('connect', function () {
    colu.issueAsset(asset, function (err, body) {
        if (err) return console.error(err)        
        console.log("Body: ",body)
    })
    process.exit()
})

colu.init()
