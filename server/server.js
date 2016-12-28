var express = require('express');
var app = express();
var models = require('./model.js');
//require('./fixtures');

//CORS
var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var contoller = require('./controller');


//hotel controller
app.get('/Hotels', contoller.RecupererHotels);
app.get('/Hotel/:id', contoller.RecupererHotelParId);
app.put('/HotelDetail/:id', contoller.EditHotel);//
app.post('/HotelAdd', contoller.addHotel);//
app.delete('/HotelDelete/:id', contoller.deleteHotel);//
//
app.get('/HotelsSemaine', contoller.RecupererHotelsSemaine);//(hotels.service.ts:RecupererHotelsSemaine)(controller.js:RecupererHotelsSemaine)
app.get('/RestaurantsSemaine', contoller.RecupererRestaurantsSemaine);//

//Restaurants controller
app.get('/Restaurants', contoller.RecupererRestaurants);
app.get('/Restaurant/:id', contoller.RecupererRestaurantParId);
app.put('/RestaurantDetail/:id', contoller.EditRestaurant);//
app.post('/RestaurantAdd', contoller.addRestaurant);//
app.delete('/RestaurantDelete/:id', contoller.deleteRestaurant);//



//Route de Test
app.get('/', function (res, req) {
    console.log("Bonjour NodeJS");
    req.send("Bonjour NodeJS");
})

app.listen(8080);
