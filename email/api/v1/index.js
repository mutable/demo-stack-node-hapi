var express = require('express')
  , api = express.Router()
  , request = require('request')
  , sendgrid = require('sendgrid')
  , lsq = require('lsq')
  , sq
  , config

lsq.config.get().then(function(c){
  config = c
  sg  = sendgrid(c.api.sendgrid.apiUser, c.api.sendgrid.apiKey)
})

api.post('/subscribe/thankyou',function(req,res){
  sg.send({
    to:       req.body.email,
    from:     'i@lsq.io',
    subject:  'Thanks for subscribing (LSQ)',
    text:     'We would like to thank you for subscribing to our newsletter and participating in our live demo visit us at http://www.lsq.io'
  }, function(err, json) {

    if (err) { 
      res.send(422,{err:err,result:"Problem with sending email"})
      return console.error(err)
    }
    
    res.send({result:"sent thank you email to "+req.body.email})
  
  })
})

module.exports = api