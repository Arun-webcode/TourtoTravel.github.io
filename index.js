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
