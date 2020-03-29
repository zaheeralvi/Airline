const router = require('express').Router();   
const hotelController = require('../controller/hotelController');
const checkAuth = require('../middleware/check-auth');

router.route('/', checkAuth)
    .get(hotelController.index)
    .post(hotelController.new);
    
router.route('/:hotel_id')
    .get(hotelController.view)

module.exports = router;
