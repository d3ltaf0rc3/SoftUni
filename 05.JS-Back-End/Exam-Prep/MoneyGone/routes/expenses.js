const { Router } = require("express");
const { isLoggedIn } = require("../controllers/user");
const router = Router();

router.get("/", isLoggedIn, (req, res) => {
    res.render("expenses", {
        title: "Expenses | MoneyGone",
        isLoggedIn: req.isLoggedIn
    });
});

module.exports = router;