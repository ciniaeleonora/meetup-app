'use strict'

const { Promoter, Event } = require('../models/index')
const formatDate = require('../helpers/formatDate')

class EventController{
    static findAll (req, res){
        Event.findAll({
            include: Promoter
        })
            .then(data => {
                // res.send(data)
                res.render('events', {data, formatDate})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getEvent(req, res) {
        Promoter.findAll()
            .then(data => {
                res.render('eventForm', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postEvent(req, res) {
        let newEvent = {
            name: req.body.name,
            date: req.body.date,
            location: req.body.location,
            speakers: req.body.speakers,
            PromoterId: req.body.PromoterId
        }
        console.log(newEvent)
        Event.create(newEvent)
            .then(data => {
                res.redirect('/events')
            })
            .catch(err => {
                res.send(err)
            })
    }

    // ganti edit laeng

    static getEditEvent(req, res){
        let pk = +req.params.id
        let obj = {
            event: {},
            promoter: []
        }
        Event.findByPk(pk)
            .then(data => {
                // res.send(data)
                obj.event = data
                return Promoter.findAll()
            })
            .then(data => {
                obj.promoter = data
                res.render('eventEditForm', {data: obj})

            })
            .catch(err => {
                res.send(err)
            })
    }

    static postEditEvent(req, res) {
        let pk = +req.params.id
        let event = {
            name: req.body.name,
            date: req.body.date,
            location: req.body.location,
            speakers: req.body.speakers,
            PromoterId: req.body.PromoterId,
        }
        Event.update(event, {
            where: { id : pk }
        })
            .then((data) => {
                res.redirect('/events')
            })
            .catch((err) => {
                res.send(err)
            })
    }

    
    static delete (req, res){
        let pk = +req.params.id
        
        console.log(pk)

        Event.destroy({
            where: {
                id:pk
            }
        })
            .then((data) => {
                res.redirect('/events')
                // res.send(data)
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = EventController