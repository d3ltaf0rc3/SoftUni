const mongoose = require("mongoose");

const AccessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    cubes: [{
        type: mongoose.Types.ObjectId,
        ref: "Cube"
    }]
});

module.exports = mongoose.model("Accessory", AccessorySchema);