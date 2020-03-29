const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//const path = require('path');
// const fs = require('fs');
// const dirPath = path.join(__dirname, '/uploads');
const app = express();
const postRouters = require("./routes/posts");
const userRouters = require("./routes/user");
const hotelRoutes = require("./routes/hotel");

const uploadRoutes = require('./routes/upload');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

mongoose.connect('mongodb+srv://max:61m1xwExmngbWpw3@cluster0-vsafj.mongodb.net/node-angular', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accpect, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});




app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api/posts', postRouters);
app.use('/api/user', userRouters);

app.use('/api/hotels', hotelRoutes);

app.use('/api/uploads', uploadRoutes)
module.exports = app;
