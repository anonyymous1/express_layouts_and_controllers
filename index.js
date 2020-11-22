// import stuff
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

const favesController = require('./controllers/favesController')
const hatesController = require('./controllers/hatesController')

app.set('view engine','ejs')
app.use(ejsLayouts);

//create at least one route
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/hates', hatesController)  
app.use('/faves', favesController)  


//app.listen (Turn on)
app.listen(8000, ()=> {
    console.log('Server has started!');
});
