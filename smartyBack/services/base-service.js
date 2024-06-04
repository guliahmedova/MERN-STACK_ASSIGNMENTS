const fs = require('fs');
const path = require('path');
const util = require('util');

const generateId = require('../utils/generateId');

const folderPath = path.join(__dirname, '..');
const DB_PATH = path.join(folderPath, 'database/db.json');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getAllJsonData() {
    const allText = await readFileAsync(DB_PATH);
    const allData = JSON.parse(allText);
    return allData;
};

async function getData(key) {
    const allData = await getAllJsonData();
    return allData[key];
};

async function insertData(jsonKey, model) {
    const allData = await getAllJsonData();
    const newModel = { "id": generateId(allData[jsonKey]), ...model };
    allData[jsonKey].push(newModel);
    await writeFileAsync(DB_PATH, JSON.stringify(allData, null, 2));
    return newModel;
};

async function updateUser(jsonKey) {
    const result = await readFileAsync(DB_PATH);
    const allData = JSON.parse(result);
    await writeFileAsync(DB_PATH, JSON.stringify(allData, null, 2));
    return allData[jsonKey];
};

module.exports = {
    getData,
    insertData,
    updateUser
};