module.exports = require('mongoose').connect('mongodb://localhost/FavoriteDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})