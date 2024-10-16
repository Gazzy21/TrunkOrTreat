$(document).ready(function () {
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

var imgArray = [
  "imgs/p1",
  "imgs/p2",
  "imgs/p3",
  "imgs/p4",
  "imgs/p5",
  "imgs/p6",
  "imgs/p7",
  "imgs/p8",
  "imgs/p9",
  "imgs/p10",
  "imgs/p11",
  "imgs/p12",
  "imgs/p13",
  "imgs/p14",
  "imgs/p15",
  "imgs/p16",
  "imgs/p17",
  "imgs/p18",
  "imgs/p19",
  "imgs/p20",
  "imgs/p21",
  "imgs/p22",
  "imgs/p23",
  "imgs/p24",
  "imgs/p25",
  "imgs/p26",
  "imgs/p27",
  "imgs/p28",
  "imgs/p29",
  "imgs/p30",
  "imgs/p31",
  "imgs/p32",
  "imgs/p33",
  "imgs/p34",
  "imgs/p35",
  "imgs/p36",
  "imgs/p37",
];
var randomImg = imgArray[Math.floor(Math.random() * imgArray.length)];
