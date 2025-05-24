const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CustomerDB'

const app = express()

app.listen(9000,(req,res)=>{
    console.log('server running...')
})


mongoose.connect(url)

const con = mongoose.connection
con.on('open',()=>{
    console.log('database connected ....')
})

//routes

//customer route
const customerRouter = require('./routers/customers')
app.use('/customers',customerRouter)