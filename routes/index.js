var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/login', UserController.login)
router.get('/users/register', UserController.formUserRegister)
router.post('/users/register', UserController.userRegister)



module.exports = router;
