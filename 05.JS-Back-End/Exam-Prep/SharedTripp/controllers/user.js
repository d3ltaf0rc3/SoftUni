const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

function registerUser(req, res) {
    const { email, password, rePassword } = req.body;

    if (password === rePassword) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                try {
                    const user = new User({ email, password: hash });
                    const userObject = await user.save();
                    const token = jwt.sign({
                        userID: userObject._id,
                        username: userObject.username
                    }, process.env.KEY);
                    res.cookie("auth-token", token);
                    res.cookie("email", email);
                    res.redirect("/");
                } catch (error) {
                    return res.redirect("/register?error=true");
                }
            });
        });
    } else {
        return res.redirect("/register?error=true");
    }
}

function isLoggedIn(req, res, next) {
    const token = req.cookies["auth-token"];
    if (!token) {
        req.isLoggedIn = false;
    }

    try {
        jwt.verify(token, process.env.KEY);
        req.isLoggedIn = true;
        req.email = req.cookies.email;
    } catch (error) {
        req.isLoggedIn = false;
    }
    next();
}

async function logInUser(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user === null) {
        return res.redirect("/login?error=true");
    }

    const status = await bcrypt.compare(password, user.password);

    if (status) {
        const token = jwt.sign({
            userID: user._id,
            username: user.username
        }, process.env.KEY);

        res.cookie("auth-token", token);
        res.cookie("email", email);

        res.redirect('/');
    } else {
        res.redirect("/login?error=true");
    }
}

function isAuth(req, res, next) {
    const token = req.cookies["auth-token"];
    if (!token) {
        return res.redirect("/login");
    }

    try {
        jwt.verify(token, process.env.KEY);
        next();
    } catch (error) {
        return res.redirect("/login");
    }
}

async function getUser(id) {
    return await User.findById(id).lean();
}

module.exports = {
    registerUser,
    isLoggedIn,
    logInUser,
    isAuth,
    getUser
};