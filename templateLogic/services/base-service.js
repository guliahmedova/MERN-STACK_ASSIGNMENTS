const fs = require('fs');
const path = require('path');
const util = require('util');
const { getRootPath } = require('../utils/routPath');
const DB_PATH = path.join(getRootPath(), "database/db.json");

const readFileAsync = util.promisify(fs.readFile);

async function getAllJsonData() {
    const allText = await readFileAsync(DB_PATH);
    const allData = JSON.parse(allText);
    return allData;
};

module.exports = {
    getAllJsonData
};