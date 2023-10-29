// Create web server

// Import express
const express = require('express');
const app = express();

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Import mongoose
const mongoose = require('mongoose');

// Import model
const Comment = require('./models/comment');

// Import router
const commentRouter = require('./routes/comments');

// Connect to database
mongoose.connect('mongodb://localhost:27017/express-comments', { useNewUrlParser: true }, function(err) {
    if (err) console.log(err);
    else console.log('Connect to database successfully!');
});

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Set static file
app.use(express.static('public'));

// Set router
app.get('/', function(req, res) {
    res.render('index');
});

app.use('/comments', commentRouter);

// Create web server
app.listen(3000, function(err) {
    if (err) console.log(err);
    else console.log('Server is listening at port 3000');
});
