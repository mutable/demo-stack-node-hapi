  var sendMarkdown =  require('./sendMarkdown')
  
  var homePage = function(req, res){
    res.render('index', {
   	 title: 'Home'
  	})
  }

  module.exports = homePage