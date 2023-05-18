// IMPORTS
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const logsController = require('./controllers/Logs')

const Logs = require('./models/Logs')

require('dotenv').config()

const port = 3000

const app = express()

// Connect to DB

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected`)
    } catch (err) {
        console.error(err)
    }
}

connectDB()

//Middleware

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())


//Routes

app.use('/logs', logsController)

// Index
// app.get('/logs', async (req, res) => {
//     const logs = await Logs.find({})
//     res.render('Index', { logs })
// })

// // New
// app.get('/logs/new', (req, res) => {
//     res.render('New')
// })

// // Delete

// app.delete('/logs/:id', async (req, res) => {
//     await Logs.findByIdAndDelete(req.params.id)
//     res.redirect('/logs')
// })

// // Update


// // Create
// app.post('/logs', async (req, res) => {
//     req.body.shipIsBroken === 'on' ?
//         req.body.shipIsBroken = true :
//         req.body.shipIsBroken = false

//     await Logs.create(req.body)
//     res.redirect('/logs')

// })

// // Edit


// app.get('/logs/edit/:id', async (req, res) => {
//     const log = await Logs.findById(req.params.id)
//     console.log(log)
//     res.render('Edit', { log })
// })

// app.post('/logs/edit/:id', async (req, res) => {
//     req.body.shipIsBroken === 'on' ?
//         req.body.shipIsBroken = true :
//         req.body.shipIsBroken = false

//     const logId = req.params.id
//     const log = await Logs.findByIdAndUpdate(
//         logId,
//         {
//             title: req.body.title,
//             entry: req.body.entry,
//             shipIsBroken: req.body.shipIsBroken
//         },
//         { new: true }

//     )
//     console.log(log)
//     res.redirect('/logs')
// })


// //Show

// app.get('/logs/:id', async (req, res) => {
//     const log = await Logs.findById(req.params.id)
//     res.render('Show', { log })
// })

// Listen

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})