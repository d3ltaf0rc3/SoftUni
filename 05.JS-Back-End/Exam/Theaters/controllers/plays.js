const Play = require("../models/play");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const play = require("../models/play");

async function createPlay(req, res) {
    const { title, description, imageUrl, isPublic } = req.body;

    if (title === "") {
        return res.render("create-theater", {
            title: "Create Play | Theaters",
            username: req.username,
            isLoggedIn: req.isLoggedIn,
            error: "Title should not be empty!"
        });
    }

    if (description === "") {
        return res.render("create-theater", {
            title: "Create Play | Theaters",
            username: req.username,
            isLoggedIn: req.isLoggedIn,
            error: "Description should not be empty!"
        });
    }

    if (imageUrl === "") {
        return res.render("create-theater", {
            title: "Create Play | Theaters",
            username: req.username,
            isLoggedIn: req.isLoggedIn,
            error: "Image URL should not be empty!"
        });
    }

    const token = req.cookies["auth-token"];

    try {
        const decodedObj = jwt.verify(token, process.env.KEY);
        const play = new Play({
            title,
            description,
            imageUrl,
            isPublic: isPublic !== undefined ? true : false,
            createdAt: Date.now(),
            creator: decodedObj.userID
        });
        await play.save();
        res.redirect("/plays/");
    } catch (error) {
        res.render("create-theater", {
            title: "Create Play | Theaters",
            username: req.username,
            isLoggedIn: req.isLoggedIn,
            error
        });
    }
}

async function getPlays() {
    const plays = (await Play.find().lean())
        .filter(play => play.isPublic === true)
        .sort((a, b) => b.createdAt - a.createdAt);
    return plays;
}

async function getPlay(req, res) {
    const play = await Play.findById(req.params.id).lean();
    const userObj = jwt.verify(req.cookies["auth-token"], process.env.KEY);
    const isCreator = play.creator.toString() === userObj.userID.toString();
    const hasJoined = play.usersLiked.find(el => el.toString() === userObj.userID.toString());

    if (hasJoined) {
        req.hasJoined = true;
    }

    if (isCreator) {
        req.isCreator = true;
    }
    return play;
}

async function deletePlay(id) {
    await Play.findByIdAndDelete(id);
}

async function editPlay(req, res) {
    const { title, description, imageUrl, isPublic } = req.body;

    const oldPlay = await getPlay(req, res);

    await Play.findByIdAndUpdate(req.params.id, {
        title,
        description,
        imageUrl,
        isPublic: isPublic !== undefined ? true : false,
        createdAt: oldPlay.createdAt,
        creator: oldPlay.creator,
        usersLiked: oldPlay.usersLiked
    });
    return res.redirect("/plays/");
}

async function likePlay(req, res) {
    const { userID } = jwt.verify(req.cookies["auth-token"], process.env.KEY);

    await Play.findByIdAndUpdate(req.params.id, {
        $addToSet: {
            usersLiked: userID
        }
    });

    return res.redirect(`/plays/`);
}

async function getTopPlays() {
    const plays = await Play.find().lean();
    return plays
        .filter(play => play.isPublic === true)
        .sort((a, b) => b.usersLiked.length - a.usersLiked.length).slice(0, 3);
}

async function sortByLikes(req, res) {
    const allPlays = await Play.find().lean();
    const plays = allPlays
        .filter(play => play.isPublic === true)
        .sort((a, b) => b.usersLiked.length - a.usersLiked.length);
    return plays;
}

module.exports = {
    createPlay,
    getPlays,
    getPlay,
    deletePlay,
    editPlay,
    likePlay,
    getTopPlays,
    sortByLikes
};