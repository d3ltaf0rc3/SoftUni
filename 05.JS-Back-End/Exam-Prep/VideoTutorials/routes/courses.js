const { Router } = require("express");
const { isLoggedIn, isNotAuthPOST, isNotAuth, isCreator, hasJoined } = require("../controllers/user");
const { createCourse, getCourses, getCourse, addUserToCourse, editCourse, deleteCourse } = require("../controllers/courses");
const router = Router();

router.get("/", isNotAuth, isLoggedIn, async (req, res) => {
    const courses = await getCourses();

    res.render("user-home", {
        pageTitle: "Home | VideoTutorials",
        username: req.username,
        isLoggedIn: req.isLoggedIn,
        courses
    });
});

router.get("/create", isNotAuth, isLoggedIn, (req, res) => {
    res.render("create-course", {
        pageTitle: "Create Course | Video Tutorials",
        username: req.username,
        isLoggedIn: req.isLoggedIn
    });
});

router.post("/create", isNotAuthPOST, isLoggedIn, async (req, res) => {
    await createCourse(req, res);
});

router.get("/details/:id", isNotAuth, isLoggedIn, async (req, res) => {
    const course = await getCourse(req, res);

    res.render("course-details", {
        pageTitle: "Details | Video Tutorials",
        username: req.username,
        isLoggedIn: req.isLoggedIn,
        isCreator: req.isCreator,
        hasJoined: req.hasJoined,
        ...course
    });
});

router.get("/join/:id", isNotAuth, hasJoined, isLoggedIn, async (req, res) => {
    await addUserToCourse(req, res);
});

router.get("/delete/:id", isNotAuth, isCreator, async (req, res) => {
    await deleteCourse(req.params.id);
    res.redirect("/courses/");
});

router.get("/edit/:id", isNotAuth, isLoggedIn, async (req, res) => {
    const course = await getCourse(req, res);

    res.render("edit-course", {
        pageTitle: "Edit Course | Video Tutorials",
        username: req.username,
        isLoggedIn: req.isLoggedIn,
        ...course,
        isPublic: course.isPublic === true ? "checked" : ""
    });
});

router.post("/edit/:id", isNotAuthPOST, isCreator, async (req, res) => {
    await editCourse(req, res);
});

module.exports = router;