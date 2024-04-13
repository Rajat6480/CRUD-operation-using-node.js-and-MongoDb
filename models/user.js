const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required : true,
    },
    lastName: {
        type:String,
    },
    gender:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
},{timestamps:true})

const User = mongoose.model("user",userSchema);

module.exports = User;