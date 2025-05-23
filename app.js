const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Customer'

const app = express()

app.listen(9000,function(req,res){
    console.log('server is up and running in port 9000')
})

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection
con.on('open',function(){
    console.log('database cvonnected')
})