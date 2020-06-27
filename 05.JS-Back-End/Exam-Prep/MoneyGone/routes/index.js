const { registerUser, isLoggedIn, logInUser, isAuth, isNotAuth, getUserData } = require("../controllers/user");
const { Router } = require("express");
const router = Router();

router.get("/", isAuth, (req, res) => {
    res.render("home", {
        title: "Home | MoneyGone"
    });
});

router.get("/login", isAuth, (req, res) => {
    res.render("login", {
        title: "Login | MoneyGone"
    });
});

router.post("/login", async (req, res) => {
    await logInUser(req, res);
});

router.get("/register", isAuth, (req, res) => {
    res.render("register", {
        title: "Register | MoneyGone"
    });
});

router.post("/register", async (req, res) => {
    await registerUser(req, res);
});

router.get("/logout", isNotAuth, (req, res) => {
    res.clearCookie("auth-token").redirect("/");
});

router.get("/profile", isNotAuth, isLoggedIn, async (req, res) => {
    const data = await getUserData(req, res);
    const total = data.expenses.reduce((acc, curr) => {
        return acc + curr.total;
    }, 0);

    res.render("account-info", {
        title: "Profile | MoneyGone",
        isLoggedIn: req.isLoggedIn,
        user: req.user,
        amount: data.amount || 0,
        merchants: data.expenses.length,
        total
    });
});

router.get("*", isLoggedIn, (req, res) => {
    res.render("404", {
        title: "Not Found | MoneyGone",
        isLoggedIn: req.isLoggedIn,
        user: req.user
    });
});

module.exports = router;