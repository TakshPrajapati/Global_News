const connection = require('./model')
const express = require('express')
const app = express()
const path = require('path')
const expressHandlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const Course = require('./controllers/courses')

app.use(bodyparser.urlencoded({
    extended : true
}))

app.set('views', path.join(__dirname,'/views/'))

app.engine('hbs', expressHandlebars.engine({
    extname : "hbs",
    defaulLayout : "main",
    layoutsDir : __dirname + "/views/layouts"
}))

app.set("view engine", "hbs")

app.get('/', (req, res) =>{
    // res.send("<h1>Hello world</h1>")
    res.render("index", {})
})

app.use("/course", Course)

app.listen("3000", ()=>{
    console.log("Running in 3000")
})