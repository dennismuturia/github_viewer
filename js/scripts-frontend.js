var Gitname = require('./../js/scripts-frontend.js').transName;
$(document).ready(function(){
  $('form#githubname').submit(function(event){
    var uname = $('#username').val();

    var nameObj = new Gitname(uname);
  });
});
