const express = require('express')
const router = express.Router()
const Logs = require('../models/Logs')

router.get('/', async (req, res) => {
    const logs = await Logs.find({})
    res.render('Index', { logs })
})

// New
router.get('/new', (req, res) => {
    res.render('New')
})

// Delete

router.delete('/:id', async (req, res) => {
    await Logs.findByIdAndDelete(req.params.id)
    res.redirect('/logs')
})

// Update


// Create
router.post('/', async (req, res) => {
    req.body.shipIsBroken === 'on' ?
        req.body.shipIsBroken = true :
        req.body.shipIsBroken = false

    await Logs.create(req.body)
    res.redirect('/logs')

})

// Edit


router.get('/edit/:id', async (req, res) => {
    const log = await Logs.findById(req.params.id)
    console.log(log)
    res.render('Edit', { log })
})

router.post('/edit/:id', async (req, res) => {
    req.body.shipIsBroken === 'on' ?
        req.body.shipIsBroken = true :
        req.body.shipIsBroken = false

    const logId = req.params.id
    const log = await Logs.findByIdAndUpdate(
        logId,
        {
            title: req.body.title,
            entry: req.body.entry,
            shipIsBroken: req.body.shipIsBroken
        },
        { new: true }

    )
    console.log(log)
    res.redirect('/')
})


//Show

router.get('/:id', async (req, res) => {
    const log = await Logs.findById(req.params.id)
    res.render('Show', { log })
})

module.exports = router