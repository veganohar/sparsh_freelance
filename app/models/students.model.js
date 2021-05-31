const mongoose = require("mongoose");

const Student = mongoose.model(
    'Student',
    new mongoose.Schema({
        name:String,
        phone:Number,
        father_name:String,
        grade:Number,
        city:String,
        createdOn:{
            type:Date,
            default:Date.now
        }        
    })
)

module.exports = Student;