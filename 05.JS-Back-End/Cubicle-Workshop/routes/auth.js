const express = require("express");
const { saveUser, logUser, guestAccess, isLogged } = require("../controllers/user");
const router = express.Router();

router.get("/login", guestAccess, isLogged, (req, res) => {
    if (req.query.error) {
        req.error = true;
        req.message = "Invalid username or password!";
    }

    res.render("loginPage", {
        title: "Login | Cube Workshop",
        isLoggedIn: req.isLoggedIn,
        error: req.error,
        message: req.message
    });
});

router.post("/login", (req, res) => {
    logUser(req, res);
});

router.get("/register", guestAccess, isLogged, (req, res) => {
    if (req.query.error) {
        req.error = true;
        req.message = "Username and password should contain only number and/or english letters!";
    }

    res.render("registerPage", {
        title: "Register | Cube Workshop",
        isLoggedIn: req.isLoggedIn,
        error: req.error,
        message: req.message
    });
});

router.post("/register", async (req, res) => {
    const { password } = req.body;

    if (password.length < 8 || !password.match(/^[a-z\d]+$/i)) {
        return res.redirect("/register?error=true");
    }

    await saveUser(req, res);
});

router.get("/logout", (req, res) => {
    res.clearCookie("aid").redirect("/");
});

module.exports = router;