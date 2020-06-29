const mongoose = require("mongoose");

const PlaySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: true
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    usersLiked: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model("Play", PlaySchema);