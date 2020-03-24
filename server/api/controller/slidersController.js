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
router.get('/:id', async (req, res) => {
    try {
        const sliders = await slider.findOne({_id:req.params.id});

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
    console.log(req.body)
    const sliders = await new slider({
        SliderOne:{
            imageurlOne:req.body.SliderOne.imageurlOne,
            titleOne:req.body.SliderOne.titleOne,
            descriptionOne:req.body.SliderOne.descriptionOne
        },
        SliderTwo:{
            imageurlTwo:req.body.SliderTwo.imageurlTwo,
            titleTwo:req.body.SliderTwo.titleTwo,
            descriptionTwo:req.body.SliderTwo.descriptionTwo
        },
        SliderThree:{
            imageurlThree:req.body.SliderThree.imageurlThree,
            titleThree:req.body.SliderThree.titleThree,
            descriptionThree:req.body.SliderThree.descriptionThree
        },
    })
    try {
        const slideradd = await sliders.save();
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