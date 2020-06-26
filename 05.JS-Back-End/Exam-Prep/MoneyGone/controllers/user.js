const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

function registerUser(req, res) {
    const { username, password, rePassword, amount } = req.body;

    if (password === rePassword) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                try {
                    const user = new User({ username, password: hash, amount });
                    const userObject = await user.save();

                    const token = jwt.sign({
                        userID: userObject._id,
                        username: userObject.username
                    }, process.env.KEY);

                    res.cookie("auth-token", token);

                    res.redirect("/expenses");
                } catch (error) {
                    console.log(error);
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
    } catch (error) {
        req.isLoggedIn = false;
    }
    next();
}

async function logInUser(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

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

        res.redirect('/expenses');
    } else {
        res.redirect("/login?error=true");
    }
}

async function addAmount(req, res) {
    const { amount } = req.body;
    if (!amount) {
        return res.redirect("/expenses/");
    }
    const userObject = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    await User.findOneAndUpdate(userObject.userID, { $inc: { 'amount': amount } });
    res.redirect("/expenses/");
}

function isAuth(req, res, next) {
    const token = req.cookies["auth-token"];

    if (!token) {
        return next();
    }

    const decoded = jwt.verify(token, process.env.KEY);

    if (decoded) {
        return res.redirect("/expenses/");
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

module.exports = {
    registerUser,
    isLoggedIn,
    logInUser,
    addAmount,
    isAuth,
    isNotAuth
};