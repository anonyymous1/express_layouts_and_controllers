const favesController = require('express').Router()


favesController.get('/animals', (req, res) => {
    const animals = ['giraffe', 'aligator', 'peacock', 'unicorn']
    res.render('favAnimals', { animals })
})

favesController.get('/foods', (req, res) => {
    const foods = ['Ramen','Tacos','Pizza','Wings']
    res.render('favFoods', { foods })
})

module.exports = favesController