
/**
 * Module dependencies.
 */
var express = require('express');
var hbs = require('handlebars');
var engines = require('consolidate');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(":memory:");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/template');
app.set('view engine', 'handlebars');
app.set("view options", { layout: false });
app.engine('.hbs', engines.handlebars); 

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', function(req, res) {
	today = new Date();
	month = today.getMonth()+1;
	today = today.getFullYear()+"年"+month+"月"+today.getDate()+"日";

        var data = {today:today};
        res.render("test.hbs", data);  //Use Extension here
});

app.post('/', function(req, res) {
	today = new Date();
	month = today.getMonth()+1;
	today = today.getFullYear()+"年"+month+"月"+today.getDate()+"日";

        var data = {today:today};
        res.render("test.hbs", data);  //Use Extension here
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
