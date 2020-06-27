const Expense = require("../models/expense");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function createExpense(req, res) {
    const { merchant, total, currency, category, description, report } = req.body;
    const token = req.cookies["auth-token"];

    if (merchant.length < 4) {
        return res.render("new-expense", {
            title: "New Expense | MoneyGone",
            error: "Merchant must be at least 4 characters!"
        });
    }

    if (total <= 0) {
        return res.render("new-expense", {
            title: "New Expense | MoneyGone",
            error: "Total should be a positive number!"
        });
    }

    if (description.length < 10 || description.length > 50) {
        return res.render("new-expense", {
            title: "New Expense | MoneyGone",
            error: "Description must be between 10 and 50 characters!"
        });
    }

    if (category === undefined) {
        return res.render("new-expense", {
            title: "New Expense | MoneyGone",
            error: "Please select a category!"
        });
    }

    try {
        const decodedObj = jwt.verify(token, process.env.KEY);
        const expense = new Expense({
            merchant,
            total,
            currency,
            category,
            report: report !== undefined ? true : false,
            description,
            user: decodedObj.userID
        });
        await User.findByIdAndUpdate(decodedObj.userID, {
            $addToSet: {
                expenses: expense
            }
        });
        await expense.save();
        res.redirect("/expenses/");
    } catch (error) {
        res.redirect("/expenses/add");
    }
}

async function getExpenses(req, res) {
    const token = req.cookies["auth-token"];
    const { userID } = jwt.verify(token, process.env.KEY);
    const user = await User.findById(userID).populate("expenses").lean();
    return user.expenses;
}

async function getExpense(id) {
    return await Expense.findById(id).lean();
}

async function deleteExpense(id) {
    return await Expense.findByIdAndDelete(id);
}

module.exports = {
    createExpense,
    getExpenses,
    getExpense,
    deleteExpense
};