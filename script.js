// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  $(".container-lg").append("<div id= 'hour-12' class='row time-block'></div>");
  $('#hour-12').append("<div class='col-2 col-md-1 hour text-center py-3'>12PM</div");
  $('#hour-12').children('div').after('<textarea class="col-8 col-md-10 description" rows="3"></textarea>')
  $('#hour-12').children('textarea').after('<button class="btn saveBtn col-2 col-md-1" aria-label="save">')
  // $('#hour-8').children('button').children('<i class="fas fa-save" aria-hidden="true"></i>')

  $('.saveBtn').on('click', function(){
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
   
    localStorage.setItem(time, value);
  });    


  // let buildHourBlocks = ['hour-8', 'hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17';]
  // for (let i = 0; i < buildHourBlocks.length; i++){
  // $(".container-lg").prepend[i]("<div></div>");
  //   };
  
  

    function updateHours() {
      let currentTime = dayjs().hour(); 
      console.log(currentTime);
      $(".time-block").each(function(){
      let timeBlock = parseInt($(this).attr("id").split("-")[1]);
      console.log(timeBlock);
      if (timeBlock < currentTime) {
        $(this).addClass("past");
      } else if (timeBlock === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
       $(this).addClass("future");
      }
    })};

    setInterval(function(){
      updateHours}, 900000); 

      updateHours();
// look up timers in w3 schools, syntax of counter, not timeout


// 1. create divs for each hour 9-5
//    a)create an object with each div id (hour-9, hour-10)? 
//    b)use a for or each loop to give id to div
//    c)give each div styling, text area, button, etc.
// 2. how to use an id in the click event and in local storage
// 3. create an if statement: if current hour === id hour, then have this styling



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));


  // TODO: Add code to display the current date in the header of the page.
});
