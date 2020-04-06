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
// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

// get our data model
const Movie = require('./models/Movie');
const Brief = require('./models/Brief');
const Favorite = require("./models/Favorite");
// tell node to use json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
// for root requests, render the index.pug view
// app.get('/', function (req, res) {
//   res.render('index', { title: 'Node 2 Lab',
//   heading: 'Sample Pug File' })
//  });
 // set up route handlers
const briefRouter = require('./handlers/briefRouter.js');
const movieRouter = require('./handlers/movieRouter.js');
const favoriteRouter = require('./handlers/favoriteRouter.js');
favoriteRouter.handleAllFavorites(app,Favorite);
briefRouter.handleAllBriefs(app, Brief);
movieRouter.handleAllMovies(app,Movie);
movieRouter.handleSingleMovie(app,Movie);
movieRouter.handleTitleMovies(app,Movie);
movieRouter.handleYears(app,Movie);
movieRouter.handleRatings(app,Movie);

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
 
 });

let port =process.env.PORT || 8080;
app.listen(port, function () {
 console.log("Server running at port= " + port);
});