$(document).ready(function(){
  // relative time 
 let todayEl = $("#currentDay");
 todayEl.text(moment().format("MMMM Do YYYY, h:mm:ss a"))

    //   const timEl = $("<")
    // moment().format('MMMM Do YYYY, h:mm:ss a');

  // timeblocks elements
   // let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
   // hours = $("<div>");

   // hours.addClass("time")
   // $(".container").append(hours);
   
  //   let todayDate = $("#currentDay");
  // todayDate.text(now);

  // save button for timeblocks
  // $(".saveBtn").on("click", function(){
  //   let userInput = $("<div>");
  //   userInput = $(this).val();
  //   $(".container").val();
  //   $(".container").append(userInput);
  // })
});
