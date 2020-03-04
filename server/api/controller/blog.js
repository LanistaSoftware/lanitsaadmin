const exprees= require('express');
const mongodb =require('mongodb');
const mongoose = require('mongoose')
const router = exprees.Router();
const makale = require('../models/makaleschema')

router.get('/:blogid',async (req,res)=>{
    const post = await makale.find({_id:new mongodb.ObjectId(req.params.blogid)});
    res.status(200).json({post});
})
router.post('/',async (req,res)=>{
    const newmakale= await new makale({
        user:'serkan',
        title:'lorem',
        content:'asdasd',
        image:'1.jpg'
    }
    )
  try {
      const makale =await newmakale.save();
      res.status(201).json({makale})
  } catch (error) {
      res.status(400).json({message:error.message})
  }
})

module.exports=router