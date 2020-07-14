const express = require('express');
const app = express();
const guestRouter = require('./middlewares/guests');

app.use(express.json());
app.use('/api/guest',guestRouter);

app.listen(3000);