var express = require('express')
  , api = express.Router()
  , request = require('request')
  , mcapi = require('mailchimp-api')
  , lsq  = require('lsq')
  , config
  , mc 

lsq.config.get().then(function(c){
  config = c
  mc = new mcapi.Mailchimp(config.api.mailchimp.token)
})

api.post('/demo/subscribe',function(req,res){
  
  if(!req.body.email || !req.body.source ){
     res.status(409)  
     return res.send({result:'Please make sure your email has been entered correctly.',error:true})
  }
  mc.lists.subscribe({ id: config.api.mailchimp.lists.demo, email: { email:req.body.email }, merge_vars: { SOURCE: req.body.source, TEAMSIZE: req.body.teamsize|| ""}, double_optin:false, send_welcome:false }, 
    function(data) {

      lsq.services.get('email').then(function(service){
        request.post('http://'+service+'/api/v1/subscribe/thankyou'
        ,{json:req.body}
        , function (error, response, body) {
          if(error) console.error("Can not reach email service")
        })
      })
      
       lsq.services.get('report').then(function(service){
          request.post('http://'+service+'/api/v1/add/subscriber/demo'
          ,{json:req.body}
          , function (error, response, body) {
            if(error) console.error("Can not reach report service")
          })
        })

      res.send({result:"Thanks for signing up! We'll keep you up to date."})
      console.log("successfully subscribed "+req.body.email)

    },
    function(error) {
      if (error.error) {
        if (error.code == 214)    {res.send({result:"Thanks for signing up! We'll keep you up to date."}); }
        else if(error.code == -100) { res.status(409);  res.send({result:'Please make sure your email has been entered correctly.',error:true}); }
        else { res.status(409);  res.send({result:'Please make sure your email has been entered correctly.',error:true}); }        

      } else { res.status(409); res.send({result:'There was an error subscribing your email, please try again.',error:true}); }      
    });
})

module.exports = api