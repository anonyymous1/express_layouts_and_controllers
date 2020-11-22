const hatesController = require('express').Router()

    hatesController.get('/animals', (req, res) => {
    const badAnimals = ['roaches','cow ','pig','dog','cat']
    res.render('hateAnimals', { badAnimals })
})

    hatesController.get('/foods', (req, res) => {
    const badFoods = ['sandwich','liver','escargo']
    res.render('hateFoods', { badFoods })
})


module.exports = hatesController