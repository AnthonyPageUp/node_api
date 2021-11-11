const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');

const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false)

app.use(bodyParser.json());
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Serveur started: 5500'));