const router = require('express').Router()
const { Game, User } = require('../models')

//GET all games
router.get('/games', (req, res) => {
    Game.find()
        .populate('author')
        .then(games => res.json(games))
        .catch(err => console.error(err))
})
// //GET one game
// router.get('/games/:id', (req, res) => {
//     Game.findById(req.params.id)
//         .then(game => res.json(game))
//         .catch(err => console.error(err))
// })
//POST one game
router.post('/games', (req, res) => {
    Game.create(req.body)
        .then(game => User.findByIdAndUpdate(req.body.author, {$push: {games: game._id} }))
        .then(() => res.sendStatus(200)) 
        .catch(err => console.error(err))
})
//PUT one game
// router.put('/games/:id', (req, res) => {
//     Game.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => res.sendStatus(200))
//         .catch(err => console.error(err))
// })
// //DELETE one game
// router.delete('/games/:id', (req, res) => {
//     Game.findByIdAndDelete(req.params.id, req.body)
//         .then(() => res.sendStatus(200))
//         .catch(err => console.error(err))
// })
module.exports = router