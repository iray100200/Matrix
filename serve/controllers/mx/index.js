const request = require("request");
const fs = require("fs");
const path = require("path");

function write(filename, content) {
    fs.writeFile(
        path.resolve(process.cwd(), `temp/${filename}`),
        content,
        err => {
            if (err) throw err;
            console.log("The file has been saved!");
        }
    );
}

module.exports = (router, config) => {
    router.post("/gen", (req, res) => {
        request(
            {
                uri: config.BASE_HREF.concat("/mx/gen"),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: req.body,
                json: true
            },
            (error, res, body) => {
                body.data.forEach(t => {
                    write(t.filename, t.content)
                });
            }
        );
    });
};
