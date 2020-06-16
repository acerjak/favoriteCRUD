const router = require('express').Router()
const { Book, User } = require('../models')

//GET all books
router.get('/books', (req, res) => {
    Book.find()
        .populate('author')
        .then(books => res.json(books))
        .catch(err => console.error(err))
})
//GET one book
// router.get('/books/:id', (req, res) => {
//     Book.findById(req.params.id)
//         .then(book => res.json(book))
//         .catch(err => console.error(err))
// })
//POST one book
router.post('/books', (req, res) => {
    Book.create(req.body)
        .then(book => User.findByIdAndUpdate(req.body.author, {$push: {books: book._id} }))
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err))
})
//PUT one book
// router.put('/books/:id', (req, res) => {
//     Book.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => res.sendStatus(200))
//         .catch(err => console.error(err))
// })
// //DELETE one book
// router.delete('/books/:id', (req, res) => {
//     Book.findByIdAndDelete(req.params.id, req.body)
//         .then(() => res.sendStatus(200))
//         .catch(err => console.error(err))
// })
//export routes to index
module.exports = router