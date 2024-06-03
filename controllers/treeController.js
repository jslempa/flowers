const Tree = require('../models/tree')

// Read/Show

const getAllTrees = async (req, res) => {
    try {
        const trees = await Tree.find()
        res.json(trees)
    } catch (error) {
        return res.status(500).send(error.message)
    }       
}

const getTreeById = async (req, res) => {
    try {
        const { id } = req.params
        const tree = await Tree.findById(id)
        if (tree) {
            return res.json(tree)
        }
        return res.status(404).send('Tree with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// Create

const createTree = async (req, res) => {
    try {
        const tree = await new Tree(req.body)
        await tree.save()
        return res.status(201).json({
            tree
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

// Update

const updateTree = async (req, res) => {
    try {
        let {id} = req.params;
        let tree = await Tree.findByIdAndUpdate(id, req.body, {new: true})
        if (tree) {
            return res.status(200).json(tree)
        }
    
    throw new Error('Tree not found')
} catch (error) {
    return res.status(500).send(error.message)
    }
}

// Delete

const deleteTree = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Tree.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Tree deleted')
        }
        throw new Error('Tree not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTrees,
    getTreeById,
    createTree,
    updateTree,
    deleteTree
}