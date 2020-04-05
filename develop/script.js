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

      let blockTime = document.querySelector(".row");
      blockTime.style.display = "";
      
      if (currentTime == blockTime) {
     
        $(".row" + blockTime).style.color = "red";
      } else if 
      (currentTime > blockTime) {
        $(".row" + blockTime).style.color = "grey";
      } else if 
      (currentTime < blockTime) {
        $(".row" + blockTime).style.color = "green";
      }
    }
  
  
  // append to timeblock

   $(".saveBtn").append(userInput);



  // save button for timeblocks
  $(".saveBtn").on("click", function () {
    event.preventDefault();
    let saveBtn = "savebtn";
    let all = {
      saveBtn: saveBtn,
      currentTime: currentTime,
    }
    //local storage
  let userInput = localStorage.setItem(".saveBtn", userInput);

    // $("#formGroupExampleInput").val();
    // $("#formGroupExampleInput").append(userInput);
  });
});
