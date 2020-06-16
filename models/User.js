const { Schema, model } = require('mongoose')

const User = new Schema ({
    name: String,
    email: String,
    username: String,
    songs: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    foods: [{
        type: Schema.Types.ObjectId,
        ref: 'Food'
    }],
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    animals: [{
        type: Schema.Types.ObjectId,
        ref: 'Animal'
    }]
})

module.exports = model('User', User)
