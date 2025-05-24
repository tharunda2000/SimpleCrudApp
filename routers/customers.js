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

router.get('/:id',async (req,res)=>{

    try{

        const customer = await Customer.findById(req.params.id)
        res.json(customer)

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

router.patch('/:id',async(req,res)=>{
    try{

        const customer = await Customer.findById(req.params.id)
        customer.member = req.body.member
        const a1 = await customer.save()
        res.json(a1)

    }catch(err){
        res.send('Error'+err)
    }
})

module.exports = router