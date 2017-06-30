var Gitname = require('./../js/scripts.js').nameModule;
//var apikey = require('./../.env').apikey

$(document).ready(function() {
  $('form#githubname').submit(function(event) {
    event.preventDefault();
    var uname = $('#username').val();
    
    var nameObj = new Gitname(uname);
    //console.log(nameObj.Apis());
    nameObj.Apis();
    //console.log(nameObj);
  });
});
