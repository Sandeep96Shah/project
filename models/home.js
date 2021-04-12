//adding the library mongoose
const mongoose = require('mongoose');

//setting up the schema
const homeSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

//setting the name for collection
const ToDo = mongoose.model('List-A',homeSchema);

//exporting 
module.exports = ToDo;