const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = new mongoose.Schema({
    name : {
        type : String ,
        required : true,
        minlength : 3
    },
    email : {
        type  : String ,
        required : true,
        unique : true 
    },
    phone : {
        type : String
    },
    company : {
        type : String
    },
    website : {
        type : String
    },
    businessType : {
        type : String
    },
    budget : {
        type  : String
    },
    projectDetails : {
        type : String
    },
    createdat : {
        type : Date ,
        default : Date.now()
    },
    roles : {
        type : String ,
        default : "user"
    }
})

User.pre("save" ,  async function () {

    console.log("")
})

module.exports = mongoose.model("Digipro" , User)
