//mongoDb is used as a database
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true,})
.then(() => {
    console.log("Connected to the mongoose atlas!");
})
.catch((error)=>console.log("Cannot connect to the database!",error.message));
