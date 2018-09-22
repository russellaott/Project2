var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/home", function(req, res) {
    res.render("home");
});

router.get("/browse", function (req, res) {
    res.render("browse");
});

router.get("/search", function(req, res) {
    res.render("search");
})

router.get("/host", function(req, res) {
    res.render("host");
})

module.exports = router;