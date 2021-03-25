'use strict';

const User = require('../models').User
const bcrypt = require('bcryptjs')
const sendMail = require('../helpers/nodeMailer')

class UserController {

  static formLogin(req, res) {
    res.render('users/login')
  }

  static login(req, res) {
    User
      .findOne({ where: { username: req.body.username }})
      .then(found => {
        if(!found) res.redirect('/error')
        if (bcrypt.compareSync(req.body.password, found.password)) {
          req.session.currentUser = {
            id : found.id,
            name: found.name,
            email: found.email,
            isAdmin: found.isAdmin
          }
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
    console.log(req.body);
    User 
      .create({...req.body})
      .then(_=> {
        sendMail(req.body.name, req.body.email)
        res.redirect('/')
      })
      .catch(err => res.send(err))
  }
}

module.exports = UserController