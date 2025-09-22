const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    layout: 'layouts/main-layout',
    title: 'Home'
  });
});

router.get('/destinations', (req, res) => {
  res.render('destinations', {
    layout: 'layouts/main-layout',
    title: 'Destinations'
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Contact'
  });
});

module.exports = router;