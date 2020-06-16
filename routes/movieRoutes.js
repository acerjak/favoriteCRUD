const router = require('express').Router()
const { Movie, User } = require('../models')

//GET all movies
router.get('/movies', (req, res) => {
    Movie.find()
        .populate('author')
        .then(movies => res.json(movies))
        .catch(err => console.error(err))
})
//GET one movie
// router.get('/movies/:id', (req, res) => {
//     Movie.findById(req.params.id)
//         .then(movie => res.json(movie))
//         .catch(err => console.error(err))
// })
//POST one movie
router.post('/movies', (req, res) => {
    Movie.create(req.body)
        .then(movie => User.findByIdAndUpdate(req.body.author, {$push: {movies: movie._id} }))
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err))
})
//PUT one movie
// router.put('/movies/:id', (req, res) => {
//     Movie.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => res.sendStatus(200))
//         .catch(err => console.error(err))
// })
// //DELETE one movie
// router.delete('/movies/:id', (req, res) => {
//     Movie.findByIdAndDelete(req.params.id, req.body)
//         .then(() => res.sendStatus(200))
//         .catch(err => console.error(err))
// })
module.exports = router