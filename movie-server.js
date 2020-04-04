const express = require('express');
const parser = require('body-parser');
// create connection to database
require('./handlers/dataConnector.js').connect();
// create an express app
const app = express();

// /* --- middleware section --- */
// // serves up static files from the public folder.
// app.use(express.static('public'));
// // also add a path to static
// app.use('/static', express.static('public'));
// // convert raw requests into usable data


// get our data model
const Movie = require('./models/Movie');
// tell node to use json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
// for root requests, render the index.pug view
// app.get('/', function (req, res) {
//   res.render('index', { title: 'Node 2 Lab',
//   heading: 'Sample Pug File' })
//  });
 // set up route handlers
// use the route handlers
const movieRouter = require('./handlers/movieRouter.js');
movieRouter.handleAllMovies(app,Movie);
movieRouter.handleSingleMovie(app,Movie);
movieRouter.handleTitleMovies(app,Movie);
movieRouter.handleYears(app,Movie);
movieRouter.handleRatings(app,Movie);
// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
 });

let port = 8080;
app.listen(port, function () {
 console.log("Server running at port= " + port);
});