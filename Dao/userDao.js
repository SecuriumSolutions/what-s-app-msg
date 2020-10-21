const userModel = require('../models/userAdd');

module.exports = {
    //add the data user
    add: function  (data){
        return new promise (function(resolve, reject){
            userModel.create(data, function(err, result){
                if(err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }
}