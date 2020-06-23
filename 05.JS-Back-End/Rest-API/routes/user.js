const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user === null) {
        return res.status(401).json({
            message: "Incorrect username or password!"
        });
    }

    const status = await bcrypt.compare(password, user.password);

    if (status) {
        const token = jwt.sign({
            userID: user._id,
            username: user.username
        }, process.env.KEY);

        res.cookie("aid", token);

        res.status(200).json({
            message: "Logged in successfully!",
            token
        });
    } else {
        res.status(401).json({
            message: "Incorrect username or password!"
        });
    }
});

module.exports = router;