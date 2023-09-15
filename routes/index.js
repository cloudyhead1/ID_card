var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
module.exports = router;
router.post('/card', function(req,res){
  console.log(req.body.dateOfNBirth)
  res.render('card', {
    firstName:
  });
})