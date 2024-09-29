var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/about", function(rec, res, next){
  res.render('about',{title: 'About Us'});
});

router.get("/contact", function(rec, res, next){
  res.render('contact',{title: 'Contact Us'});
});

/* POST contact form data to thankyou page */
router.post('/thankyou', function(req, res, next) {
  // Ambil data dari form contact
  const { name, email, message } = req.body;

  // Kirim data ke halaman thankyou.ejs
  res.render('thankyou', { title: 'Thank You', name: name, message: message });
});
module.exports = router;
