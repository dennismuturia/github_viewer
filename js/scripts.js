var apikey = require('./../.env').apiKey;

function Gitname(name) {
  this.name = name;
}
Gitname.prototype.Apis = function() {
  if (this.name != '') {
    $('.show-output', '.show-output1', 'show-output2', '.show-output3', '.show-output4').text(" ");
    $.get('https://api.github.com/users/' + this.name + '?access_token=' + apikey).then(function(response) {

      $('.show-output').html('<img class="center2" src="' + response.avatar_url + '">');

      $('.show-output1').html('<h3 class="center">Name: ' + ' ' + response.name + "</h3>");

      $('.show-output2').html('<h3 class="center">Followers: ' + ' ' + response.followers + "</h3>");

      $('.show-output3').html('<h3 class="center">Following:' + ' ' + response.following + "</h3>");

      $('.show-output4').html('<h3 class="center">public_repos:' + ' ' + response.public_repos + "</h3>");


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
      $('.rname').append('<h6>' + response[i].name + '</h6>');
      $('.rdesc').append('<h6>' + response[i].description + '</h6>');
      $('.langg').append('<h6>' + response[i].language + '</h6>');
      $('.crt').append('<h6>' + response[i].created_at + '</h6>');
      $('.use').append('<h6>' + response[i].disk_usage + '</h6>');
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });

};

exports.nameModule = Gitname;
