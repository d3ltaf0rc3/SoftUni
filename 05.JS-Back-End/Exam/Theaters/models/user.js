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
    likedPlays: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Play"
    }]
});

module.exports = mongoose.model("User", UserSchema);