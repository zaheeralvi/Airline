const Hotel = require('../models/hotel');

//GET ALL
exports.index = async (req, res) => {
  try {
    const results = await Hotel.find();
    res.status(200).json({
      data: results
    });
  } catch (err) {
    res.status(400).res.json({
      message: err
    });
  }
};

//NEW
exports.new = async (req, res) => {
  let hotel = new Hotel();
  hotel.addHotelName = req.body.addHotelName;
  hotel.lastName = req.body.lastName;
  hotel.addHotelName = req.body.addHotelName;
  hotel.addHotelRating = req.body.addHotelRating;
  hotel.addHotelCheckIN = req.body.addHotelCheckIN;
  hotel.addHotelCheckOut = req.body.addHotelCheckOut;
  hotel.addHotelAddress = req.body.addHotelAddress;
  hotel.addHotelPostalCode = req.body.addHotelPostalCode;
  hotel.addHotelCountry = req.body.addHotelCountry;
  hotel.addHotelState = req.body.addHotelState;
  hotel.addHotelCity = req.body.addHotelCity;
  hotel.addHotelWebsite = req.body.addHotelWebsite;
  hotel.addHotelDescription = req.body.addHotelDescription;
  hotel.addHotelCoverImage=req.body.addHotelCoverImage;

  try {
    const newSubscriber = await hotel.save()
    res.status(201).json(newSubscriber)
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
};

exports.view = function (req, res) {
  const listOfIds = req.params.hotel_id.split(',');
    Hotel.find({_id:{$in:listOfIds}}, function (err, hotel) {
      if (err)
          res.send(err);
      res.json({
          message: 'hotel details loading..',
          data: hotel
      });
  });
};
