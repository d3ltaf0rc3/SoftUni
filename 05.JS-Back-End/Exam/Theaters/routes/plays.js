const { Router } = require("express");
const { isLoggedIn, isNotAuth, isNotAuthPOST, isCreator, hasJoined } = require("../controllers/user");
const { createPlay, getPlays, getPlay, deletePlay, editPlay, likePlay, sortByLikes } = require("../controllers/plays");
const router = Router();

router.get("/", isNotAuth, isLoggedIn, async (req, res) => {
    const plays = await getPlays();

    res.render("user-home", {
        pageTitle: "Home | Theaters",
        username: req.username,
        isLoggedIn: req.isLoggedIn,
        plays
    });
});

router.get("/create", isNotAuth, isLoggedIn, (req, res) => {
    res.render("create-theater", {
        pageTitle: "Create Theater | Theaters",
        username: req.username,
        isLoggedIn: req.isLoggedIn
    });
});

router.post("/create", isNotAuthPOST, isLoggedIn, async (req, res) => {
    await createPlay(req, res);
});

router.get("/details/:id", isNotAuth, isLoggedIn, async (req, res) => {
    const play = await getPlay(req, res);

    res.render("theater-details", {
        pageTitle: "Details | Theaters",
        username: req.username,
        isLoggedIn: req.isLoggedIn,
        isCreator: req.isCreator,
        hasJoined: req.hasJoined,
        ...play
    });
});

router.get("/edit/:id", isNotAuth, isCreator, isLoggedIn, async (req, res) => {
    const play = await getPlay(req, res);

    res.render("edit-theater", {
        pageTitle: "Edit Play | Theaters",
        username: req.username,
        isLoggedIn: req.isLoggedIn,
        ...play,
        isPublic: play.isPublic === true ? "checked" : ""
    });
});

router.post("/edit/:id", isNotAuthPOST, isCreator, async (req, res) => {
    await editPlay(req, res);
});

router.get("/delete/:id", isNotAuth, isCreator, async (req, res) => {
    await deletePlay(req.params.id);
    res.redirect("/plays/");
});

router.get("/like/:id", isNotAuth, hasJoined, isLoggedIn, async (req, res) => {
    await likePlay(req, res);
});

router.get("/sortByLikes", isNotAuth, isLoggedIn, async (req, res) => {
    const plays = await sortByLikes(req, res);
    res.render("user-home", {
        pageTitle: "Home | Theaters",
        username: req.username,
        isLoggedIn: req.isLoggedIn,
        plays
    });
});

module.exports = router;