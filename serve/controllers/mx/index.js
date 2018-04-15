const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = (router, config) => {
    router.post('/gen', (req, res) => {
        request({
            uri: config.BASE_HREF.concat('/mx/gen'),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: req.body,
            json: true
        }, (error, res, body) => {
            // fs.writeFile(path.resolve(process.cwd(), `temp/${body.data.path}`), body.data.template, (err) => {
            //     if (err) throw err;
            //     console.log('The file has been saved!');
            //   });
        })
    })
}