const exprees = require('express');
const router = exprees.Router();
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
router.post('/', async (req, res) => {
    const addreference = new reference({
        referenceName:req.body.referenceName,
        referenceUrl:req.body.referenceImage,
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
})
module.exports = router