const express = require('express');
const logger = require('morgan');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 3000;

const app = express();

mongoose.connect("mongodb://localhost:27017/shareCamp", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected!");
    })
    .catch((err) => {
        console.error("Error while connecting to Database: ", err);
    });

dotenv.config();

app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', userRoutes);
app.use('/', productRoutes);

app.listen(port, () => {
    return console.log(port);
});