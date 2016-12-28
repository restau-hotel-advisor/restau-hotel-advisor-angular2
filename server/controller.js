var models = require('./model');


/*
*hotel controller
 */

//recuperer les hotesls
exports.RecupererHotels = function (req, res) {
  console.log('RecupererHotels');
  models.Hotel.find(function (err, Hotels) {
    if (err) {
      return console.error(err);
    }
    res.json(Hotels);
  });
};

//recuperer hotel by id
exports.RecupererHotelParId = function (req, res) {
  console.log('RecupererHotelParId');
  var options = {_id: req.params.id};
  models.Hotel.findOne(options, function (err, hotel) {
    if (err) {
      return console.error(err);
    }
    res.json(hotel);
  });
};

//edit hotel information
exports.EditHotel = function (req, res) {
    var id = req.params.id;
      models.Hotel.findOne({_id: id}, function (err, Hotel) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting hotels',
          error: err
        });
      }
      if (!Hotel) {
        return res.status(404).json({
          message: 'No such hotel'
        });
      }

        Hotel.name = req.body.name ? req.body.name : Hotel.name;
        Hotel.localisation = req.body.localisation ? req.body.localisation : Hotel.localisation;
        Hotel.budget = req.body.budget ? req.body.budget : Hotel.budget;
        Hotel.note = req.body.note ? req.body.note : Hotel.note;
        Hotel.ambiance = req.body.ambiance ? req.body.ambiance : Hotel.ambiance;
        Hotel.filter = req.body.filter ? req.body.filter : Hotel.filter;
        Hotel.UrlImage = req.body.UrlImage ? req.body.UrlImage : Hotel.UrlImage;


        models.Hotel(Hotel).save(function (err, hotel) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Hotel.',
            error: err
          });
        }

        return res.json(hotel);
      });

    });
}


//edit hotel information
exports.addHotel = function (req, res) {

    models.Hotel(req.body).save(function (err, hotel) {
      if (err) {
        return res.status(500).json({
          message: 'Error when adding Hotel.',
          error: err
        });
      }

      return res.json(req.body);
    });


}

//delete hotel information
exports.deleteHotel = function (req, res) {
  var id = req.params.id;
  models.Hotel.findOne({_id: id}, function (err, Hotel) {
    if (err) {
      return res.status(500).json({
        message: 'Error when getting hotels',
        error: err
      });
    }
    if (!Hotel) {
      return res.status(404).json({
        message: 'No such hotel'
      });
    }


    models.Hotel(Hotel).remove(function (err, hotel) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting Hotel.',
          error: err
        });
      }

      return res.json(hotel);
    });

  });
}





/*
 ********* Restaurants controller
 */

//recuperer les Restaurants
exports.RecupererRestaurants = function (req, res) {
  console.log('RecupererRestaurants');
  models.Restaurant.find(function (err, Restaurants) {
    if (err) {
      return console.error(err);
    }
    res.json(Restaurants);
  });
};

//recuperer Restaurant by id
exports.RecupererRestaurantParId = function (req, res) {
  console.log('RecupererRestaurantParId');
  var options = {_id: req.params.id};
  models.Restaurant.findOne(options, function (err, restaurant) {
    if (err) {
      return console.error(err);
    }
    res.json(restaurant);
  });
};

//edit Restaurant information
exports.EditRestaurant = function (req, res) {
  var id = req.params.id;
  models.Restaurant.findOne({_id: id}, function (err, Restaurant) {
    if (err) {
      return res.status(500).json({
        message: 'Error when getting Restaurants',
        error: err
      });
    }
    if (!Restaurant) {
      return res.status(404).json({
        message: 'No such Restaurant'
      });
    }

    Restaurant.name = req.body.name ? req.body.name : Restaurant.name;
    Restaurant.localisation = req.body.localisation ? req.body.localisation : Restaurant.localisation;
    Restaurant.budget = req.body.budget ? req.body.budget : Restaurant.budget;
    Restaurant.note = req.body.note ? req.body.note : Restaurant.note;
    Restaurant.speciality = req.body.speciality ? req.body.speciality : Restaurant.speciality;
    Restaurant.ambiance = req.body.ambiance ? req.body.ambiance : Restaurant.ambiance;
    Restaurant.filter = req.body.filter ? req.body.filter : Restaurant.filter;
    Restaurant.UrlImage = req.body.UrlImage ? req.body.UrlImage : Restaurant.UrlImage;


    models.Restaurant(Restaurant).save(function (err, restaurant) {
      if (err) {
        return res.status(500).json({
          message: 'Error when updating Restaurant.',
          error: err
        });
      }

      return res.json(restaurant);
    });

  });
}

