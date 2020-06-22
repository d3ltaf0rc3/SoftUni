const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        match: [/^[a-z\d]+$/i, "Username should only consist of numbers and english letters"]
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", UserSchema);