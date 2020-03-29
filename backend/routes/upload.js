const express = require('express');
let router = express.Router();
const multer = require('multer');
const Uploads = require('../models/upload');
const LOCAL_PATH = './public/uploads';
const path = require('path');
const  os = require('os');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, LOCAL_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

let upload = multer({
  storage: storage
});

router.post('', upload.single('image'), function (req, res) {
  if (!req.file) {
    console.log("No file is available!", req.file);
    return res.send({
      success: false
    });

  } else {
    console.log('File is available!');
    console.log(req.headers.host)
    const fullPath = "/uploads/" + req.file.filename;
    console.log(fullPath)

    var document = {
      path: fullPath
    };

    var image = new Uploads(document);
    image.save(function (error) {
      if (error) {
        throw error;
      }
    });
    return res.send({
      success: true,
      path:fullPath
    })
  }
});

module.exports = router;