//edit Restaurant information
exports.addRestaurant = function (req, res) {

  models.Restaurant(req.body).save(function (err, restaurant) {
    if (err) {
      return res.status(500).json({
        message: 'Error when adding Restaurant.',
        error: err
      });
    }

    return res.json(req.body);
  });

}

//delete restaurant information
exports.deleteRestaurant = function (req, res) {
  var id = req.params.id;
  models.Restaurant.findOne({_id: id}, function (err, Restaurant) {
    if (err) {
      return res.status(500).json({
        message: 'Error when getting restaurants',
        error: err
      });
    }
    if (!Restaurant) {
      return res.status(404).json({
        message: 'No such restaurant'
      });
    }


    models.Restaurant(Restaurant).remove(function (err, restaurant) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting restaurant.',
          error: err
        });
      }

      return res.json(restaurant);
    });

  });
}


/*
 *general hotel functions
 */
//get semaine restaurants // and sort by newer
exports.RecupererHotelsSemaine = function (req, res) {
  console.log('RecupererHotelsSemaine');
  models.Hotel.find({ note: { $eq: "5/5" }  }, function (err, Hotels) {

    if (err) {
      return console.error(err);
    }
    res.json(Hotels);
  }).sort({ _id: -1});
};

/*
 *general restaurants functions
 */
//get semaine restaurants // and sort by newer
exports.RecupererRestaurantsSemaine = function (req, res) {
  console.log('RecupererRestaurantsSemaine');
  models.Restaurant.find({ note: { $eq: "5/5" }  }, function (err, Restaurants) {

    if (err) {
      return console.error(err);
    }
    res.json(Restaurants);
  }).sort({ _id: -1});
};












/*

exports.RecupererLivres = function (req, res) {
    console.log('RecupererLivres');
    models.Livre.find(function (err, livres) {
        if (err) {
            return console.error(err);
        }
        res.json(livres);
    });
};

exports.RecupererLivreParId = function (req, res) {
    console.log('RecupererLivreParId');
    var options = {Id: req.params.Id};
    models.Livre.findOne(options, function (err, livre) {
        if (err) {
            return console.error(err);
        }
        res.json(livre);
    });
};

exports.RecupererLivresParCategorie = function (req, res) {
    console.log('RecupererLivresParCategorie');
    var options = {Categorie: req.params.categorie};
    models.Livre.find(options, function (err, livres) {
        if (err) {
            return console.error(err);
        }
        res.json(livres);
    });
};

exports.RecupererCategories = function (req, res) {
    console.log('RecupererCategories');
    models.Categorie.find(function (err, categories) {
        if (err) {
            return console.error(err);
        }
        res.json(categories);
    });
};

exports.CreerCategorie = function (req, res) {
    console.log('CreerCategorie', req.body);
    models.Categorie(req.body).save();
    res.json(req.body);
};

exports.CreerLivre = function (req, res) {
    console.log('CreerLivre');
    models.Livre(req.body).save(
    );
    res.json(req.body);
};

/////////////////////////////////
///////////////////Compte
/////////////////////////////////


exports.CreerCompte = function (req, res) {
    console.log('Creer Compte', req.body);
    models.Compte(req.body).save();
    res.json(req.body);
};

exports.Login = function (req, res) {
    console.log('Login', req.body);
    var options = {Email: req.body.Email, Password: req.body.Password};
    models.Compte.findOne(options, function (err, compte) {
        if (err) {
            return console.error(err);
        }
        console.error('compte', compte);
        res.json(compte);
    });
};

*/
