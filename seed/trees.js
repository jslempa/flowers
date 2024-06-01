const db = require('../db')
const Tree = require('../models/tree')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const trees = [


    ]
    await Tree.insertMany(trees)
    console.log('Created trees')
}

const run = async () => {
    await main()
    db.close()
}

run()