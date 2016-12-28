var mongoose = require('mongoose');
//
mongoose.Promise = require('bluebird');


mongoose.connect('mongodb://rha_user:rha_pass@ds119718.mlab.com:19718/restau-hotel-advisor');//mongodb://localhost:27017/jebouquine

var db = mongoose.connection;
db.on('error', function (error) {
    console.log('******** Erreur Mongoose **********');
    console.log(error);
    console.log('******** Erreur Mongoose **********');
});

db.on('open', function () {
    console.log('******** IS OPEN server *********');
});

exports.mongoose = mongoose;
