const { Router } = require("express");
const { authenticate } = require("../utils/auth");
const Cube = require("../models/cube");
const router = Router();

router.get("/", async (req, res) => {
    const cubes = await Cube.find();

    res.status(200).json({
        cubes
    });
});

router.post("/add", authenticate, async (req, res) => {
    const cube = new Cube({ ...req.body });
    await cube.save();

    res.status(201).json({
        message: "Successfully created a new cube!",
        cube
    });
});

router.put("/edit/:id", authenticate, (req, res) => {
    const id = req.params.id;
    Cube.findByIdAndUpdate(id, { ...req.body }, err => {
        let message;
        if (err) {
            message = "An error was encountered!";
        }
        res.status(200).json({
            message: message || "Cube successfully updated!",
            data: req.body
        });
    });
});

router.delete("/delete/:id", authenticate, (req, res) => {
    const id = req.params.id;
    Cube.findByIdAndDelete(id, err => {
        let message;
        if (err) {
            message = "An error was encountered! Check your cube id and try again!";
        }
        res.status(200).json({
            message: message || "Cube successfully deleted!"
        });
    });
});

module.exports = router;