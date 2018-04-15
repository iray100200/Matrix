const request = require('request');
const href = 'http://localhost:3400';

module.exports = (router) => {
    router.post('/gen', (req, res) => {
        request({
            uri: href.concat('/mx/gen'),
            headers: {
                'Content-Type': 'application/json'
            },
            body: req.body,
            json: true
        }, (error, res, body) => {
            
        })
    })
}