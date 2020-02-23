var connection = require("./connection");

var orm = {
    selectAll: function(table, cb){
        var queryStr = "SELECT * FROM burgers" + table + ";";

        connection.query(queryStr, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
}
module.exports = orm;