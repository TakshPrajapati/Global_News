const mongoose = require('mongoose')



var courseSchema = mongoose.Schema({
    courseName : {
        type : String,
        required : 'Required'
    },
    courseId : {
        type : String,
        required : 'Required'
    },
    courseDept : {
        type : String
    },
    courseFee : {
        type : String,
        required : 'Required'
    }
})

mongoose.model("Course", courseSchema)