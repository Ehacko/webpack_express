const express = require('express');
const router = express.Router();

/* pour dylan => ajoute a cette liste le nom de toutes les pages que tu compte créer et leur descriptions.
  List des page du site:
    - Accueil : page d'accueil
    - Menus : interface des menus
    - Connexion : espace de connexion et de création de compte
    - Recettes :  interface des recettes 
    - Profile : acces espace personnel
    
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
const
  title = "Resthome",
  // declare app routes
  routes = [
    // homepage
    {
      request: 'get',
      path: "",
      name: "Accueil",

    },
    // page menu
    {
      request: 'get',
      path: "menu",
      name: "Menu",


    },
    // page recettes
    {
      request: 'get',
      path: "recettes",
      name: "Recettes",
      data: {
        recettes: ((a) => {let c=[]; for(let i=1; i<=a; i++ ){ c.push({name:`Recette ${i}`, url:`/recettes/?name=recette_${i}`}) } return c })(10)
      }
    },
  ];

//generate declared routes
for(const route of routes) {
  
  router[route.request](`/${route.path}`, function(req, res, next) {

    res.render('index', {

      title,
      page: route.name ? route.name : "need a name",
      bannerText: req.query.name || route.name,
      params: {
        ... ['get','all'].includes(route.request) ? {get: req.query} : {},
        ... ['post','all'].includes(route.request) ? {post: req.body} : {},
      },
      ... route.data || {},
    });

  });
  
}

/* GET all undeclared routes. */
router.get('/*', function(req, res, next) {
  res.redirect('/')
});

module.exports = router;
