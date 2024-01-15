// home page image rotation
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
});

//toggle header button
function toggleButton(btn) {
  btn.classList.toggle("active");
}

// Search button text to icon change
window.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");

  // Check screen width on load
  checkScreenWidth();

  // Check screen width on resize
  window.addEventListener("resize", checkScreenWidth);

  function checkScreenWidth() {
    // Get the screen width
    const screenWidth = window.innerWidth;

    // Set the button content based on screen width
    if (screenWidth <= 1017) {
      searchButton.innerHTML = '<i class="fas fa-search"></i>'; // Font Awesome search icon
    } else {
      searchButton.innerHTML = "Search";
    }
  }
});
