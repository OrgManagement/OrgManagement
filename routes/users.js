//// index.js
const express = require("express");
const router = express.Router();

const array = [];

router.get("/", (req, res) => {
    return res.status(200).send("Default call to root");
});

router.post("/", (req, res) => {
    return res.status(200).send("Default call to root");
});

router.get("/test", (req, res) => res.json({ array }));

router.post("/test", (req, res) => {
  array.push(req.body.item);
  res.send('success!');
});

module.exports = router;