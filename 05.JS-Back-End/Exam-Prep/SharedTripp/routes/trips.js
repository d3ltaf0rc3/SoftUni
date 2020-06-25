const express = require("express");
const jwt = require("jsonwebtoken");
const { isLoggedIn } = require("../controllers/user");
const { getTrips, getTrip } = require("../controllers/trip");
const Trip = require("../models/trip");
const router = express.Router();

router.get("/trips", isLoggedIn, async (req, res) => {
    const trips = await getTrips();

    res.render("sharedTripps", {
        title: "Trips | SharedTripps",
        isLoggedIn: req.isLoggedIn,
        email: req.email,
        trips
    });
});

router.get("/trips/add", isLoggedIn, (req, res) => {
    res.render("offerTripp", {
        title: "Create | SharedTripps",
        isLoggedIn: req.isLoggedIn,
        email: req.email
    });
});

router.post("/trips/add", isLoggedIn, async (req, res) => {
    const { startAndEndPoint, dateAndTime, image, seats, description } = req.body;
    const token = req.cookies["auth-token"];
    const decodedObj = jwt.verify(token, process.env.KEY);

    try {
        const trip = new Trip({
            start: startAndEndPoint.split(" - ")[0],
            end: startAndEndPoint.split(" - ")[1],
            date: dateAndTime.split(" - ")[0],
            time: dateAndTime.split(" - ")[1],
            image,
            seats,
            description,
            creatorId: decodedObj.userID
        });
        await trip.save();
        res.redirect("/trips/");
    } catch (error) {
        res.render("offerTripp", {
            title: "Create | SharedTripps",
            isLoggedIn: req.isLoggedIn,
            email: req.email,
            error: "Invalid trip details!"
        });
    }
});

router.get("/trips/details/:id", isLoggedIn, async (req, res) => {
    const id = req.params.id;

    const trip = await getTrip(id);

    const user = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    const isCreator = user.userID == trip.creatorId ? true : false;

    res.render("trippDetails", {
        title: "Trip Details | SharedTripps",
        isLoggedIn: req.isLoggedIn,
        email: req.email,
        ...trip,
        isCreator
    });
});

module.exports = router;