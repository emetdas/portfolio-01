// nav
function myFunction(){
  var x =document.getElementById("manu");
  if(x.style.display == "block"){
    x.style.display = "none";
  }
  else{
    x.style.display = "block"
  }
}
// stiky navigation
$(document).ready(function () {
    $(".about").waypoint(function (direction) {
      if (direction == "down") {
        $(".nav").addClass("stky");
      } else {
        $(".nav").removeClass("stky");
      }
    });
  });
// counter
const counters = document.querySelectorAll(".counter");
const speed = 300;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
// counter-end
  // scroll top
  // Scroll top
$(document).ready(function () {
  /******************************
BOTTOM SCROLL TOP BUTTON
******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  }); });

   // scroll-top END
