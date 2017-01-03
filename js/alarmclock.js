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
