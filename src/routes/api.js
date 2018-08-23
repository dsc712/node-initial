const { Router } = require('express') ;
const app = Router({mergeParams : true}) ;
const api = require('../controllers/apiController') ;

app.get('/' , api.index ) ;
app.get('/users' , api.users ) ;

module.exports = app ;

