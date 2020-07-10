const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes=require('./Api/Routes/User');
const postRoutes=require('./Api/Routes/Post');
const commentRoutes=require('./Api/Routes/Comment');
const likeRoutes=require('./Api/Routes/Like');
const friendRoutes=require('./Api/Routes/Friend');

app.use(express.json());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use('/User',userRoutes);
app.use('/Post',postRoutes);
app.use('/Comment',commentRoutes);
app.use('/Like',likeRoutes);
app.use('/Friend',friendRoutes);

module.exports = app;

