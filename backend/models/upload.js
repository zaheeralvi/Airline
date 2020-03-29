var mongoose = require('mongoose');



var photoSchema = new mongoose.Schema({
  path: {
    type: String
  }
});

module.exports = mongoose.model('Uploads', photoSchema);
