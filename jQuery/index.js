// $(document).ready(function() {
//   $("h1").css("color", "red")
// })

// document.querySelector("h1");
$("h1");
$("h1").css("color", "green");
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
console.log($("h1").hasClass("margin-50"));
$("h1").text("GoodBye");

// document.querySelector("button");
$("button");
$("button").text("Don't click me")
$("button").html("<em>Hey<em>")

// console.log($("img").attr("src"));
$("a").attr("href", "https://apple.com");

$("h1").click(function() {
  $("h1").css("color", "purple");
})

// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "yellow"
//   })
// }
$("button").click(function() {
  $("h1").css("color", "pink");
})

// $("input").keypress(function(event) {
//   console.log(event.key);
// })

$(document).keypress(function(event) {
  // console.log(event.key);
  // $("h1").text(event.key);
})


$(document).on("mouseover", function() {
  // $("h1").css("color", "purple")
});

// $("h1").prepend("<button>Hi</button>");
// $("h1").before("<button>Hi</button>");
// $("h1").append("<button>Hi</button>");
// $("h1").after("<button>Hi</button>");

$("button").click(function() {
  // $("h1").hide();
  // $("h1").slideUp();
  // $("h1").slideToggle();
  // $("h1").fade();
  // $("h1").fadeToggle();
  // $("h1").animate({
  //   // opacity: 0.5
  //   margin: "20%"
  // });
  $("h1").slideUp().slideDown().animate({
    opacity: 0.5,
    margin: "20%"
  });
})
