const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    expenses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Expense"
    }]
});

module.exports = mongoose.model("User", UserSchema);