const Trip = require("../models/trip");

async function getTrips() {
    return await Trip.find().lean();
}

async function getTrip(id) {
    return await Trip.findById(id).lean();
}

module.exports = {
    getTrips,
    getTrip
};