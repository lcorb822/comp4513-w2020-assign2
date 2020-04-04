const mongoose = require('mongoose');
mongoose.set('debug', true);
// define a schema that maps to the structure of the data in MongoDB
const movieSchema = new mongoose.Schema({
  id:Number,
  tmdb_id:Number,
  imdb_id:String,
  release_date:String,
  title:String,
  runtime:Number,
  revenue:Number,
  tagline:String,
  poster:String,
  ratings: {
     average:Number,
     popularity:Number,
     count:Number
   }
  // details:{},
  // production:{}
});
module.exports = mongoose.model('Movie', movieSchema, 'movies');