const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Datadna')
.then(() => console.log('Succesfully Connected!'));

const Course = require('./model')