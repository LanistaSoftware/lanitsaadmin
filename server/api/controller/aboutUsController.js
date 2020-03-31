const exprees = require('express');
const router = exprees.Router();
const multer = require('../middleware/multer')
const aboutUs = require('../models/aboutUsSchema')
const fs = require('fs')
router.get('/',async (req,res)=>{
    try {
        const aboutUsContent = await aboutUs.find({})
        res.status(200).json({aboutUsContent})
    } catch (error) {
        console.log(error)
    }
})
router.post('/',async (req,res)=>{
    const size = await (await aboutUs.find({}))
    try {
        if(size.length>0){
        let img =  size[0].imgUrl
          await  fs.unlink('src/assets/upload/'+img, function (err) {
                if (err) throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            }); 
            await aboutUs.deleteMany({})
            
            const add =await new aboutUs({
                content:req.body.aboutcontent,
                imgUrl:req.body.imgUrl
            })
            await add.save()
            res.status(201).json({add})
        }else{
            const add =await new aboutUs({
                content:req.body.aboutcontent,
                imgUrl:req.body.imgUrl
            })
            await add.save()
            res.status(201).json({add})
            
        }
    } catch (error) {
        console.log(error)
    }
})
router.post('/image',multer.saveToUploadsReference,async (req,res)=>{
    try {
        res.status(201).json('Ok')
    } catch (error) {
        console.log(error)
    }
})
module.exports = router