const express = require('express');
const router = express.Router();

/* pour dylan => ajoute a cette liste le nom de toutes les pages que tu compte créer et leur descriptions.
  List des page du site:
    - Accueil: page d'accueil
*/

/*
  pour le routage il faut ecrire le code suivant:
  router[Request_type](Path, function(req, res, next) {
    res.render(Pug_file, Data);
  });

  Request_type peux etre egal à:
    -get: pour ecouter les requete get c'est à dire les requetes envoyer via l'url
    -post: pour ecouter les requete post c'est à dire les requetes envoyer dans le body de la page
    -all:  les requete get et post

  Path: url auquel repondra le router.

  Pug_file: nom du fichier pug qui créera le rendu(le code html)

  Data: objet contenant les donnés à faire passer au fichier pug

*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
for(route in ["menus", "recettes", "search"]) {
  router.get(`/${route}`, function(req, res, next) {
    res.render('index', { title: route });
  });
}
*/
module.exports = router;
