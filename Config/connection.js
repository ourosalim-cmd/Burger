var mysql = require("mysql");
var passWord = require("../passWord");
//console.log("Making connection");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: passWord,
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });


module.exports = connection;