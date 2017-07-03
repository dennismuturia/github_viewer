var Gitname = require('./../js/scripts.js').nameModule;

$(document).ready(function() {
  $('form#githubname').submit(function(event) {
    event.preventDefault();
    var uname = $('#username').val();

    var nameObj = new Gitname(uname);

    console.log(nameObj.Apis());

    nameObj.numRepos();
    $('#show-output').empty();
    $('#show-output1').empty();
    $('#show-output2').empty();
    $('#show-output3').empty();
    //console.log(nameObj);

  });
});
