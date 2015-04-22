'use strict';

$(function() {
  var result = moment().endOf('month');
  while(result.day() !== 1) {
    result.subtract(1, 'day');
  }

  var meeting = result.subtract(5.5, 'hours');
  meeting.add(1, 'second');
  $('.next').text(meeting.format('dddd, MMMM Do YYYY, h:mm:ss a'));

  $('.countdown').downCount({
    date: meeting.format()
  });
});
