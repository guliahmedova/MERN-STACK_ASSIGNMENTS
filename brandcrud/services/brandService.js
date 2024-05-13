const fs = require('fs');
const path = require('path');
const util = require('util');
const generateId = require('../helpers/generateId');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const parentFolder = path.join(__dirname, "..");
const DATABASE_PATH = path.join(parentFolder, "database/db.json")

async function getBrand() {
    const result = await readFileAsync(DATABASE_PATH);
    const myalldata = JSON.parse(result);
    return myalldata.brands;
};

async function createBrand(brand) {
    const result = await readFileAsync(DATABASE_PATH);
    const myalldata = JSON.parse(result);

    const newBrand = {
        "id": generateId(myalldata.brands),
        ...brand
    };

    myalldata.brands.push(newBrand);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(myalldata, null, 2));
    return newBrand
};

async function updateBrand(id, newData) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);
    const uptadeBrand = newData;

    myAllData.brands.map((brand) => {
        if (brand.id === id) {
            brand.title = uptadeBrand.title;
        }
    });

    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
    const uptadeBrandItem = myAllData.brands.find((brand) => brand.id === id);
    if (uptadeBrandItem) {
        return uptadeBrandItem;
    } else {
        throw new Error("Not Found");
    }
};

async function deleteBrand(id) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);

    const deleteBrands = myAllData.brands.find((brand) => brand.id === id);
    const indexDeleteBrand = myAllData.brands.indexOf(deleteBrands);
    myAllData.brands.splice(indexDeleteBrand, 1);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
    return deleteBrands;
};

module.exports = {
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand
};