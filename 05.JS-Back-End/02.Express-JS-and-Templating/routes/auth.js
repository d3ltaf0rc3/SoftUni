const express = require("express");
const { saveUser, logUser } = require("../controllers/user");
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("loginPage");
});

router.post("/login", (req, res) => {
    logUser(req, res);
});

router.get("/register", (req, res) => {
    res.render("registerPage");
});

router.post("/register", async (req, res) => {
    saveUser(req, res);
});

module.exports = router;