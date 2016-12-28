var schemas = require('./schema');
var mongoose = require('./db').mongoose;


exports.Hotel = mongoose.model('Hotel', schemas.schemaHotel);
exports.Restaurant = mongoose.model('Restaurant', schemas.schemaRestaurant);
