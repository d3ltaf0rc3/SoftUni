const express = require("express");
const { saveUser } = require("../controllers/user");
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("loginPage");
});

router.get("/register", (req, res) => {
    res.render("registerPage");
});

router.post("/register", async (req, res) => {
    saveUser(req, res);
});

module.exports = router;