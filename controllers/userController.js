'use strict';

const User = require('../models').User

class UserController {

  static login(req, res) {
    res.render('users/login')
  }

  static formUserRegister(req, res) {
    res.render('users/form-register')
  }

  static userRegister(req, res) {
    User 
      .create({...req.body})
      .then(_=> res.redirect('/'))
      .catch(err => res.send(err))
  }
}

module.exports = UserController