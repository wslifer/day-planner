window.onload = function () {
  var date = moment().format("MMM Do YY");
  // get a current day from page being loaded.
  $("#currentDay").append(date);
};

var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
updateTime();

// getting current time and updating throughout real day.
function updateTime() {
  var currentTime = moment().format("H");

  for (var i = 0; i < workHours.length; i++) {
    if (parseInt(workHours[i]) > currentTime) {
      $("#" + workHours[i]).addClass(future);
    } else if (parseInt(workHours[i]) < currentTime) {
      $("#" + workHours[i]).addClass(past);
    } else if (parseInt(workHours[i]) == currentTime) {
      $("#" + workHours[i]).addClass(present);
    }
  }
}

//button to store to local storage
$(".saveBtn").click(function () {
  var timeOfDay = $(this).parent().attr("id");
  var textContent = $("input").val().trim();

  localStorage.setItem(timeOfDay, textContent);
  console.log(timeOfDay, textContent);
});

// retrieving from local storage so that page doesn't reset on refresh
$("#9am").children("input").val(localStorage.getItem("9am"));

$("#10am").children("input").val(localStorage.getItem("10am"));

$("#11am").children("input").val(localStorage.getItem("11am"));

$("#12pm").children("input").val(localStorage.getItem("12pm"));

$("#1pm").children("input").val(localStorage.getItem("1pm"));

$("#2pm").children("input").val(localStorage.getItem("2pm"));

$("#3pm").children("input").val(localStorage.getItem("3pm"));

$("#4pm").children("input").val(localStorage.getItem("4pm"));

$("#5pm").children("input").val(localStorage.getItem("5pm"));
