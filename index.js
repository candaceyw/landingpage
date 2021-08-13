
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

// Animate landing on load
gsap.fromTo('.hero-clipped', {scaleX: 0}, {duration: 1, scaleX: 1});
gsap.fromTo('.logo', {x: -200, opacity: 0}, {duration: 1, delay: .5, x: 0, opacity: 1});
gsap.fromTo('.hamburger-menu', {x: 200, opacity: 0}, {duration: 1, delay: .8, x: 0, opacity: 1});
gsap.fromTo('.hero-textbox', {yPercent: 40, opacity: 0}, {duration: 1, delay: 1.3, yPercent: -50, opacity: 1});





// Number Counter


// gsap.registerEffect({
// 	name:"counter",
// 	extendTimeline:true,
// 	defaults:{
// 		end:0,
// 		duration:0.5,
// 		ease:"power1",
// 		increment:1,
// 	},
// 	effect: (targets, config) => {
// 	let tl = gsap.timeline()
// 	let num = targets[0].innerText
// 	targets[0].innerText = num
	
// 	tl.to(targets, {duration:config.duration, 
// 						 innerText:config.end, 
// 						 modifiers:{
// 							 innerText:function(innerText){
// 								 return  gsap.utils.snap(config.increment, innerText)

// 							 }
// 						 },
// 						 ease:config.ease}, 0)
	
// 	return tl
// }
// })

// let tl = gsap.timeline()
// tl.from("#stat3", {opacity:0}, "+=0.5")
// tl.counter("#animate-number", {end:360, increment:1}, "-=0.5")


// GSDevTools.create()


// gsap.to("#animate-number", {
//   scrollTrigger: "#animate-number", // start the animation when ".box" enters the viewport (once)
//   x: 500
// });


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