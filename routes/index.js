const express = require('express');
const router = express.Router();

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
