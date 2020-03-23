const exprees = require('express');
const router = exprees.Router();
const slider = require('../models/slidersSchema');


router.get('/', async (req, res) => {
    try {
        const sliders = await slider.find({});
        res.status(200).json({
            sliders
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const sliders = await slider.deleteOne({
            _id: sliders
        })
        res.json({
            sliders
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})
router.post('/', async (req, res) => {
    const slider = await new slider({
        sliderOne:{
            imageurl:req.body.imageurlOne,
            title:req.body.titleOne,
            description:req.body.descriptionOne
        },
        sliderTwo:{
            imageurl:req.body.imageurlTwo,
            title:req.body.titleTwo,
            description:req.body.descriptionTwo
        },
        sliderThree:{
            imageurl:req.body.imageurlThree,
            title:req.body.titleThree,
            description:req.body.descriptionThree
        },
    })
    try {
        const slideradd = await slider.save();
        res.status(201).json({
            slideradd
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})
router.put('/:id', async (req, res) => {
    try {
        const sliders = await slider.updateOne({
            _id: req.params.id
        }, {
            $set: {
                sliderOne:{
                    imageurl:req.body.imageurlOne,
                    title:req.body.titleOne,
                    description:req.body.descriptionOne
                },
                sliderTwo:{
                    imageurl:req.body.imageurlTwo,
                    title:req.body.titleTwo,
                    description:req.body.descriptionTwo
                },
                sliderThree:{
                    imageurl:req.body.imageurlThree,
                    title:req.body.titleThree,
                    description:req.body.descriptionThree
                },
            }
        })
        res.json({
            sliders
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

module.exports = router