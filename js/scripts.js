var apikey = require('./../.env').apiKey;

function Gitname(name) {
  this.name = name;
}
Gitname.prototype.Apis = function() {
  if (this.name != '') {
    $.get('https://api.github.com/users/' + this.name + '?access_token=' + apikey).then(function(response) {

      $('.show-output').append('<img class="center2" src="' + response.avatar_url + '">');
      $('.show-output').text();
      $('.show-output1').append('<h3 class="center">Name: ' + ' ' + response.name + "</h3>");
      $('.show-output1').text();
      $('.show-output2').append('<h3 class="center">Followers: ' + ' ' + response.followers + "</h3>");
      $('.show-output2').text();
      $('.show-output3').append('<h3 class="center">Following:' + ' ' + response.following + "</h3>");
      $('.show-output3').text();
      $('.show-output4').append('<h3 class="center">public_repos:' + ' ' + response.public_repos + "</h3>");
      $('.show-output4').text();

      //console.log(response['avatar_url']);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  } else {
    return "Invalid input";
  }
};

Gitname.prototype.numRepos = function() {

  $.get('https://api.github.com/users/' + this.name + '/repos?access_token=' + apikey).then(function(response) {
    for (var i = 0; i < response.length; i++) {
    $('.rname').append('<h5>'+response[i].name+'</h5>');
    $('.rdesc').append('<p>'+response[i].description+'</p>');
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });

};

exports.nameModule = Gitname;
