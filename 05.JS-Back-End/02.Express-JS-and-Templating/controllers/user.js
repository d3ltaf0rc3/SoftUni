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

module.exports = {
    saveUser,
    logUser
};