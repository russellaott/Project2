var orm = require("../config/orm.js");

var user = {
    all: function(cb) {
        orm.all("user", function(res) {
            cb(res);
        });
    }, 
    create: function(cols, vals, cb) {
        orm.create("user", cols, vals, function(res) {
            cb(res);
        });
    }, 
    update: function(objColVals, condition, cb) {
        orm.update("user", objColVals, condition, function(res) {
            cb(res);
        });
    }, 
    delete: function(condition, cb){
        orm.delete("user", objColVals, condition, function(res) {
            cb(res);
        });
    }
};
// Export the database functions for the controller.
module.exports = user;