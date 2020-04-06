const handleAllBriefs = (app, Brief) => {
  app.route('/api/brief')
  .get(function (req,resp) {
  // use mongoose to retrieve all images from Mongo
  Brief.find({}, function(err, data) {
  if (err) {
  resp.json({ message: 'Unable to connect to briefs' });
  } else {
  // return JSON retrieved by Mongo as response
  resp.json(data);
  }
  });
  });
 };
 module.exports = {
   handleAllBriefs
 }