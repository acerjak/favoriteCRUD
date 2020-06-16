const { Schema, model } = require('mongoose')

const Book = new Schema ({
    title: String,
    genre: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Book', Book)