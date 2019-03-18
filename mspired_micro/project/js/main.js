{
  document.querySelector('body').style.opacity = '1';  
}
var grid = new Vivus('GRID', {
  type: 'delayed',
  duration: 500,
  animTimingFunction: Vivus.EASE
});
grid.play()

let menu = document.querySelector('.bars');
let menuD = document.querySelector('nav');
let mainContent = document.querySelector('.mainContent');
let navActive = document.querySelector('.menu-list');
let menuGrid = document.querySelector('.grid');
menu.addEventListener('click', function(){
  menu.classList.toggle('menuAnimat');
  menuD.classList.toggle('menuDisplay');
  mainContent.classList.toggle('menuActivated');
  navActive.classList.toggle('menu-list--active');
  menuGrid.classList.toggle('grid-active')
});
// toggle class active for menu
// let s = document.querySelector('.nav-s');
// s.addEventListener('click', function() {
//   s.classList.toggle('active');
// });
// let v = document.querySelector('.nav-v');
// v.addEventListener('click', function() {
//   v.classList.toggle('active');
// });
// let w = document.querySelector('.nav-w');
// w.addEventListener('click', function() {
//   w.classList.toggle('active');
// });
// let c = document.querySelector('.nav-c');
// c.addEventListener('click', function() {
//   c.classList.toggle('active');
// })
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
  });
});



// clientSlider
$(document).ready(function(){
  $('.clients').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });
});