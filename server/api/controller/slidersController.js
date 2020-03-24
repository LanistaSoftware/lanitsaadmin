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
    console.log(req.body)
    const sliders = await new slider({
        SliderOne:{
            imageurl:req.body.SliderOne.imageurlOne,
            title:req.body.SliderOne.titleOne,
            description:req.body.SliderOne.descriptionOne
        },
        SliderTwo:{
            imageurl:req.body.SliderTwo.imageurlTwo,
            title:req.body.SliderTwo.titleTwo,
            description:req.body.SliderTwo.descriptionTwo
        },
        SliderThree:{
            imageurl:req.body.SliderThree.imageurlThree,
            title:req.body.SliderThree.titleThree,
            description:req.body.SliderThree.descriptionThree
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