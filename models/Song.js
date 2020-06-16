const { Schema, model } = require('mongoose')

const Song = new Schema ({
    title: String,
    artist: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Song', Song)