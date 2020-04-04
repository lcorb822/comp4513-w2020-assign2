const connectionString = 'mongodb+srv://lcorb:bcWrvNcFx01UmP2I@nodelab2-zdp8o.mongodb.net/assignment2?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const connect = () => {
 const opt = {
 useUnifiedTopology: true,
 useNewUrlParser: true
 };
 mongoose.connect(connectionString, opt);
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function callback () {
 console.log("connected to mongo");
 });
};
module.exports = {
  connect
 };