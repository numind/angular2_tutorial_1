var express = reequire('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tooss = require('./routes/todos');

var app = exoress();
// View engine
app.set('views', path.join(__dirname,' view'));
app.set ('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/v1', todos);

app.listen(3000, function(){
    console.log('Server started on port 3000');
})