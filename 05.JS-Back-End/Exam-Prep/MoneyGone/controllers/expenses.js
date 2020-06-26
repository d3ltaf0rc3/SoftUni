const Expense = require("../models/expense");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function createExpense(req, res) {
    const { merchant, total, currency, category, description, report } = req.body;
    const token = req.cookies["auth-token"];

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