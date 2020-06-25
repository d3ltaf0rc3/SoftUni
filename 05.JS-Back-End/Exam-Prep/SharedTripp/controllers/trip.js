const Trip = require("../models/trip");

async function getTrips() {
    return await Trip.find().lean();
}

async function getTrip(id) {
    return await Trip.findById(id).lean();
}

async function deleteTrip(id) {
    await Trip.findByIdAndDelete(id);
}

async function addUserToTrip(user, tripId) {
    await Trip.findByIdAndUpdate(tripId, {
        $addToSet: {
            buddies: [user]
        }
    });
}

module.exports = {
    getTrips,
    getTrip,
    deleteTrip,
    addUserToTrip
};