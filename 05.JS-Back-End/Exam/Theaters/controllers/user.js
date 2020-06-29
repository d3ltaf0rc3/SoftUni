const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Play = require("../models/play");

function registerUser(req, res) {
    const { username, password, rePassword } = req.body;
    const regexp = /^[a-z0-9]{3,}$/i;

    if (!regexp.test(username)) {
        return res.render("register", {
            title: "Register | Theaters",
            error: "Username should be at least 3 characters long and should only consist of english letters and digits!"
        });
    }

    if (!regexp.test(password)) {
        return res.render("register", {
            title: "Register | Theaters",
            error: "Password should be at least 3 characters long and should only consist of english letters and digits!"
        });
    }

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

                    res.redirect("/plays/");
                } catch (error) {
                    return res.render("register", {
                        title: "Register | Theaters",
                        error
                    });
                }
            });
        });
    } else {
        return res.render("register", {
            title: "Register | Theaters",
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
    const regexp = /^[a-z0-9]{3,}$/i;

    if (!regexp.test(username)) {
        return res.render("login", {
            title: "Login | Theaters",
            error: "Username should be at least 3 characters long and should only consist of english letters and digits!"
        });
    }

    if (!regexp.test(password)) {
        return res.render("login", {
            title: "Login | Theaters",
            error: "Password should be at least 3 characters long and should only consist of english letters and digits!"
        });
    }

    const user = await User.findOne({ username });

    if (user === null) {
        return res.render("login", {
            title: "Login | Theaters",
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

        res.redirect('/plays/');
    } else {
        return res.render("login", {
            title: "Login | Theaters",
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
        return res.redirect("/plays/");
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
    const playId = req.params.id;
    const { userID } = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    const isCreator = (await Play.findById(playId).lean()).creator.toString() === userID.toString();

    if (isCreator) {
        next();
    } else {
        return res.redirect(`/plays/details/${playId}`);
    }
}

async function hasJoined(req, res, next) {
    const playId = req.params.id;
    const { userID } = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    const play = await Play.findById(playId).lean().map(el => el.usersLiked.map(data => data.toString()));
    const userCreator = (await Play.findById(playId).lean()).creator.toString() === userID.toString();

    if (play.includes(userID.toString())) {
        return res.redirect("/plays/");
    } else {
        if (userCreator) {
            return res.redirect("/plays/");
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