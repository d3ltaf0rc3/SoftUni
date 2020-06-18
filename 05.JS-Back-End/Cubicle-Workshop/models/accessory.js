const mongoose = require("mongoose");

const AccessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        match: [/^[a-z\d\s]+$/i, "Name should only consist of english letters, digits and spaces!"]
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: 20,
        match: [/^[a-z\d\s]+$/i, "Description should only consist of english letters, digits and spaces!"]
    },
    cubes: [{
        type: "ObjectId",
        ref: "Cube"
    }]
});

AccessorySchema.path("imageUrl").validate(function (url) {
    return url.startsWith("https") || url.startsWith("http");
}, "Image URL should start with either http or https!");

module.exports = mongoose.model("Accessory", AccessorySchema);