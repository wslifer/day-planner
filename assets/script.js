window.onload = function () {
  var today = new Date();
  date = moment().format("LL");
  // get a current day from page being loaded
  $("#currentDay").html(date);
};
