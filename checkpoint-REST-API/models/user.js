const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
name:{
    type:String,
    required : true
},
email:{
    type : String,
    required : true
},
age : String,
gender : String

})

module.exports = mongoose.model ("User",userSchema);
