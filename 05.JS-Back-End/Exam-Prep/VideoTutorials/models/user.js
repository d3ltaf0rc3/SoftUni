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
    courses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Course"
    }]
});

module.exports = mongoose.model("User", UserSchema);