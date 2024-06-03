const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const treeController = require('./controllers/treeController.js')
const shrubController = require('./controllers/shrubController.js')
const herbController = require('./controllers/herbController.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('Hi!'))

// Get all

app.get('/trees', treeController.getAllTrees)
app.get('/shrubs', shrubController.getAllShrubs)
app.get('/herbs', herbController.getAllHerbs)

// Get by ID

app.get('/trees/:id', treeController.getTreeById)
app.get('/shrubs/:id', shrubController.getShrubById)
app.get('/herbs/:id', herbController.getHerbById)

// Create

app.post('/trees', treeController.createTree)
app.post('/shrubs', shrubController.createShrub)
app.post('/herbs', herbController.createHerb)

// Update

app.put('/trees/:id', treeController.updateTree)
app.put('/shrubs/:id', shrubController.updateShrub)
app.put('/herbs/:id', herbController.updateHerb)

// Delete

app.delete('/trees/:id', treeController.deleteTree)
app.delete('/shrubs/:id', shrubController.deleteShrub)
app.delete('/herbs/:id', herbController.deleteHerb)