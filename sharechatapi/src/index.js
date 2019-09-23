const express = require('express');
const logger = require('morgan');
const userRoutes = require('./routes/user.routes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = 3000;

const app = express();


dotenv.config();

app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/',userRoutes);
app.listen(port,()=>{
    return console.log(port);
});