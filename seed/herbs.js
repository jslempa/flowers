const db = require('../db')
const Herb = require('../models/herb')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const herbs = [


    ]
    await Herb.insertMany(herbs)
    console.log('Created herbs')
}

const run = async () => {
    await main()
    db.close()
}

run()