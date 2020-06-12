const express = require("express");
const Accessory = require("../models/accessory");
const { getCube, updateCube } = require("../controllers/cubes");
const { getAccessories } = require("../controllers/accessories");
const router = express.Router();

router.get("/create/accessory", (req, res) => {
    res.render("createAccessory", {
        title: "Create accessory | Cube Workshop"
    });
});

router.post("/create/accessory", async (req, res) => {
    const { name, description, imageUrl } = req.body;

    const accessory = new Accessory({ name, description, imageUrl });
    await accessory.save();

    res.redirect("/");
});

router.get("/attach/accessory/:id", async (req, res) => {
    const id = req.params.id;
    const cube = await getCube(id);
    const accessories = await getAccessories();

    const unattachedAccessories = accessories.filter(acc => !cube.accessories.map(el => el.toString()).includes(acc._id.toString()));

    res.render("attachAccessory", {
        title: "Attach accessory | Cube Workshop",
        ...cube,
        accessories: unattachedAccessories,
        hasAllAccessories: accessories.length === cube.accessories.length
    });
});

router.post("/attach/accessory/:id", async (req, res) => {
    await updateCube(req.params.id, req.body.accessory);

    res.redirect(`/details/${req.params.id}`);
});

module.exports = router;