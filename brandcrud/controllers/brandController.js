const parseRequestBody = require('../helpers/parser');
const generateRes = require('../helpers/resGenerator');
const brandServ = require('../services/brandService');

const getBrandInfo = async (req, res) => {
    const result = await brandServ.getBrand();
    generateRes(res, 200, result);
};

const createBrand = async (req, res) => {
    const body = await parseRequestBody(req);
    const addnewrecord = await brandServ.createBrand(body);
    generateRes(res, 201, addnewrecord);
};

const updateBrand = async (req, res) => {
    const { url } = req;
    const newUrl = url.split("/")[2];
    const brandId = newUrl?.replace("/", "");

    const body = await parseRequestBody(req);
    const updatedBrand = await brandServ.updateBrand(brandId, body);

    if (updatedBrand) {
        generateResponse(res, 200, updatedBrand);
    } else {
        generateResponse(res, 404, { message: "Brand is not found!" });
    }
};

module.exports = {
    getBrandInfo,
    createBrand,
    updateBrand
};