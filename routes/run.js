const express = require("express");
const router = express.Router();
const Run = require("../models/Run");

//Add a new run
router.post("/", (req, res) => {
    Run.create(req.body).then((run) => {
        res.status(201).json({ result: run });
    }).catch((err) => res.status(400).json(err));
});


module.exports = router;