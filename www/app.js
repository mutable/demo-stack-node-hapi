
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , request = require('request')
  , lsq = require('lsq')
  , tools = require('./tools')


var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, '/views'));
  app.set('view engine', 'jade');
  app.use(require('less-middleware')(path.join(__dirname, '/public')));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/',tools.homePage)
app.get('/test',tools.test)
app.get('/health',tools.healthCheck)
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

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

