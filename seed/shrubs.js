const db = require('../db')
const Shrub = require('../models/shrub')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const shrubs = [


    ]
    await Shrub.insertMany(shrubs)
    console.log('Created shrubs')
}

const run = async () => {
    await main()
    db.close()
}

run()