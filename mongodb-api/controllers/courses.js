const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const courseModel = mongoose.model("Course")


router.get('/add', (req, res)=>{
    res.render("add")
})

router.post('/add', (req, res)=>{
 console.log(req.body)

var Course = new courseModel();
 Course.courseName=req.body.courseName;
 Course.courseId=req.body.courseId;
 Course.courseDept =req.body.courseDept;
 Course.courseFee=req.body.courseFee
 Course.save()
   .then((err)=>{
    res.redirect("/course/list")
    console.log(err )

   })
        
})

router.get('/list', (req, res) =>{
    courseModel.find()
    // .exec(function(err, docs){
    //         console.log(docs)
    //         res.render('list', {data : docs})
        
    // })
    .then(docs =>{
        res.render('list', {data : docs.map(doc =>doc.toJSON())})
        console.log(docs)
    })
    
})

module.exports = router;