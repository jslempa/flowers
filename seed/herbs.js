const db = require('../db')
const Herb = require('../models/herb')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const herbs = [
        {
            commonName: 'Wild columbine',
            scientificName: 'Aquilegia canadensis',
            family: 'Ranunculaceae - Buttercup Family',
            color: ['Red', 'Yellow'],
            season: ['Late spring', 'Early summer'],
            habitat: 'Dry woods, rocky cliffs, ledges',
            fragrant: false,
            leaves: 'Alternate, compound',
            petals: '5',
            height: '1/2 - 3 ft',
            description: 'Large (1 - 2" wide) showy, nodding flowers. Each petal has a long, narrow spur at the back. The leaflets grow in threes and are usually deeply lobed. (2)',
            images: ['https://i.imgur.com/GRmLdvy.jpeg'],
            imageCredits: ['https://en.wikipedia.org/wiki/Aquilegia_canadensis']
         },
         {
            commonName: 'Wild geranium',
            scientificName: 'Geranium maculatum',
            family: 'Geraniaceae - Geranium Family',
            color: ['Pink', 'Purple'],
            season: ['Spring', 'Early summer'],
            habitat: 'Woods, shady roadsides, thickets, meadows',
            fragrant: false,
            leaves: 'Opposite, deeply lobed',
            petals: '5',
            height: '1 - 2 ft',
            description: 'Flowers 1 - 1 1/2" wide. Leaves deeply and irregularly cleft into 3-5 lobes, the lower leaves long-stalked. (2)',
            images: ['https://i.imgur.com/4btWwl3.jpeg'],
            imageCredits: ['https://www.wildflower.org/plants/result.php?id_plant=gema'] 
         },
         {
            commonName: 'Yellow trout lily',
            scientificName: 'Erythronium americanum',
            family: 'Liliaceae - Lily Family',
            color: ['Yellow'],
            season: ['Early spring'],
            habitat: 'Rich woods, bottomlands, meadows',
            fragrant: false,
            leaves: 'Basal, simple',
            petals: '6',
            height: '4 - 10 in',
            description: 'Flowers solitary, 1/2 - 2 1/2" wide, petals recurved. Leaves mottled, elliptic or narrowly oval. (1)',
            images: ['https://i.imgur.com/jcAkzYm.jpeg'],
            imageCredits: ['https://en.wikipedia.org/wiki/Erythronium_americanum'] 
         },
         {
            commonName: 'Pink lady slipper',
            scientificName: 'Cypripedium acaule',
            family: 'Orchidaceae - Orchid Family',
            color: ['Pink'],
            season: ['Spring'],
            habitat: 'Acid swamps, bogs, dry woods, dunes',
            fragrant: false,
            leaves: 'Basal, simple',
            petals: 'Irregular',
            height: '6 - 16"',
            description: 'Flower solitary, the lip 1 - 2" long, hollow pouch-shaped and cleft in the center. (2)',
            images: ['https://i.imgur.com/b8lLPPZ.jpeg'],
            imageCredits: ['https://www.wildflower.org/gallery/species.php?id_plant=cyac3'] 
         },
   ]
   await Herb.insertMany(herbs)
   console.log('Created herbs')
}

const run = async () => {
    await main()
    db.close()
}

run()