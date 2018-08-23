const routemsg = require('debug')('app:routes') ;

exports.index = (req , res) => {
    routemsg("index route of api called") ;
    res.render("home" , {page : "/api/" , req : req } ) ;

}

exports.users = (req , res ) => {
    routemsg("users route of api called") ;
    res.render("home" , {page: "/api/users" , req : req }) ;
}