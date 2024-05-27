const fs = require('fs');
const path = require('path');
const util = require('util');
const generateId = require('../utils/generateId');
const getRootPath = require('../utils/routPath');
const DATABASE_PATH = path.join(getRootPath(), 'database/db.json');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getAllJsonData() {
    const allText = await readFileAsync(DATABASE_PATH);
    const allData = JSON.parse(allText);
    return allData;
};

module.exports = { getAllJsonData };