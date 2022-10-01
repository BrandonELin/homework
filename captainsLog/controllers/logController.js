const Log = require('../models/log')

const express = require('express')

const router = express.Router()

// ROUTE     GET /logs    (index)
router.get('/', (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Log.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { logs: foundLog })
        }
    })
})

// ROUTE      GET /new    (new)
router.get('/new', (req, res) => {     
    // res.send('<form>Create log</form>')
    res.render('New')
})

// ROUTE     POST /logs     (create)
router.post('/', (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
})


// ROUTE     GET /:id     (show)
router.get('/:id', (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { log: foundLog })
        }
    })
})


// ROUTE      GET /:id/edit     (edit)
router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { log: foundLog })
        }
    })
})

// ROUTE     PUT /:id       (update)
router.put('/:id', (req, res) => {

    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundLog or updatedLog)
    Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/${req.params.id}`)
        }
    })
})


// ROUTE       DELETE /:id      (destroy)
router.delete('/:id', (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a log at index! (in DB)')
    
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
})


module.exports = router