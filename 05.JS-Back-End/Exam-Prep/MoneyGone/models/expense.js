const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    merchant: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    total: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50
    },
    report: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Expense", ExpenseSchema);