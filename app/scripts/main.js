'use strict';

$(function() {
  var dur = -1;
  var result;
  var month = moment();

  do {
    result = month.endOf('month');
    while(result.day() !== 1) {
      result.subtract(1, 'day');
    }

    dur = result.diff(moment());
    month.add(1, 'month');
  } while (dur < 0);

  var meeting = result.subtract(5.5, 'hours');
  meeting.subtract(1, 'month');
  meeting.add(1, 'second');

  $('.next').text(meeting.format('dddd, MMMM Do YYYY, h:mm:ss a') + " EST");

  $('.countdown').downCount({
    date: meeting.add(4, 'hours').format(),
    offset: 0
  });
});
