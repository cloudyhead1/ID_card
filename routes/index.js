var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
module.exports = router;
router.post('/card', function(req,res){
  console.log(req.body.dateOfBirth)
  res.render('card', {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    dataOfBirth: new Data(req.body.dataOfBirth),
    addressLine1: neq.body.addressLine1,
    addressLine2: neq.body.addressLine2,
    city:req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    accountNumber: createAccountNumber(),
    currentDate: new Data()
  });
})