const db = require("../models");
const Student = db.student;

exports.saveNewStudent = (req,res)=>{
    let data = req.body;
    let student = new Student();
    for(let p in data){
        student[p] = data[p];
    }
    student.save((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            message:"Student saved Successfully",
            data:response
        })
    })
} 