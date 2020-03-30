const exprees = require('express');
const router = exprees.Router();
const multer = require('../middleware/multer')
const reference = require('../models/referencesSchema');

router.get('/', async (req, res) => {
    try {
        const references = await reference.find({});
        res.status(200).json({
            references
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})
router.post('/',async (req, res) => {
    const addreference = new reference({
        referenceName:req.body.referenceName,
        referenceUrl:req.body.referenceUrl,
        imageUrl:req.body.referenceImage
    })
    console.log(req.body)
    try {
        
        addreference.save()
                 res.status(201).json({
                    addreference
                 });
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}),
router.delete('/:id',async (req,res)=>{
    try{
        await reference.deleteOne({_id:req.params.id})
        res.status(200).json(res.statusCode)
    }
    catch(err){
        console.log(err)
    }
})
router.post('/image',multer.saveToUploadsReference,async (req, res) => {
    try {
    
     res.status(201).json(res)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}),
module.exports = router