const Herb = require('../models/herb')

// Read/Show

const getAllHerbs = async (req, res) => {
    try {
        const herbs = await Herb.find()
        res.json(herbs)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getHerbById = async (req, res) => {
    try {
        const { id } = req.params
        const herb = await Herb.findById(id)
        if (herb) {
            return res.json(herb)
        }
        return res.status(404).send('Herb with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Create

const createHerb = async (req, res) => {
    try {
        const herb = await new Herb(req.body)
        await herb.save()
        return res.status(201).json({
            herb
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

// Update

const updateHerb = async (req, res) => {
    try {
        let {id} = req.params;
        let herb = await Herb.findByIdAndUpdate(id, req.body, {new: true})
        if (herb) {
            return res.status(200).json(herb)
        }
    
    throw new Error('Herb not found')
} catch (error) {
    return res.status(500).send(error.message)
    }
}

// Delete

const deleteHerb = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Herb.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Herb deleted')
        }
        throw new Error('Herb not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllHerbs,
    getHerbById,
    createHerb,
    updateHerb,
    deleteHerb
}

