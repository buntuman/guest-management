const express = require('express');
const mongoose = require('mongoose');
const app = express();
const guestRouter = require('./middlewares/guests');
require('dotenv/config');

app.use(express.json());
app.use('/api/guest',guestRouter);

// connect to database
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true,useUnifiedTopology: true },() => console.log('connected to db. Code is : '+mongoose.connection.readyState));

app.listen(3000);