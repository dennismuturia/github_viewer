(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "238fee4e4f5502b56b5eb79e979e5bbecbd21afb";

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":3}],3:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
