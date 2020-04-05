$(document).ready(function () {
  // relative time 
  let today = $("#currentDay");
  today.text(moment().format("MMMM Do YYYY, h:mm:ss a"))

  let currentTime = moment();
  
  // timeblocks 
  let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  
  let userInput = $("#formGroupExampleInput").val();
  // for loop 
  for (i = 0; i < hours.length; i++) {

    let blocktime = $(".row" + hours[i]);

    if (currentTime == hours[i]) {
      console.log(i);
      $(".row" + hours[i]).addClass("greybackground");
    } else if (currentTime > hours[i]) {
      $(".row" + hours[i]).addClass("redbackground");
    } else if (currentTime < hours[i]) {
      $(".row" + hours[i]).addClass("greenbackground");
    }
  }
  // append to timeblock

   $(".formGroupExampleInput").append(userInput);



  // save button for timeblocks
  $(".saveBtn").on("click", function () {
    event.preventDefault();
    let saveBtn = "savebtn";
    let all = {
      saveBtn: saveBtn,
      currentTime: currentTime,
    }
    //local storage
  let userInput = localStorage.setItem("#formGroupExampleInput", userInput);

    
    // $("#formGroupExampleInput").val();
    // $("#formGroupExampleInput").append(userInput);
  });
});
