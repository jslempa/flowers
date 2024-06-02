const db = require('../db')
const Shrub = require('../models/shrub')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const shrubs = [
        {
            commonName: 'Pink azalea, Pinxter flower',
            scientificName: 'Rhododendron periclymenoides',
            family: 'Ericaceae - Heath Family',
            color: ['Pink'],
            season: ['Spring'],
            habitat: 'Upland woods and thickets and borders of swamps and bogs',
            fragrant: true,
            leaves: 'Alternate, simple',
            petals: '5',
            height: '2 - 10 ft',
            description: 'A deciduous shrub with terminal clusters of tubular, vase-shaped, slightly fragrant flowers. (3)',
            images: [{type: String, required: true}],
            imageSources: [{type: String, required: true}] 
        },
        {
            commonName: 'Great laurel, Rosebay rhododendron',
            scientificName: 'Rhododendron maximum',
            family: 'Ericaceae - Heath Family',
            color: ['White', 'Pink'],
            season: ['Early summer'],
            habitat: 'Damp woods and forested wetlands',
            fragrant: false,
            leaves: 'Alternate, simple',
            petals: '5',
            height: '5 - 35 ft',
            description: 'A large evergreen shrub with clusters of pinkish-white, cup-shaped flowers on stick, glandular stalks. (3)',
            images: [{type: String, required: true}],
            imageSources: [{type: String, required: true}] 
        },
        {
            commonName: 'Mountain laurel',
            scientificName: 'Kalmia latifolia',
            family: 'Ericaceae - Heath Family',
            color: ['White', 'Pink'],
            season: ['Late spring', 'Early summer'],
            habitat: 'Open forests and rocky places',
            fragrant: false,
            leaves: 'Alternate, simple',
            petals: '5 fused into shallow, cup-like shape',
            height: '3 - 15 ft',
            description: 'A gnarled evergreen shrub with showy clusters of deep pink buds and pinkish-white flowers on sticky stalks. (3)',
            images: [{type: String, required: true}],
            imageSources: [{type: String, required: true}] 
        },
        {
            commonName: 'Sheep laurel',
            scientificName: 'Kalmia angustifolia',
            family: 'Ericaceae - Heath Family',
            color: ['Pink'],
            season: ['Late spring', 'Summer'],
            habitat: 'Pastures, woods, and swamps',
            fragrant: false,
            leaves: 'Opposite, simple',
            petals: '5 fused into shallow, cup-like shape',
            height: '1 - 3 ft',
            description: 'An evergreen shrub with small, deep pink, saucer-shaped flowers in dense clusters around stem. (3)',
            images: [{type: String, required: true}],
            imageSources: [{type: String, required: true}] 
        },
    ]
    await Shrub.insertMany(shrubs)
    console.log('Created shrubs')
}

const run = async () => {
    await main()
    db.close()
}

run()