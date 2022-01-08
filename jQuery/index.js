/* document.querySelector("h1");
$("h1").css("color","green");
for style change we use css() porperty 
*/
// console.log(  $("h1").css("color"));
// document.querySelectorAll("button");


// add classes----->>>>>>>>>>>>>.
$("h1").addClass("big-title")
$("h1").text("Good Bye");
$("button").html("<em>sajda</em")

// console.log(  $("a").attr("href"));

// .removeClass(" class1  class2")
// .hasClass("nameoftheClass")

// $("button");


// for add event in jquery
// $("button").click(function () { 
//  //   $("h1").css("color","purple");
// $("h1").hide();
// .$("h1").remove();
// $("h1").toggle();
    // .$(selector).fadeIn();
    // $(selector).fadeOut();
    // $(selector).fadeToggle();
    // $(selector).slideUp();
    // $(selector).slideDown();
    // $(selector).slideToggle();

// });



$(document).keypress(function (e) { 
    var key=e.key;
    $("h1").text(key);
});


// before();after();prepend();append();
