var mongoose = require('./db.js').mongoose;

exports.schemaHotel = new mongoose.Schema({
  name: String,
  localisation: String,
  budget: String,
  note: String,
  ambiance: String,
  filter: String,
  description : String,
  nbVote : String,
  UrlImage: String,
}, {collection : 'hotels',versionKey: false});


exports.schemaRestaurant = new mongoose.Schema({
  name:  String,
  localisation: String,
  budget: String,
  note: String,
  speciality: String,
  ambiance: String,
  filter: String,
  description : String,
  nbVote : String,
  UrlImage: String,
}, {collection : 'restaurants',versionKey: false});

/*
exports.schemaLivre = new mongoose.Schema({
    Id: {type: Number, index: true, unique: true, required: true},
    Nom: {type: String, maxlength: 50},
    Auteur: String,
    Description: String,
    Langue: String,
    Prix: Number,
    ISBN: String,
    MaisonEdition: String,
    NombrePages: Number,
    Poids: String,
    Disponibilité: String,
    DateSortie: String,
    UrlImage: String,
    Categorie: String,
    Quantite: Number,
    DateDerniereCommande: String
}, {collection : 'livres'});


exports.schemaCategorie = new mongoose.Schema({
    Id: {type: String, index: true, unique: true, required: true},
    Libelle: String
}, {collection : 'categories'});


exports.schemaCompte = new mongoose.Schema({
    Nom: {type: String, uppercase: true},
    Prenom: String,
    Email: {type: String, index: true, unique: true, required: true},
    Password: {type: String, required: true}
});
  */
