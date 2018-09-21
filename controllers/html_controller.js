var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.handlebars"));
});

router.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.handlebars"));
});

router.get("/browse", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/browse.handlebars"));
});

module.exports = router;