const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const privateKey = process.env.KEY;

function generateJwtToken(data) {
    const token = jwt.sign(data, privateKey);

    return token;
}

function saveUser(req, res) {
    const { username, password, repeatPassword } = req.body;

    if (password === repeatPassword) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                const user = new User({ username, password: hash });
                const userObject = await user.save();

                const token = generateJwtToken({
                    userID: userObject._id,
                    username: userObject.username
                });

                res.cookie("aid", token);

                res.redirect("/");
            });
        });
    } else {
        res.redirect("/register");
    }
}

async function logUser(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user === null) {
        res.redirect("/login");
    }

    const status = await bcrypt.compare(password, user.password);

    if (status) {
        const token = generateJwtToken({
            userID: user._id,
            username: user.username
        });

        res.cookie("aid", token);

        res.redirect('/');
    } else {
        res.redirect("/login");
    }
}

function checkAuth(req, res, next) {
    const token = req.cookies.aid;

    if (!token) {
        return res.redirect("/");
    }

    try {
        jwt.verify(token, process.env.KEY);
        next();
    } catch (error) {
        return res.redirect("/");
    }
}

function guestAccess(req, res, next) {
    const token = req.cookies.aid;

    if (token) {
        return res.redirect("/");
    }
    next();
}

function isLogged(req, res, next) {
    const token = req.cookies.aid;

    if (!token) {
        req.isLoggedIn = false;
    }

    try {
        jwt.verify(token, process.env.KEY);
        req.isLoggedIn = true;
    } catch (error) {
        req.isLoggedIn = false;
    }
    next();
}

function checkAuthJSON(req, res, next) {
    const token = req.cookies.aid;

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

module.exports = {
    saveUser,
    logUser,
    checkAuth,
    guestAccess,
    isLogged,
    checkAuthJSON
};