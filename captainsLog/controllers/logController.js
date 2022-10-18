const Log = require('../models/log')
const seed = require('../models/seed')

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {  
    Log.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { logs: foundLog })
        }
    })
})

router.get('/new', (req, res) => {     
    res.render('New')
})

router.post('/', (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
})

router.get('/seed', (req, res) => {
    Log.deleteMany({}, (err, deletedLogs) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed)
            Log.create(seed, (err, createdLog) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/logs')
                }
            })
            console.log(typeof Log)
        }
    })
})

router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        console.log(foundLog.createdAt)
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { log: foundLog })
        }
    })
})

router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { log: foundLog })
        }
    })
})

router.put('/:id', (req, res) => {

    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/${req.params.id}`)
        }
    })
})


router.delete('/:id', (req, res) => {
    
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
})


module.exports = router