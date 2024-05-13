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

async function updateBrand(id, brand) {
    const result = await readFileAsync(dbpath);
    const allData = JSON.parse(result);
    const existBrand = brand;

    allData.brands.map((brand) => {
        if (brand.id === id) {
            brand.title = existBrand.title;
        }
    });

    await writeFileAsync(dbpath, JSON.stringify(allData, null, 2));
    const updatedBrand = allData.brands.find((brand) => brand.id === id);

    if (updatedBrand) {
        return updatedBrand;
    } else {
        throw new Error("Brand is not found!");
    }
};

module.exports = {
    getBrand,
    createBrand,
    updateBrand
};