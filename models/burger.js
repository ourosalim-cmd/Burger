var orm = require("../config/orm");

var burger = {
    selectAll: function (cb){
    orm.selectAll("burgers", function(result){
        //console.log("Result from burger object inside models: " + result);
    cb(result);//removed return kwd
    });
},
create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
}
}

module.exports = burger;