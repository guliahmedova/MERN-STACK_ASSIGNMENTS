const libraryService = require('../services/library-service');

const getAllLibraries = async (req, res) => {
    const data = await libraryService.getAllLibraries();
    res.send(JSON.stringify(data, null, 2));
};

module.exports = {
    getAllLibraries
};