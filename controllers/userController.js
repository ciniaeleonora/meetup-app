'use strict';

const User = require('../models').User
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(7)

class UserController {

  static formLogin(req, res) {
    res.render('users/login')
  }

  static login(req, res) {
    User
      .findOne({ where: { username: req.body.username } })
      .then(found => {
        if(!found) res.redirect('/error')
        if (bcrypt.compareSync(req.body.password, found.password)) {
          req.session.isLogin = true;
          console.log(req.session.isLogin,'req sesion');
          res.redirect('/')
        } else res.redirect('/login')
      })
  }

  static logout(req, res) {
    req.session.destroy()
    res.redirect('/login')
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