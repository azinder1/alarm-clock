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
