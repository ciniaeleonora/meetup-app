const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')
const EventController = require('../controllers/events-controller');
const PomoterController = require('../controllers/promoter-controller');

const setLocals = (req, res, next) => {
  res.locals.currentUser = req.session.currentUser || null
  next()
}
/* GET home page. */
router.get('/', setLocals, function(req, res, next) {
  res.render('index', { title: 'Express' })
})

/** */
const checkLogin = (req, res, next) => {
  if (req.session.currentUser) next()
  else res.redirect('/login')
}

router.get('/logout', UserController.logout)

router.get('/login', setLocals, UserController.formLogin)
router.post('/login', UserController.login)


router.get('/users/register', UserController.formUserRegister)
router.post('/users/register', UserController.userRegister)


router.get('/promoters', PomoterController.findAll)

router.get('/events', checkLogin, EventController.findAll)
router.get('/events/add', checkLogin, EventController.getEvent)
router.post('/events/add', checkLogin, EventController.postEvent)
router.get('/events/register/:id', checkLogin, EventController.getRegister)

router.get('/events/edit/:id', checkLogin, EventController.getEditEvent)
router.post('/events/edit/:id', checkLogin, EventController.postEditEvent)
router.get('/events/delete/:id', checkLogin, EventController.delete)

router.get('/events/expired', checkLogin, EventController.findExpired)








module.exports = router;
