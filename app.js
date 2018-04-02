const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const log4js = require('log4js');
const logger = log4js.getLogger();
const stringify = JSON.stringify;
const colors = require('colors');
const engines = require('consolidate');
const http = require('http');
const https = require('https');
const dir0 = dir(path.resolve(__dirname, 'dist'));
const testExt = /\.(html|js|css|woff2?|ttf|eot|svg|png|jpe?g|gif|bmp)$/;
const testGzip = /\bgzip\b/;
const testGzipExt = /\.(js|css|ttf|eot)$/;

logger.level = "debug";

function dir(basePath) {
    let resolve = path.resolve;
    return function(relativePath) {
        return resolve(basePath, relativePath);
    }
}

app.get(testExt, function(req, res, next) {
    let acceptEncoding = req.headers['accept-encoding'];
    let fd = req.path.replace(/^\//, '');
    let ungzFile = dir0(fd);
    logger.info(stringify({ acceptEncoding, fd }));
    function fsFetchOriginal() {
        fs.open(ungzFile, 'r', (error, fd) => {
            if (error) {
                res.writeHead(404, { error: error });
                logger.error(stringify({ error }));
                return res.end();
            }
            res.writeHead(200, {});
            fs.createReadStream(ungzFile).pipe(res);
        });
    }

    if (testGzip.test(acceptEncoding) && testGzipExt.test(fd)) {
        let gzFile = dir0(fd.concat('.gz'));
        fs.open(gzFile, 'r', (err, fd) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    return fsFetchOriginal();
                }
                return next();
            }
            res.writeHead(200, { 'Content-Encoding': 'gzip' });
            fs.createReadStream(gzFile).pipe(res);
        });
    } else {
        fsFetchOriginal();
    }
});

app.get('*', function (req, res, next) {
    try {
        res.sendFile(dir0('index.html'));
    } catch(e) {
        logger.info(e);
    }
});

http.createServer(app).listen(3006, () => {
    logger.info('Http server is listening on port 3006:', 'http://localhost:3006'.blue);
});

const options = {
    key: fs.readFileSync('keys/server-key.pem'),
    cert: fs.readFileSync('keys/server-cert.pem')
};
https.createServer(options, app).listen(3008, () => {
    logger.info('Https server is listening on port 3008:', 'https://localhost:3008'.blue);
});