const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')

router.get('/',async (req,res)=>{
    
    try{

        const customers = await Customer.find()
        res.json(customers)

    }catch(err){
        res.send('error'+err)
    }
    
})

module.exports = router