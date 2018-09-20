// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var trip = {
    all: function(cb) {
        orm.all("trip", function(res) {
            cb(res);
        });
    }, 
    create: function(cols, vals, cb) {
        orm.create("trip", cols, vals, function(res) {
            cb(res);
        });
    }, 
    update: function(objColVals, condition, cb) {
        orm.update("trip", objColVals, condition, function(res) {
            cb(res);
        });
    }, 
    delete: function(condition, cb){
        orm.delete("trip", objColVals, condition, function(res) {
            cb(res);
        });
    }
};
// Export the database functions for the controller.
module.exports = trip;