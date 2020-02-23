var orm = require("../config/orm");

var burger = {
    selectAll: function (cb){
    orm.selectAll("burgers", function(result){
        //console.log("Result from burger object inside models: " + result);
    cb(result);//removed return kwd
    });
}
}

module.exports = burger;