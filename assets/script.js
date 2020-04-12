window.onload = function () {
  var today = new Date();
  date = moment().format("LL");
  // get a current day from page being loaded
  $("#currentDay").html(date);
};

var workHours = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];
var container = $(".container");
workHours.forEach(function (time) {
  var text = $("<textarea>").attr("dataStorage", time);
  var btn = $("<button>").addClass("saveBtn");
  var row = $("<div>").addClass("row");
  var hours = $("<div>").addClass("hour");
  let any = parseInt(time);
  hours.text(time);
  row.append(hours, text, btn);

  $(".container").append(row);
});
