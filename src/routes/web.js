const { Router } = require('express');
const app = Router({mergeParams : true}) ;
const home = require('../controllers/homeController');


app.get('/', home.index);
app.get('/firstPage' , home.firstPage ) ;
app.get('/secondPage' , home.secondPage) ;


module.exports = app ;