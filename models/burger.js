var orm = require("/orm");

var burger = {
    selectAll: function (cb){
    orm.selectAll(burgers, function(result){
    cb(result);
    });
   
}
}

module.exports = burger;