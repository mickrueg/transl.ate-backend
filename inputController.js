const express = require('express');
const router = express.Router();
const Input = require('./Input');
const Test = require('./Test');


// router.get('/', async(req,res,next)=>{
//     try{
//         const inputs = await Input.find({});
//         res.json(inputs)
//     } catch(err){
//         next(err)
//     }
// })

router.post('/', async(req,res,next)=>{
    try{
        const newInput = await Input.create(req.body);
        res.send(req.body);
    } catch(err){
        next(err)
    }
})



module.exports = router;