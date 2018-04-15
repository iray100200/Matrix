const fs = require("fs");
const Router = require("express").Router;
const bodyParser = require("body-parser");
const cors = require('cors');
const config = require('./config');
const corsOptions = {
    origin: [/localhost:[0-9]{2,5}/, /127.0.0.1:[0-9]{2,5}/],
    optionsSuccessStatus: 200,
    credentials: true
};

module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors(corsOptions));
    fs.readdir("./serve/controllers", (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        files.forEach(f => {
            try {
                const router = Router();
                const ctrl = require(`./controllers/${f}`);
                ctrl(router, config);
                app.use(`/api/${f}`, router);
            } catch (e) {
                console.log(e);
            }
        });
    });
};
