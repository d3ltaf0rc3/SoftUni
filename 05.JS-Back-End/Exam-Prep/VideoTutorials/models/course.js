const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
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
    usersEnrolled: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model("Course", CourseSchema);