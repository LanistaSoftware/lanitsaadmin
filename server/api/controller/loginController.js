const exprees = require('express');
const router = exprees.Router();
const User = require('../models/usermodel');
const bcrypt= require('bcrypt')


router.post('/', async (req, res) => {
    try {
    
       await User.findOne({email:req.body.email}).then((user)=>{
        if (user==null) {
            res.status(200).json('Giriş Başarısız')
        }else{
            const pass =  user.Password
       
              bcrypt.compare(req.body.Password, pass,  function(err, result) {
                 if (result) {
                  res.status(200).json('Giriş Başarılı');
                 }else if (!result){
                  res.status(200).json('Şifre Yanlış');
                 }else{
                  res.status(402).json(res.statusMessage);
                 }
              })
              
        }
       })
      
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

module.exports = router