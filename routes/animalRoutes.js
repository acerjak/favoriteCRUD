const router = require('express').Router()
const { Animal, User} = require('../models')

//GET all animals
router.get('/animals', (req, res) => {
    Animal.find()
    .populate('author')
    .then(animals => res.json(animals))
    .catch(err => console.error(err))
})

//GET one animal
// router.get('/animals/:id', (req, res) => {
//     Animal.findById(req.params.id)
//     .then(animal => res.json(animal))
//     .catch(err => console.error(err))
// })

//POST one animal and UPDATE user
router.post('/animals', (req, res) => {
    Animal.create(req.body)
    .then(animal => User.findByIdAndUpdate(req.body.author, {$push: {animals: animal._id} }))
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// //PUT one animal
// router.put('/animals/:id', (req, res) => {
//     Animal.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => res.sendStatus(200))
//         .catch(err => console.error(err))
// })

// //DELETE one animal
// router.delete('/animals/:id', (req, res) => {
//     Animal.findByIdAndDelete(req.params.id)
//         .then(() => res.sendStatus(200))
//         .catch(err => console.error(err))
// })

module.exports = router