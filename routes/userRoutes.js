const router = require('express').Router()
const { User } = require('../models')

//get one user
router.get('/user/:id', (req, res) => {
    User.findById(req.params.id)
        .populate('songs')
        .populate('movies')
        .populate('games')
        .populate('foods')
        .populate('books')
        .populate('animals')
        .then(user => res.json(user))
        .catch(err => console.error(err))
})
//post one user
router.post('/user', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => console.error(err))
})

module.exports = router