const exprees= require('express');
const router = exprees.Router();
const User = require('../models/usermodel');

router.get('/',async (req,res)=>{
    const post = await makale.find({});
    res.status(200).json({post});
})
router.post('/',async (req,res)=>{
    const user= await new User({
        Name:req.body.name,
        LastName:req.body.surname,
        email:req.body.surname,
        Phone:req.body.phone,  
        isAdmin:req.body.isAdmin
    }
    )
  try {
      const useradd =await user.save();
      res.status(201).json({useradd})
  } catch (error) {
      res.status(400).json({message:error.message})
  }
})

module.exports=router