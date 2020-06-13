const express = require("express");
const { saveUser, logUser, guestAccess, isLogged } = require("../controllers/user");
const router = express.Router();

router.get("/login", guestAccess, isLogged, (req, res) => {
    res.render("loginPage", {
        title: "Login | Cube Workshop",
        isLoggedIn: req.isLoggedIn
    });
});

router.post("/login", (req, res) => {
    logUser(req, res);
});

router.get("/register", guestAccess, isLogged, (req, res) => {
    res.render("registerPage", {
        title: "Register | Cube Workshop",
        isLoggedIn: req.isLoggedIn
    });
});

router.post("/register", async (req, res) => {
    saveUser(req, res);
});

router.get("/logout", (req, res) => {
    res.clearCookie("aid").redirect("/");
});

module.exports = router;