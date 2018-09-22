var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var trip = require("../models/trip.js");

router.get("/browse", function (req, res) {
    trip.all(function (data) {
        var hbsObject = {
            trip: data
        };
        console.log(hbsObject);
        res.render("browse", hbsObject);
    });
});

router.post("/api/trip", function (req, res) {
    trip.create([
        "departCity", "departState", "destinationCity", "destinationState", "dt", "smoking", "details"
    ], [
        req.body.departCity, 
        req.body.departState, 
        req.body.destinationCity, 
        req.body.destinationState, 
        req.body.dt, 
        req.body.smoking, 
        req.body.details
    ], function (result) {
            res.json({ id: result.insertId })
        });
});

router.put("/api/trip/:id", function (req, res) {
    var condition = "Id = " + req.params.id;
    console.log("Condition", condition);

    trip.update({
        departCity: req.body.departCity, 
        departState: req.body.departState, 
        destinationCity: req.body.destinationCity, 
        destinationState: req.body.destinationState, 
        dt: req.body.dt, 
        smoking: req.body.smoking, 
        details: req.body.details
    }, condition, function (results) {
        if (results.changedRows === 0) {
            return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    )
});

router.delete("/api/trip/:id", function(req, res) {
    var condition = "Id = " + req.params.id;
    console.log("Condition", condition);
    trip.delete(condition, function(result) {
        console.log("Results", result);
        res.status(200).end();
    });
});
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////////////////////////////////////////////////

var user = require("../models/user.js")

router.get("/", function (req, res) {
    user.all(function (data) {
        var hbsObject = {
            user: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/user", function (req, res) {
    user.create([
        "email", "password", "name", "DOB"
    ], [
        req.body.email, 
        req.body.password, 
        req.body.name, 
        req.body.DOB, 
    ], function (result) {
            res.json({ id: result.insertId })
        });
});

router.put("/api/user/:id", function (req, res) {
    var condition = "Id = " + req.params.id;
    console.log("Condition", condition);

    user.update({
        email: req.body.email, 
        password: req.body.password, 
        name: req.body.name, 
        DOB: req.body.DOB,
    }, condition, function (results) {
        if (results.changedRows === 0) {
            return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    )
});

router.delete("/api/user/:id", function(req, res) {
    var condition = "Id = " + req.params.id;
    console.log("Condition", condition);
    user.delete(condition, function(result) {
        console.log("Results", result);
        res.status(200).end();
    });
});
// Export routes for server.js to use.
module.exports = router;
