
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , tooBusy = require('toobusy-js')
  , request = require('request')
  , lsq = require('lsq')


var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(require('less-middleware')(__dirname + '/public'));
  //app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  })
})

app.post('/api/v1/subscribe',function(req,res){
  lsq.services.get('subscribe')
    .then(function(service){
     request.post('http://'+service+'/api/v1/demo/subscribe'
          ,{json:req.body}
          , function (error, response, body) {
            if(error) console.error('can not reach subscribe service')
            res.send(body)
          })
   })
})

app.get('/test', function(req, res) {
  var i = 0;
  while (i < 1e9) i++;
  res.send("I counted to " + i);
})

app.get('/health',function(req,res){
  res.send(tooBusy.lag()+"")
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

