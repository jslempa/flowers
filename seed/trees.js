const db = require('../db')
const Tree = require('../models/tree')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const trees = [
        {
            commonName: 'Tulip Tree, Yellow Poplar',
            scientificName: 'Liriodendron tulipifera',
            family: 'Magnoliaceae - Magnolia Family',
            color: ['Yellow', 'Orange'],
            season: ['Late spring'],
            habitat: 'Moist well-drained soils, especially valleys and slopes',
            fragrant: false,
            leaves: 'Alternate, simple',
            petals: '6',
            height: '60 - 120 ft',
            bark: 'Dark brownish-gray, becoming thick and deeply furrowed',
            description: 'One of the tallest eastern hardwoods, with a long, straight trunk, a narrow crown that spreads with age, and large, showy flowers. (6)',
            images: ['https://i.imgur.com/h08jrCV.jpeg'],
            imageCredits: ['https://www.wildflower.org/plants/result.php?id_plant=LITU'] 
        },
        {
            commonName: 'Northern Catalpa',
            scientificName: 'Catalpa speciosa',
            family: 'Bignoniaceae - Trumpet Vine Family',
            color: ['White', 'Yellow', 'Purple'],
            season: ['Late spring', 'Early summer'],
            habitat: 'Moist valleys by streams, naturalized in open areas such as roadsides and clearings',
            fragrant: false,
            leaves: 'Opposite or whorled',
            petals: '5',
            height: '50 - 80 ft',
            bark: 'Brownish-gray; smooth, becoming furrowed into scaly plates or ridges',
            description: 'Tree with rounded crown of spreading branches; large, heart-shaped leaves; large, showy flowers; and long, bean-like fruit. (6)',
            images: ['https://i.imgur.com/2S6cz7I.jpeg'],
            imageCredits: ['J. Slempa'] 
        },
        {
            commonName: 'Black Locust',
            scientificName: 'Robinia pseudoacacia',
            family: 'Fabaceae - Legume Family',
            color: ['White'],
            season: ['Late spring'],
            habitat: 'Moist to dry sandy and rocky soils, especially on old fields and other open areas, woodlands',
            fragrant: true,
            leaves: 'Alternate, compound',
            petals: '5',
            height: '40 - 80 ft',
            bark: 'Light gray, thick, deeply furrowed into long interlacing ridges',
            description: 'Medium-sized, spiny tree with an irregular, open crown and showy dro0ping clusters of very fragrant flowers. (6)',
            images: ['https://i.imgur.com/c27kc4Z.jpeg'],
            imageCredits: ['https://www.wildflower.org/gallery/species.php?id_plant=ROPS'] 
        },
        {
            commonName: 'American Basswood',
            scientificName: 'Tilia americana',
            family: 'Malvaceae - Mallow Family',
            color: ['Yellow'],
            season: ['Summer'],
            habitat: 'Moist soils of valleys and uplands',
            fragrant: true,
            leaves: 'Alternate, simple',
            petals: '5',
            height: '60 - 100 ft',
            bark: 'Dark gray; smooth, becoming furrowed into narrow scaly ridges',
            description: 'Large tree with a dense crown of many small, often drooping branches and large leaves; frequently has two or more trunks. (6)',
            images: ['https://i.imgur.com/NOkoXGO.jpeg'],
            imageCredits: ['https://www.wildflower.org/gallery/species.php?id_plant=TIAM'] 
        },
        {
            commonName: 'Flowering Dogwood',
            scientificName: 'Cornus florida',
            family: 'Cornaceae - Dogwood Family',
            color: ['White', 'Yellow'],
            season: ['Spring'],
            habitat: 'Both moist and dry soils of valleys and uplands in understory of hardwood forests',
            fragrant: false,
            leaves: 'Opposite, simple',
            petals: '4',
            height: '10 - 40 ft',
            bark: 'Dark reddish-brown; rough, broken into small square plates',
            description: 'A small tree with a flat-topped crown of wide-spreading branches. (5)',
            images: ['https://i.imgur.com/aW6qeM9.jpeg'],
            imageCredits: ['https://www.wildflower.org/gallery/species.php?id_plant=cofl2'] 
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