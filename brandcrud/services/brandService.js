const fs = require('fs');
const path = require('path');
const util = require('util');
const generateId = require('../helpers/generateId');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const parentFolder = path.join(__dirname, "..");
const dbpath = path.join(parentFolder, "database/db.json")

async function getBrand() {
    const result = await readFileAsync(dbpath);
    const myalldata = JSON.parse(result);
    return myalldata.brands;
};

async function createBrand(brand) {
    const result = await readFileAsync(dbpath);
    const myalldata = JSON.parse(result);

    const newBrand = {
        "id": generateId(myalldata.brands),
        ...brand
    };

    myalldata.brands.push(newBrand);

    await writeFileAsync(dbpath, JSON.stringify(myalldata, null, 2));
    return newBrand
};

async function deleteBrand(brandId) {
    const result = await readFileAsync(dbpath);
    const myalldata = JSON.parse(result);
    const newBrands = myalldata.filter((br) => br.id != brandId);
    await writeFileAsync(dbpath, JSON.stringify(newBrands, null, 2));
    return newBrands;
};

module.exports = {
    getBrand,
    createBrand,
    deleteBrand
};