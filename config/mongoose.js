//adding the mongoose library
const mongoose = require('mongoose');

//setting up the connection
mongoose.connect('mongodb://localhost/MERA-TODO-LIST');

//acquiring the connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error while connecting to database'));

//successful
db.once('open',function(){
    console.log('successfully connected to the database');
});