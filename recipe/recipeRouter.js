const express = require('express');

const Recipe = require('./recipe-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Recipe.find()
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed!'})
        })
})



router.get('/:id', (req, res) => {
    const { id } = req.params;

    Recipe.findById(id)
        .then(recipe => {
            if (recipe){
            res.json(recipe);
            } else {
                res.status(404).json({ message: 'Not found!' })
            }
        }).catch(err => {
            res.status(500).json({ message: 'Failed!' });
        })
})

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    Recipe.getShoppingList(id)
        .then(list => {
            if (list) {
                res.json(list)
            } else {
                res.status(404).json({ message: 'Not found!' })
            }
        }).catch(err => {
            res.status(500).json({ message: 'Failed!' });
        })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params
    
    Recipe.getInstructions(id)
        .then(instr => {
            if (instr) {
                res.json(instr)
            } else {
                res.status(404).json({ message: 'Not found!' })
            }
        }).catch(err => {
            res.status(500).json({ message: 'Failed!' });
        })
})



module.exports = router;