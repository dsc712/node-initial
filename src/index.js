const express = require('express'),
    config = require('./config'),
    debug = require('debug')('app:server'),
    path  = require('path') ,
    { web, api } = require('./routes');

const app = express();

app.use(express.static( path.join(__dirname , 'public'))) ;
app.set("view engine" , "ejs" ) ;
app.use(web);
app.use('/api', api);


app.listen(config.app.port, () => {
    debug('Listening on port: %s', config.app.port);
});