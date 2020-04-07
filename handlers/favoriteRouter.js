const handleGetFavorites = (app, Favorite) => {
  app.route('/api/favorites')
  .get(function (req,resp) {
  // use mongoose to retrieve all images from Mongo
  Favorite.find({}, function(err, data) {
  if (err) {
  resp.json({ message: 'Unable to connect to favorites' });
  } else {
  // return JSON retrieved by Mongo as response
  resp.json(data);
  }
  });
  });
  
};
const handlePostFavorite = (app,Favorite) =>{
  app.route('/api/favorites')
  .post(function (req,resp) {
    // retrieve the form data from the http request
    const newFav = req.body;
    Favorite.create(newFav,function(err,data) {
      if (err) {
        resp.json({ message: 'Unable to connect to favorites' });
        } else {
        const msg = `New Favorite was saved
        id=${newFav.id}`;
        resp.json({ message: msg });
    }
  });

 });
}
 module.exports = {
   handleGetFavorites,
   handlePostFavorite
 }