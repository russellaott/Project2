var connection = require("../config/connection.js");
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {

    all: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            //console.log(results);
            cb(res);
        });
    }, 

    searchTrip: function(tableInput , colOne , valueOne , colTwo , valueTwo , colThree , valueThree , colFour , valueFour , cb){
        var queryString = "SELECT * FROM "+ tableInput + " WHERE "+ colOne + " = "+ valueOne + " AND WHERE "+ colTwo +" = "+ valueTwo 
        +" AND WHERE "+ colThree +" = "+ valueThree +" AND WHERE "+ colFour +" = "+ valueFour ;
        connection.query(queryString , function (err , res){
            if (err) throw err;
            cb(res);
        })
    },

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err
            }
            cb (result);
        });
    }, 

    update: function(table, objColVals, condition, cb) {
        console.log(objColVals);
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(objColVals);
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }, 
    
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM" + table + " WHERE id = " + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;