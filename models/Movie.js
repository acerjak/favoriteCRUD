const { Schema, model } = require('mongoose')

const Movie = new Schema ({
    title: String,
    genre: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Movie', Movie)