const Accessories = require("../models/accessory");

async function getAccessories() {
    const accessories = await Accessories.find().lean();
    return accessories;
}

module.exports = { getAccessories };