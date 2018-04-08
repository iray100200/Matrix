const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const log4js = require("log4js");
const logger = log4js.getLogger();
const stringify = JSON.stringify;
const colors = require("colors");
const engines = require("consolidate");
const http = require("http");
const https = require("https");
const cache = require("cache-control");
const etag = require("etag");
const dir0 = dir(path.resolve(__dirname, "dist"));
const testExt = /\.(html|js|css|woff2?|ttf|eot|svg|png|jpe?g|gif|bmp)$/;
const testGzip = /\bgzip\b/;
const testGzipExt = /\.(js|css|ttf|eot)$/;
const options = {
    key: fs.readFileSync("keys/server-key.pem"),
    cert: fs.readFileSync("keys/server-cert.pem")
};

logger.level = "debug";

function dir(basePath) {
    let resolve = path.resolve;
    return function(relativePath) {
        return resolve(basePath, relativePath);
    };
}

function compression() {
    return function(req, res, next) {
        let acceptEncoding = req.headers["accept-encoding"];
        let fd = req.path.replace(/^\//, "");
        logger.info({ acceptEncoding, fd });
        if (testGzip.test(acceptEncoding) && testGzipExt.test(fd)) {
            let gz = dir0(fd.concat(".gz"));
            fs.open(gz, "r", (err, fd) => {
                if (err) {
                    logger.warn(err);
                    return next();
                }
                res.set("ETag", etag(gz));
                res.writeHead(200, { "Content-Encoding": "gzip" });
                fs.createReadStream(gz).pipe(res);
            });
            return;
        }
        next();
    };
}

app.use(
    cache({
        "/**": 86400,
        "/assets/**": 2592000
    })
);
app.use(compression());
app.use(
    express.static("dist", {
        etag: true
    })
);

app.get("*", function(req, res, next) {
    try {
        res.sendFile(dir0("index.html"));
    } catch (e) {
        logger.info(e);
    }
});

http.createServer(app).listen(3006, () => {
    logger.info(
        "Http server is listening on port 3006:",
        "http://localhost:3006".blue
    );
});

https.createServer(options, app).listen(3008, () => {
    logger.info(
        "Https server is listening on port 3008:",
        "https://localhost:3008".blue
    );
});
