var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/** */
const checkLogin = (req, res, next) => {
  if (req.session.isLogin == 'true') next()
  else res.redirect('/login')
}
router.get('/logout', UserController.logout)

router.get('/login', UserController.formLogin)
router.post('/login', UserController.login)


router.get('/users/register', UserController.formUserRegister)
router.post('/users/register', UserController.userRegister)



module.exports = router;
