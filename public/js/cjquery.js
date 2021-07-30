$(document).ready(function(){
    $('.ui.dropdown') .dropdown();
});



// $(document).ready(function(){
//     $('.ui.labeled.icon.sidebar')
//   .sidebar('toggle');
// });


function togSidebar(){
    $('.ui.labeled.icon.sidebar')
  .sidebar('toggle');

  console.log($(window).height());
   $("#home-container").height($(window).height());
}