'use strict';

const User = require('../models').User

class UserController {

  static formLogin(req, res) {
    res.render('users/login')
  }

  static login(req, res) {
    // console.log(req.session);
    // console.log(req.body);
    User
      .findOne({ where: { username: req.body.username } })
      .then(found => {
        if (found.password == req.body.password) {
          req.session.isLogin = true;
          res.redirect('/')
        } else res.redirect('/login')
      })
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