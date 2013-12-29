var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	exphbs  = require('express3-handlebars');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.animals);
app.get('/animals', routes.animals);
app.get('/animal/:name', routes.animal_by_name);
app.get('/animal/:name/speak', routes.animal_by_name);

// api routes
app.get('/v1/animals', routes.animals);
app.get('/v1/animal/:name', routes.animal_by_name);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
