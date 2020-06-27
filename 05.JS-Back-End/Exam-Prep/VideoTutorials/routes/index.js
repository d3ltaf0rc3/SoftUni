const { Router } = require("express");
const { registerUser, logInUser, isAuth } = require("../controllers/user");
const { getTopCourses } = require("../controllers/courses");
const router = Router();

router.get("/", isAuth, async (req, res) => {
    const courses = await getTopCourses();

    res.render("guest-home", {
        pageTitle: "Home | Video Tutorials",
        courses
    });
});

router.get("/register", isAuth, (req, res) => {
    res.render("register", {
        pageTitle: "Register | Video Tutorials"
    });
});

router.post("/register", async (req, res) => {
    await registerUser(req, res);
});

router.get("/login", isAuth, (req, res) => {
    res.render("login", {
        pageTitle: "Login | Video Tutorials"
    });
});

router.post("/login", async (req, res) => {
    await logInUser(req, res);
});

router.get("/logout", (req, res) => {
    res.clearCookie("auth-token").redirect("/");
});

module.exports = router;