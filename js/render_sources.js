//looked at Steven Bateman's branches as structure reference//
var studioSchedule = [];

function Schedule(schedule) {
  this.studioName = schedule.studioName;
  this.studioLocation = schedule.studioLocation;
  this.className = schedule.className;
  this.classDay = schedule.classDay;
  this.classTime = schedule.classTime;
}

Schedule.prototype.toHtml = function() {
  var $scheduleTemplate = $'(.template').clone();
  
}
