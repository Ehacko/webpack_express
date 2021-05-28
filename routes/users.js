const express = require('express');
const router = express.Router();

const
  title = "Resthome",
  // declare app routes
  routes = [
    // homepage
    {
      request: 'get',
      path: "",
      name: "compte",

    },
  ];

//generate declared routes
for(const route of routes) {
  
  router[route.request](`/${route.path}`, function(req, res, next) {

    res.render('profile', {

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
module.exports = router;
