
const express = require('express');
const router = express.Router();

// ✅ Declare book object at the top
let book = { title: '', pages: 0 };

router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

router.get('/addbook', (req, res) => {
  res.render('addbook', { title: 'Add Book' });
});

router.post('/add', (req, res) => {
  const { title, pages } = req.body;
  book.title = title;
  book.pages = pages;
  res.redirect('/thankyou');
});

router.get('/thankyou', (req, res) => {
  res.render('thankyou', { title: 'Thank You' });
});

router.get('/title', (req, res) => {
  res.render('title', {
    title: 'Book Title',
    bookTitle: book.title
  });
});

router.get('/pages', (req, res) => {
  res.render('pages', {
    title: 'Book Pages',
    bookPages: book.pages
  });
});

module.exports = router;
