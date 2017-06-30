(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5ca7070c7fd71bf7c544f960a6b8406210f87166";

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":3}],3:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
