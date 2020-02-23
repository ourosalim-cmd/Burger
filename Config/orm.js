var connection = require("./connection");

var orm = {
    selectAll: function(tableName, cb){
        var queryStr = "SELECT * FROM " + tableName + ";";

        connection.query(queryStr, function(err, result){
            if (err) throw err;
            //console.log("Result from burger database request inside config/orm: " + result)
            cb(result);//removed return kwd
        });
    }
}
module.exports = orm;