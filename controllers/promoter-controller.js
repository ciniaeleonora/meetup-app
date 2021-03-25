'use strict'

const {Promoter, Event} = require('../models/index')

class PomoterController{
    static findAll (req, res){
        Promoter.findAll()
            .then(data => {
                // res.send(data)
                res.render('promoters', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }


}

module.exports = PomoterController