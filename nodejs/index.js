const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/users', require('./routes/users'))

app.listen(3000, ()=>{
    console.log("Running at 3000")
})