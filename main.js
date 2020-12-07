var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('port', process.argv[2]);

app.use('/', express.static('public'));

app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/projects.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/contact.html'));
});


app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});