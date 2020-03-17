const exprees= require('express');
const router = exprees.Router();
const User = require('../models/usermodel');


router.get('/',async (req,res)=>{
    try{
        const users = await User.find({});
        res.status(200).json({users});
    }catch(error){
        res.json({message:error.message})
    }
})
router.delete('/:id',async (req,res)=>{
    try {
        const users = await User.deleteOne({_id: req.params.id})
        res.json({users});
    } catch (error) {
        res.json({message:error.message})
    }
})
router.post('/',async (req,res)=>{
    const user= await new User({
        Name:req.body.name,
        LastName:req.body.surname,
        email:req.body.email,
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
router.put('/:id',async (req,res)=>{
    try {
        const users = await User.updateOne({_id:req.params.id}, {$set:{ 
            Name:req.body.Name,
            LastName:req.body.LastName,
            email:req.body.email,
            Phone:req.body.Phone,  
            isAdmin:req.body.isAdmin }})
        res.json({users});
    } catch (error) {
        res.json({message:error.message})
    }
})

module.exports=router