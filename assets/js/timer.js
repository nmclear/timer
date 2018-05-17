// TIMER TEMPLATE
// =============================

window.onload = function() {
    $("#stop").on("click", timer.stop);
    $("#reset").on("click", timer.reset);
    $("#start").click(timer.start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var timerRunning = false;
  
  // Our timer object
  var timer = {
    time: 0,
 
    reset: function() {
      timer.time = 0;
      $("#timerDisplay").text("00:00");
      console.log(timer.time);
    },

    start: function() {
      if (!timerRunning) {
        intervalId = setInterval(timer.count, 1000);
        timerRunning = true;
      }
    },

    stop: function() {
      clearInterval(intervalId);
      timerRunning = false;
    },

    count: function() {
      timer.time++;
      // pass current time through converter.
      var converted = timer.timeConverter(timer.time);
      $("#timerDisplay").text(converted);
    },

    timeConverter: function(t) {
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
      //var secons = t % 60;
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds;
    }
  };