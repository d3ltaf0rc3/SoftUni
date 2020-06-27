const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

function registerUser(req, res) {
    const { username, password, rePassword, amount } = req.body;
    const regexp = /^[a-z0-9]{4,}$/i;

    if (amount < 0) {
        return res.render("register", {
            title: "Register | MoneyGone",
            error: "Amount should be equal to or greater than zero!"
        });
    }

    if (!regexp.test(username)) {
        return res.render("register", {
            title: "Register | MoneyGone",
            error: "Username should be at least 4 characters and should only consist of english letters and digits!"
        });
    }

    if (password === rePassword) {
        if (password.length < 8) {
            return res.render("register", {
                title: "Register | MoneyGone",
                error: "Password should be at least 8 characters!"
            });
        }

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                try {
                    const user = new User({ username, password: hash, amount: amount || 0 });
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
        return res.render("register", {
            title: "Register | MoneyGone",
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
        req.user = decoded.username;
    } catch (error) {
        req.isLoggedIn = false;
    }
    next();
}

async function logInUser(req, res) {
    const { username, password } = req.body;
    const regexp = /^[a-z0-9]{4,}$/i;

    if (!regexp.test(username)) {
        return res.render("login", {
            title: "Login | MoneyGone",
            error: "Username should be at least 4 characters and should only consist of english letters and digits!"
        });
    }

    if (password.length < 8) {
        return res.render("login", {
            title: "Login | MoneyGone",
            error: "Password should be at least 8 characters!"
        });
    }

    const user = await User.findOne({ username });

    if (user === null) {
        return res.render("login", {
            title: "Login | MoneyGone",
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

        res.redirect('/expenses');
    } else {
        return res.render("login", {
            title: "Login | MoneyGone",
            error: "Wrong username or password!"
        });
    }
}

async function addAmount(req, res) {
    const { amount } = req.body;
    if (!amount) {
        return res.redirect("/expenses/");
    }
    const userObject = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    await User.findOneAndUpdate({ _id: userObject.userID }, { $inc: { 'amount': amount } });
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

async function getUserData(req, res) {
    const token = req.cookies["auth-token"];
    const usrObj = jwt.verify(token, process.env.KEY);
    const id = usrObj.userID;

    return await User.findById(id).populate("expenses");
}

module.exports = {
    registerUser,
    isLoggedIn,
    logInUser,
    addAmount,
    isAuth,
    isNotAuth,
    getUserData
};