const Shrub = require('../models/shrub')

// Read/Show

const getAllShrubs = async (req, res) => {
    try {
        const shrubs = await Shrub.find()
        res.json(shrubs)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getShrubById = async (req, res) => {
    try {
        const { id } = req.params
        const shrub = await Shrub.findById(id)
        if (shrub) {
            return res.json(shrub)
        }
        return res.status(404).send('Shrub with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Create

const createShrub = async (req, res) => {
    try {
        const shrub = await new Shrub(req.body)
        await shrub.save()
        return res.status(201).json({
            shrub
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

// Update

const updateShrub = async (req, res) => {
    try {
        let {id} = req.params;
        let shrub = await Shrub.findByIdAndUpdate(id, req.body, {new: true})
        if (shrub) {
            return res.status(200).json(shrub)
        }
    
    throw new Error('Shrub not found')
} catch (error) {
    return res.status(500).send(error.message)
    }
}

// Delete

const deleteShrub = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Shrub.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Shrub deleted')
        }
        throw new Error('Shrub not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllShrubs,
    getShrubById,
    createShrub,
    updateShrub,
    deleteShrub
}