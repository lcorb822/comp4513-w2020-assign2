const handleAllMovies = (app, Movie) => {
  app.route('/api/movies')
  .get(function (req,resp) {
  // use mongoose to retrieve all images from Mongo
  Movie.find({}, function(err, data) {
  if (err) {
  resp.json({ message: 'Unable to connect to movies' });
  } else {
  // return JSON retrieved by Mongo as response
  resp.json(data);
  }
  });
  });
 };

 const handleSingleMovie = (app, Movie) => {
  app.route('/api/movies/:id')
  .get(function (req,resp) {
  // use mongoose to retrieve all images from Mongo
  Movie.find({id: req.params.id}, function(err, data) {
  if (err) {
  resp.json({ message: 'Unable to connect to movies' });
  } else {
  // return JSON retrieved by Mongo as response
  resp.json(data);
  }
  });
  });
 };
 const handleTitleMovies = (app, Movie) => {
  app.route('/api/find/title/:sub')
  .get(function (req,resp) {
  // use mongoose to retrieve all images from Mongo
  Movie.find({title:{$regex : req.params.sub}}, function(err, data) {
  if (err) {
  resp.json({ message: 'Unable to connect to movies' });
  } else {
  // return JSON retrieved by Mongo as response
  resp.json(data);
  }
  });
  });
 };
 const handleYears = (app, Movie) => {
  app.route('/api/find/year/:y1/:y2')
  .get(function (req,resp) {
  // use mongoose to retrieve all images from Mongo
  Movie.find({ $and: [ {release_date:{$gt: req.params.y1}}, {release_date:{$lt: req.params.y2}}]}, function(err, data) {
  if (err) {
  resp.json({ message: 'Unable to connect to movies' });
  } else {
  // return JSON retrieved by Mongo as response
  resp.json(data);
  }
  });
  });
 };
 const handleRatings = (app, Movie) => {
  app.route('/api/find/rating/:r1/:r2')
  .get(function (req,resp) {
  // use mongoose to retrieve all images from Mongo
  Movie.find({ $and: [ {'ratings.average':{$gt: req.params.r1}}, {'ratings.average':{$lt: req.params.r2}}]}, function(err, data) {
  if (err) {
  resp.json({ message: 'Unable to connect to movies' });
  } else {
  // return JSON retrieved by Mongo as response
  resp.json(data);
  }
  });
  });
 };

module.exports = {
  handleAllMovies,
  handleSingleMovie,
  handleTitleMovies,
  handleYears,
  handleRatings
};