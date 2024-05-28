const _baseService = require('./base-service');

async function getAllCards() {
    const result = await _baseService.getAllJsonData();
    return result.cards;
};

async function createCard(model) {
    console.log(`dashboard-service-createCard-model: ${model}`);
    const data = await _baseService.create("cards", model);
    return data;
};

module.exports = { createCard, getAllCards };