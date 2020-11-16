// import stuff
const express = require('express')
const app = express()


//create at least one route
app.get('/', (req, res) => {
    res.send('This is working!');
});


//app.listen (Turn on)
app.listen(8000, ()=> {
    console.log('Server has started!');
});