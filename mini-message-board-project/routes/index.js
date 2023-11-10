var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hello, everyone! How's it going?",
    user: "Tyler",
    added: new Date(),
  },
  {
    text: "Hi Tyler! Everything is going great, thanks!",
    user: "Ashley",
    added: new Date(),
  },
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

/* POST new message page. */
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect(301, '/');
  
});


module.exports = router;
