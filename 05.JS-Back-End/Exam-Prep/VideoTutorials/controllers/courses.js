const Course = require("../models/course");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { urlencoded } = require("express");

async function createCourse(req, res) {
    const { title, description, imageUrl, isPublic } = req.body;

    if (title.length < 4) {
        return res.render("create-course", {
            title: "Create Course | Video Tutorials",
            username: req.username,
            isLoggedIn: req.isLoggedIn,
            error: "Title should be at least 4 characters!"
        });
    }

    if (description.length < 20) {
        return res.render("create-course", {
            title: "Create Course | Video Tutorials",
            username: req.username,
            isLoggedIn: req.isLoggedIn,
            error: "Description should be at least 20 characters!"
        });
    }

    if (!imageUrl.startsWith("https") || !imageUrl.startsWith("http")) {
        return res.render("create-course", {
            title: "Create Course | Video Tutorials",
            username: req.username,
            isLoggedIn: req.isLoggedIn,
            error: "Image URL should start with https or http!"
        });
    }

    const token = req.cookies["auth-token"];

    try {
        const decodedObj = jwt.verify(token, process.env.KEY);
        const course = new Course({
            title,
            description,
            imageUrl,
            isPublic: isPublic !== undefined ? true : false,
            createdAt: Date.now()
        });
        await User.findByIdAndUpdate(decodedObj.userID, {
            $addToSet: {
                courses: course
            }
        });
        await course.save();
        res.redirect("/courses/");
    } catch (error) {
        res.render("create-course", {
            title: "Create Course | Video Tutorials",
            username: req.username,
            isLoggedIn: req.isLoggedIn,
            error
        });
    }
}

async function getCourses() {
    const courses = (await Course.find().lean())
        .filter(course => course.isPublic === true)
        .sort((a, b) => b.createdAt - a.createdAt);
    return courses;
}

async function getCourse(req, res) {
    const course = await Course.findById(req.params.id).lean();
    const userObj = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    const user = await User.findById(userObj.userID).populate("courses");
    const isCreator = user.courses.find(el => el._id.toString() === course._id.toString());
    const hasJoined = course.usersEnrolled.find(el => el.toString() === userObj.userID.toString());

    if (hasJoined) {
        req.hasJoined = true;
    }

    if (isCreator) {
        req.isCreator = true;
    }
    return course;
}

async function addUserToCourse(req, res) {
    const user = jwt.verify(req.cookies["auth-token"], process.env.KEY).userID;

    await Course.findByIdAndUpdate(req.params.id, {
        $addToSet: {
            usersEnrolled: user
        }
    });
    return res.redirect(`/courses/`);
}

async function editCourse(req, res) {
    const { title, description, imageUrl, isPublic } = req.body;

    await Course.findByIdAndUpdate(req.params.id, {
        title,
        description,
        imageUrl,
        isPublic: isPublic !== undefined ? true : false,
        createdAt: Date.now()
    });
    return res.redirect("/courses/");
}

async function deleteCourse(id) {
    await Course.findByIdAndDelete(id);
}

async function getTopCourses() {
    const courses = await Course.find().lean();
    return courses.sort((a, b) => b.usersEnrolled.length - a.usersEnrolled.length).slice(0, 3);
}

module.exports = {
    createCourse,
    getCourses,
    getCourse,
    addUserToCourse,
    editCourse,
    deleteCourse,
    getTopCourses
};