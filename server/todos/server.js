var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

app.use(cors());


// View engine
app.set('views', path.join(__dirname,'views'));
app.set ('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/v1', todos);

app.listen(3000, function(){
    console.log('Server started on port 3000');
});
