const express = require("express");
const User = require("../models/user");
const { registerUser, isLoggedIn, logInUser, isAuth } = require("../controllers/user");
const router = express.Router();

router.get("/", isLoggedIn, (req, res) => {
    res.render("home", {
        title: "Home | SharedTripp",
        isLoggedIn: req.isLoggedIn,
        email: req.email
    });
});

router.get("/logout", isAuth, (req, res) => {
    res.clearCookie("auth-token");
    res.clearCookie("email");
    res.redirect("/");
});

router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login | SharedTripp"
    });
});

router.post("/login", async (req, res) => {
    await logInUser(req, res);
});

router.get("/register", (req, res) => {
    res.render("register", {
        title: "Register | SharedTripp"
    });
});

router.post("/register", async (req, res) => {
    await registerUser(req, res);
});

router.get("*", isLoggedIn, (req, res) => {
    res.render("404", {
        title: "Not found | SharedTripp",
        isLoggedIn: req.isLoggedIn,
        email: req.email
    });
});

module.exports = router;