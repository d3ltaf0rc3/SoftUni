const express = require("express");
const jwt = require("jsonwebtoken");
const { isLoggedIn, isAuth, getUser } = require("../controllers/user");
const { getTrips, getTrip, deleteTrip, addUserToTrip } = require("../controllers/trip");
const Trip = require("../models/trip");
const router = express.Router();

router.get("/trips", isAuth, isLoggedIn, async (req, res) => {
    const trips = await getTrips();

    res.render("sharedTripps", {
        title: "Trips | SharedTripps",
        isLoggedIn: req.isLoggedIn,
        email: req.email,
        trips
    });
});

router.get("/trips/add", isAuth, isLoggedIn, (req, res) => {
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

router.get("/trips/details/:id", isAuth, isLoggedIn, async (req, res) => {
    const id = req.params.id;
    const trip = await getTrip(id);

    const creator = await getUser(trip.creatorId);
    const isCreator = creator.email === req.email;
    const leftSeats = trip.seats - trip.buddies.length;
    const noSeats = leftSeats === 0;
    const hasJoined = trip.buddies.includes(req.email);

    res.render("trippDetails", {
        title: "Trip Details | SharedTripps",
        isLoggedIn: req.isLoggedIn,
        email: req.email,
        creator: creator.email,
        ...trip,
        isCreator,
        buddies: trip.buddies.join(", "),
        leftSeats,
        noSeats,
        hasJoined
    });
});

router.get("/trips/delete/:id", isAuth, async (req, res) => {
    const id = req.params.id;
    await deleteTrip(id);
    res.redirect("/trips/");
});

router.get("/trips/join/:id", isAuth, isLoggedIn, async (req, res) => {
    const id = req.params.id;
    await addUserToTrip(req.email, id);
    res.redirect(`/trips/details/${id}`);
});

module.exports = router;