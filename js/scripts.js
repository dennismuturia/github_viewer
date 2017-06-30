var apikey = require('./../.env').apiKey

function Gitname(name) {
  this.name = name;
}
Gitname.prototype.Apis = function() {
  if (this.name != '') {
    console.log("hello");
    $.get('https://api.github.com/users/' + this.name + '?access_token=' + apikey).then(function(response) {
      console.log(response['login']);

    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  } else {
    return "Invalid input";
  }
};

exports.nameModule = Gitname;
