const { Router } = require("express");
const { registerUser, logInUser, isAuth, isNotAuth } = require("../controllers/user");
const { getTopPlays } = require("../controllers/plays");
const router = Router();

router.get("/", isAuth, async (req, res) => {
    const plays = await getTopPlays();

    res.render("guest-home", {
        pageTitle: "Home | Theaters",
        plays
    });
});

router.get("/register", isAuth, (req, res) => {
    res.render("register", {
        pageTitle: "Register | Theaters"
    });
});

router.post("/register", async (req, res) => {
    await registerUser(req, res);
});

router.get("/login", isAuth, (req, res) => {
    res.render("login", {
        pageTitle: "Login | Theaters"
    });
});

router.post("/login", async (req, res) => {
    await logInUser(req, res);
});

router.get("/logout", isNotAuth, (req, res) => {
    res.clearCookie("auth-token").redirect("/");
});

module.exports = router;