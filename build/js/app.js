(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(alarmTime){
  this.alarmTime = alarmTime;
}


Alarm.prototype.thisDefiner = function(alarmTime){
  setInterval(this.alarmDifference.bind(this), 1000);
};

Alarm.prototype.alarmDifference = function(){
  var alarmTime = this.alarmTime;
  var result = false;
  console.log(result)
  if ((moment(alarmTime).format('HH:mm')) === (moment().format('HH:mm'))) {
     result = true;
  }
  return result;
  console.log(result)
};
exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
var Alarm = require('./../js/alarmclock.js').alarmModule;

$(document).ready(function(){
  $("#alarm-clock").submit(function(event){
    event.preventDefault();
    var alarmTime = $('#alarm-time').val();
    var currentTime = moment().format('HH:mm');
    var userAlarm = new Alarm(alarmTime,'HH:mm');
    var alarmSet = userAlarm.thisDefiner(alarmTime);
    if (alarmSet === false) {
      $('#alarm-set').text(alarmTime);
    } else {
      $('#alarm-set').text("Wake Up!");
    }
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/alarmclock.js":1}]},{},[2]);
