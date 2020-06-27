const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Course = require("../models/course");

function registerUser(req, res) {
    const { username, password, rePassword } = req.body;

    if (password === rePassword) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                try {
                    const user = new User({ username, password: hash });
                    const userObject = await user.save();

                    const token = jwt.sign({
                        userID: userObject._id,
                        username: userObject.username
                    }, process.env.KEY);

                    res.cookie("auth-token", token);

                    res.redirect("/courses/");
                } catch (error) {
                    return res.render("register", {
                        title: "Register | Video Tutorials",
                        error
                    });
                }
            });
        });
    } else {
        return res.render("register", {
            title: "Register | Video Tutorials",
            error: "Both passwords must be the same!"
        });
    }
}

function isLoggedIn(req, res, next) {
    const token = req.cookies["auth-token"];
    if (!token) {
        req.isLoggedIn = false;
    }

    try {
        const decoded = jwt.verify(token, process.env.KEY);
        req.isLoggedIn = true;
        req.username = decoded.username;
    } catch (error) {
        req.isLoggedIn = false;
    }
    next();
}

async function logInUser(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user === null) {
        return res.render("login", {
            title: "Login | Video Tutorials",
            error: "Wrong username or password!"
        });
    }

    const status = await bcrypt.compare(password, user.password);

    if (status) {
        const token = jwt.sign({
            userID: user._id,
            username: user.username
        }, process.env.KEY);

        res.cookie("auth-token", token);

        res.redirect('/courses/');
    } else {
        return res.render("login", {
            title: "Login | Video Tutorials",
            error: "Wrong username or password!"
        });
    }
}

function isAuth(req, res, next) {
    const token = req.cookies["auth-token"];

    if (!token) {
        return next();
    }

    const decoded = jwt.verify(token, process.env.KEY);

    if (decoded) {
        return res.redirect("/courses/");
    } else {
        return next();
    }
}

function isNotAuth(req, res, next) {
    const token = req.cookies["auth-token"];

    if (!token) {
        return res.redirect("/login");
    }

    try {
        jwt.verify(token, process.env.KEY);
        return next();
    } catch (error) {
        return res.redirect("/login");
    }
}

function isNotAuthPOST(req, res, next) {
    const token = req.cookies["auth-token"];

    if (!token) {
        return res.json({
            error: "Not authenticated!"
        });
    }

    try {
        jwt.verify(token, process.env.KEY);
        next();
    } catch (error) {
        return res.json({
            error: "Not authenticated!"
        });
    }
}

async function isCreator(req, res, next) {
    const courseId = req.params.id;
    const { userID } = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    const user = await User.findById(userID).lean().map(el => el.courses.map(data => data.toString()));

    if (user.includes(courseId.toString())) {
        next();
    } else {
        return res.redirect(`/courses/details/${courseId}`);
    }
}

async function hasJoined(req, res, next) {
    const courseId = req.params.id;
    const { userID } = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    const course = await Course.findById(courseId).lean().map(el => el.usersEnrolled.map(data => data.toString()));
    const user = await User.findById(userID).lean().map(el => el.courses.map(data => data.toString()));

    if (course.includes(userID.toString())) {
        return res.redirect("/courses/");
    } else {
        if (user.includes(courseId.toString())) {
            return res.redirect("/courses/");
        }
        next();
    }
}

module.exports = {
    registerUser,
    isLoggedIn,
    logInUser,
    isAuth,
    isNotAuth,
    isNotAuthPOST,
    isCreator,
    hasJoined
};