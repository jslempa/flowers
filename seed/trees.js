const db = require('../db')
const Tree = require('../models/tree')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const trees = [
        {
            commonName: 'Tulip Tree, Yellow Poplar',
            scientificName: 'Liriodendron tulipifera',
            family: 'Magnoliaceae - Magnolia Family',
            color: [{type: String, required: true}],
            season: [{type: String, required: true}],
            habitat: {type: String, required: true},
            fragrant: {type: Boolean, required: true},
            leaves: {type: String, required: true},
            petals: {type: String, required: true},
            height: {type: String, required: true},
            description: {type: String, required: true},
            images: [{type: String, required: true}],
            imageSources: [{type: String, required: true}] 
        },
        {
            commonName: 'Northern Catalpa',
            scientificName: 'Catalpa speciosa',
            family: 'Bignoniaceae - Trumpet Vine Family',
            color: [{type: String, required: true}],
            season: [{type: String, required: true}],
            habitat: {type: String, required: true},
            fragrant: {type: Boolean, required: true},
            leaves: {type: String, required: true},
            petals: {type: String, required: true},
            height: {type: String, required: true},
            description: {type: String, required: true},
            images: [{type: String, required: true}],
            imageSources: [{type: String, required: true}] 
        },
        {
            commonName: 'Black Locust',
            scientificName: 'Robinia pseudoacacia',
            family: 'Fabaceae - Legume Family',
            color: [{type: String, required: true}],
            season: [{type: String, required: true}],
            habitat: {type: String, required: true},
            fragrant: {type: Boolean, required: true},
            leaves: {type: String, required: true},
            petals: {type: String, required: true},
            height: {type: String, required: true},
            description: {type: String, required: true},
            images: [{type: String, required: true}],
            imageSources: [{type: String, required: true}] 
        },
        {
            commonName: 'American Basswood',
            scientificName: 'Tilia americana',
            family: 'Malvaceae - Mallow Family',
            color: [{type: String, required: true}],
            season: [{type: String, required: true}],
            habitat: {type: String, required: true},
            fragrant: {type: Boolean, required: true},
            leaves: {type: String, required: true},
            petals: {type: String, required: true},
            height: {type: String, required: true},
            description: {type: String, required: true},
            images: [{type: String, required: true}],
            imageSources: [{type: String, required: true}] 
        },
    ]
    await Tree.insertMany(trees)
    console.log('Created trees')
}

const run = async () => {
    await main()
    db.close()
}

run()