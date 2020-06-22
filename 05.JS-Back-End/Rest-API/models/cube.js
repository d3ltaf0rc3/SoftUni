const mongoose = require("mongoose");

const CubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        match: [/^[a-z\d\s]+$/i, "Name should only consist of english letters, digits and spaces!"]
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 200,
        match: [/^[a-z\d\s]+$/i, "Description should only consist of english letters, digits and spaces!"]
    },
    imageUrl: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [{
        type: "ObjectId",
        ref: "Accessory"
    }],
    creatorId: {
        type: 'ObjectId',
        ref: "User"
    }
});

CubeSchema.path("imageUrl").validate(function (url) {
    return url.startsWith("https") || url.startsWith("http");
}, "Image URL should start with either http or https!");

module.exports = mongoose.model("Cube", CubeSchema);