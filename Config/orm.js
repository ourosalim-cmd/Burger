var connection = require("./connection");

var orm = {
    selectAll: function(tableName, cb){
        var queryStr = "SELECT * FROM " + tableName + ";";

        connection.query(queryStr, function(err, result){
            if (err) throw err;
            //console.log("Result from burger database request inside config/orm: " + result)
            return cb(result);//removed return kwd
        });
    },
/////////////////////////////
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table
            + " (" + cols.toString() + ") " + "VALUES (" + vals.toString() + ")";

        // queryString += " (";
        // queryString += cols.toString();
        // queryString += ") ";
        // queryString += "VALUES (";
        // queryString += printQuestionMarks(vals.length);
        // queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }

        return cb(result);
        });
    }
///////////////////////////////

}
module.exports = orm;