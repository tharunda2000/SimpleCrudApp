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

router.post('/',async (req,res)=>{

    const customer = new Customer({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            member: req.body.member,
        })  

    try{

        const a1 = await customer.save()
        res.json(a1)

         

    }catch(err){
        res.send('error'+err)
    }
})

module.exports = router