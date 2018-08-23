const routemsg = require('debug')('app:routes') ;

exports.index = (req, res) => {
    routemsg("index route of web is called ") ;
    res.render('home' , {page : "/" , req : req });
}

exports.firstPage = (req , res ) => {
    routemsg("firstPage route of web is called ") ;
    res.render('home' , {page : "/firstPage" , req : req }) ;
}

exports.secondPage = (req , res) => {
    routemsg("secondPage route of web is called ") ;
    res.render('home' , {page : "/secondPage" , req : req }) ;
}
