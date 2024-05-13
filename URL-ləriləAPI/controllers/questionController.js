const fs = require("fs");
const path = require('path');

const getAllQuestions = (res) => {
    const parentel = path.join(__dirname, "..");
    const dbjspath = path.join(parentel, "db.json");
    const data = fs.readFile(dbjspath, "utf-8", (err, data) => {
        const aboutdata = JSON.parse(data).questions;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(aboutdata));
        res.end();
    })
};

const questionsActions = {
    getAllQuestions
};

module.exports = questionsActions;