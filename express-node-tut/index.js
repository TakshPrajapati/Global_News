var express=require('express')
var app=express()

app.get('/',(req,res)=>{
    res.send("Hello There")
})
var server= app.listen(8000,function(){
    var address = server.address().address
    var port = server.address().port

    console.log("this app is running",address,port )
})