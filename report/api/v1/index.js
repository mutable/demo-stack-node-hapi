var express = require('express')
  , api = express.Router()
  , request = require('request')
  , Keen    = require('keen.io')
  , lsq = require('lsq')
  , keenClient
  , config

lsq.config.get().then(function(c){
  config = c
  keenClient  = Keen.configure(c.api.keenio.config)
})

api.post('/add/subscriber/demo',function(req,res){
  keenClient.addEvent("newSubscriber", req.body, function(err, data) {
      if (err) console.error("Oh no, an error!",err)
      
      res.send({result:"success"})
    })
})

module.exports = api