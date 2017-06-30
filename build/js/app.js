(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5ca7070c7fd71bf7c544f960a6b8406210f87166";

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":3}],3:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
