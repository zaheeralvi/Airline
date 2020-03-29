const mongoose = require('mongoose');
const hotelSchema = mongoose.Schema({
  addHotelName: String,
  lastName: String,
  addHotelName: String,
  addHotelRating: String,
  addHotelCheckIN: String,
  addHotelCheckOut: String,
  addHotelAddress: String,
  addHotelPostalCode: String,
  addHotelCountry: String,
  addHotelState: String,
  addHotelCity: String,
  addHotelWebsite: String,
  addHotelDescription: String,
  addHotelCoverImage:String
});

const Hotel = module.exports = mongoose.model('hotel', hotelSchema);
module.exports.get = (callback, limit) => {
  Hotel.find(callback).limit(limit);
}
