// Navigation toggle
const mainNav = document.querySelector('.main-nav');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
  mainNav.classList.toggle('open');
});


// Time picker form
$(function () {
  $('#datetimepicker4').datetimepicker({
      format: 'L'
  });
});


function onSubmit() {
  window.location.href="./confirm.html";  
}


// Animate landing on load
gsap.fromTo('.hero-clipped', {scaleX: 0}, {duration: 1, scaleX: 1});
gsap.fromTo('.logo', {x: -200, opacity: 0}, {duration: 1, delay: .5, x: 0, opacity: 1});
gsap.fromTo('.hamburger-menu', {x: 200, opacity: 0}, {duration: 1, delay: .8, x: 0, opacity: 1});
gsap.fromTo('.hero-textbox', {yPercent: 40, opacity: 0}, {duration: 1, delay: 1.3, yPercent: -50, opacity: 1});



// Number Counter

$(".counts").each(function(index, element) {
  var count = $(this),
      zero = {val:0},
      num = count.data("number"),
      split = (num + "").split("."),
      decimals = split.length > 1 ? split[1].length : 0;

    gsap.to(zero, {
      val: num,
      duration: 2,
      scrollTrigger: element,
      onUpdate: function() {
        count.text(zero.val.toFixed(decimals));
      }
    });
});