const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");
const User = require("../models/user");
const node_cryptojs = require('node-cryptojs-aes');
const Crypto = node_cryptojs.CryptoJS;
const router = express.Router();

router.post("/signup", (req, res, next) => {
  //const pwd = CryptoJS.AES.decrypt(req.body.password, "my secreate key 369");
  //const password = pwd.toString(CryptoJS.enc.Utf8);
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  //console.log(req.body.password);
  //   const pwd = Crypto.AES.decrypt(req.body.password, "my secreate key 369");
  //   console.log(pwd);
  // const _password = pwd.toString(Crypto.enc.Utf8);
  // console.log(_password);
  let fetchedUser;
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed 1"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed 2"
        });
      }
      const token = jwt.sign({
          email: fetchedUser.email,
          userId: fetchedUser._id
        },
        "secret_this_should_be_longer", {
          expiresIn: "1h"
        }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId:fetchedUser._id,
        email:fetchedUser.email

      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed 3"
      });
    });
});

module.exports = router;
