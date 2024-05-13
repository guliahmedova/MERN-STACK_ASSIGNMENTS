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

async function updateBrand(req, res) {
    const { url } = req;
    const id = url.split("/")[2];
    const newId = id.replace("/", "");

    const body = await parseRequestBody(req);
    const updatedRecord = await brandServ.updateBrand(newId, body);

    if (updatedRecord) {
        generateRes(res, 200, updatedRecord);
    } else {
        generateRes(res, 404, { message: "Brand was not found" });
    }
};

const deleteBrand = async (req, res) => {
    const { url } = req;
    const id = url.split("/")[2];
    const newId = id.replace("/", "");

    const deletedBrand = await brandServ.deleteBrand(newId);

    if (deletedBrand) {
        generateRes(res, 200, { message: "Brand has deleted successfully" });
    } else {
        generateRes(res, 404, { message: "Brand was not found" });
    }
};

module.exports = {
    getBrandInfo,
    createBrand,
    updateBrand,
    deleteBrand
};