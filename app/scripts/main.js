'use strict';

function getDate(month) {
  var result = month.endOf('month');
  while(result.day() !== 1)
    result.subtract(1, 'day');

  return result;
}

$(function() {
  var result = getDate(moment());
  var dur = result.diff(moment());

  if (dur < 0)
    result = getDate(moment().add(1, 'month'));

  var meeting = result.subtract(5.5, 'hours');
  meeting.add(1, 'second');

  $('.next').text(meeting.format('dddd, MMMM Do YYYY, h:mm:ss a') + " EST");

  $('.countdown').downCount({
    date: meeting.add(4, 'hours').format(),
    offset: 0
  });
});
