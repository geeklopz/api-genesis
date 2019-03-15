const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/breeze', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
