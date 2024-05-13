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

const deleteBrand = async (req, res) => {
     
};

module.exports = {
    getBrandInfo,
    createBrand,
    deleteBrand
};