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
  var $scheduleTemplate = $('.template').clone();
  $scheduleTemplate.find('h2').text(this.studioName);
  $scheduleTemplate.find('#location').text(this.studioLocation);
  $scheduleTemplate.find('#className').text(this.className);
  $scheduleTemplate.find('#classDate').text(this.classDate);
  $scheduleTemplate.find('#classTime').text(this.classTime);
  $scheduleTemplate.removeClass('template');
  $scheduleTemplate.addClass('schedule');
  return $scheduleTemplate;
};

function newAndSort() {
  schedule.forEach(function(schedule) {
    studioSchedule.push(new Schedule(schedule));
  });
}

function render() {
  studioSchedule.forEach(function(schedule){
    $('#schedules').append(schedule.toHtml());
  });
}

function init() {
  newAndSort();
  render();
}

init();
