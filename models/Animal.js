const { Schema, model } = require('mongoose')

const Animal = new Schema ({
    type: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Animal', Animal)