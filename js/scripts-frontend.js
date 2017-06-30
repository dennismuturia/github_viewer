var Gitname = require('./../js/scripts.js').nameModule;

$(document).ready(function() {
  $('form#githubname').submit(function(event) {
    event.preventDefault();
    var uname = $('#username').val();

    var nameObj = new Gitname(uname);

    console.log(nameObj.Apis());

    //console.log();
    nameObj.numRepos();
    //console.log(nameObj);
  });
});
