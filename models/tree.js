const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Tree = new Schema(
    {
        commonName: {type: String, required: true},
        scientificName: {type: String, required: true},
        family: {type: String, required: true},
        color: [{type: String, required: true}],
        season: [{type: String, required: true}],
        habitat: {type: String, required: true},
        fragrant: {type: Boolean, required: true},
        leaves: {type: String, required: true},
        petals: {type: String, required: true},
        height: {type: String, required: true},
        bark: {type: String, required: true},
        description: {type: String, required: true},
        images: [{type: String, required: true}],
        imageSources: [{type: String, required: true}] 
    },
    {timestamps: true}
    )   
    
module.exports = mongoose.model('tree', Tree)