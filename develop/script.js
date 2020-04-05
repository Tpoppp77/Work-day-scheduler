$(document).ready(function () {
  // relative time 
  let today = $("#currentDay");
  today.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  console.log(today);

  let currentTime = moment();

  // timeblocks 
  let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  let userInput = $("#formGroupExampleInput").val();
  console.log(userInput)
  //userInput.text("")

  // append to timeblock
  $(".saveBtn").append(userInput);

  // for loop 

  for (i = 0; i < hours.length; i++) {

    let blockTime = document.querySelector(".row");
    console.log(blockTime);

    if (blockTime == currentTime) {
      $(".row" + blockTime).style.color = "red";
    } else if
     (blockTime > currentTime) {
      $(".row" + blockTime).style.color = "grey";
    } else if
     (blockTime < currentTime) {
      $(".row" + blockTime).style.color = "green";
    }
  }





  // save button for timeblocks
  $(".saveBtn").on("click", function () {
    event.preventDefault();
    let saveBtn = "savebtn";
    let all = {
      saveBtn: saveBtn,
      Time: currentTime,

    }
    //local storage
   localStorage.setItem(".user", user);

   




    // $("#formGroupExampleInput").val();
    // $("#formGroupExampleInput").append(userInput);
  });
});
