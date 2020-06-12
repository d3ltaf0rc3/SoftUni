const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const privateKey = process.env.KEY;

function saveUser(req, res) {
    const { username, password, repeatPassword } = req.body;

    if (password === repeatPassword) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                const user = new User({ username, password: hash });
                const userObject = await user.save();

                const token = jwt.sign({
                    userID: userObject._id,
                    username: userObject.username
                }, privateKey);

                res.cookie("aid", token);

                res.redirect("/");
            });
        });
    } else {
        res.redirect("/register");
    }
}

module.exports = {
    saveUser
};