const { Router } = require("express");
const { isLoggedIn, addAmount, isNotAuth } = require("../controllers/user");
const { createExpense, getExpenses, getExpense, deleteExpense } = require("../controllers/expenses");
const router = Router();

router.get("/", isNotAuth, isLoggedIn, async (req, res) => {
    const expenses = await getExpenses(req, res);

    res.render("expenses", {
        title: "Expenses | MoneyGone",
        isLoggedIn: req.isLoggedIn,
        expenses
    });
});

router.get("/add", isNotAuth, isLoggedIn, (req, res) => {
    res.render("new-expense", {
        title: "New Expense | MoneyGone",
        isLoggedIn: req.isLoggedIn
    });
});

router.post("/add", isNotAuth, async (req, res) => {
    await createExpense(req, res);
});

router.post("/refill", isNotAuth, async (req, res) => {
    await addAmount(req, res);
});

router.get("/report/:id", isNotAuth, isLoggedIn, async (req, res) => {
    const id = req.params.id;

    const expense = await getExpense(id);

    if (!expense.report) {
        return res.redirect("/expenses/");
    }

    res.render("report", {
        title: "Report | MoneyGone",
        isLoggedIn: req.isLoggedIn,
        ...expense
    });
});

router.get("/delete/:id", isNotAuth, async (req, res) => {
    const id = req.params.id;

    await deleteExpense(id);

    res.redirect("/expenses/");
});

module.exports = router;