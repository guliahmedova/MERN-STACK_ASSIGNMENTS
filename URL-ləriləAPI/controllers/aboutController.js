const fs = require("fs");
const path = require('path');

const getAllAbout = (res) => {
    const parentel = path.join(__dirname, "..");
    const dbjspath = path.join(parentel, "db.json");
    const data = fs.readFile(dbjspath, "utf-8", (err, data) => {
        const aboutdata = JSON.parse(data).about;
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(aboutdata));
        res.end();
    })
}

const aboutActions = {
    getAllAbout
}

module.exports = aboutActions;