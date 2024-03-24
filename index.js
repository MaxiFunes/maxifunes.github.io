
// animacion del menu
function toggleMenu() {
  var buttonmenu1 = document.getElementById("menu");
  var buttonmenu2 = document.getElementById("menu2");
  var linea1 = document.querySelector(".menu_linea1");
  var linea2 = document.querySelector(".menu_linea2");
  var linea3 = document.querySelector(".menu2_linea1");
  var linea4 = document.querySelector(".menu2_linea2");
  var menu = document.querySelector(".menu");

  linea1.classList.toggle("open1");
  linea2.classList.toggle("open2");
  linea3.classList.toggle("open3");
  linea4.classList.toggle("open4");
  buttonmenu1.classList.toggle("buttonmove");
  buttonmenu2.classList.toggle("buttonmove2");
  menu.classList.toggle("openmenu");

}

// barra scroll onoff


var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var isScrollingDown = lastScrollTop > 0 ? true : false;

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    var buttonmenu1 = document.getElementById("menu");
    var buttonmenu2 = document.getElementById("menu2");
    var linea1 = document.querySelector(".menu_linea1");
    var linea2 = document.querySelector(".menu_linea2");
    var linea3 = document.querySelector(".menu2_linea1");
    var linea4 = document.querySelector(".menu2_linea2");
    var menu = document.querySelector(".menu");
  


    if (currentScroll > lastScrollTop) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }

    if (currentScroll > 0 && isScrollingDown) {
        document.querySelector('.barra').classList.add('hidden');
        linea1.classList.remove("open1");
        linea2.classList.remove("open2");
        linea3.classList.remove("open3");
        linea4.classList.remove("open4");
        buttonmenu1.classList.remove("buttonmove");
        buttonmenu2.classList.remove("buttonmove2");
        menu.classList.remove("openmenu");
    } else {
        document.querySelector('.barra').classList.remove('hidden');
        linea1.classList.remove("open1");
        linea2.classList.remove("open2");
        linea3.classList.remove("open3");
        linea4.classList.remove("open4");
        buttonmenu1.classList.remove("buttonmove");
        buttonmenu2.classList.remove("buttonmove2");
        menu.classList.remove("openmenu");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});






// // FUNCION OBSERVE1



// const underlineobservador = new IntersectionObserver((entries)=>{
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('active');
//     } else {
//       entry.target.classList.remove('active');
//     }
//   });
// },{
//   rootMargin:'-100px',
// });

// const underline1 = document.getElementById('spanobs');

// underlineobservador.observe(underline1);



// // OBSERVER 2


// const textobservador = new IntersectionObserver((entries)=>{
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// },{
//   threshold: 1,
//   rootMargin: '-100px',
// });

// const text1 = document.querySelectorAll('.section1_p')

// textobservador.observe(text1);




let firstLoad = true; // Variable para controlar la primera carga de la página

// Observador 1: underlineobservador
const underlineobservador = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if (!firstLoad && entry.isIntersecting) { // Verifica si no es la primera carga y está intersectando
      entry.target.classList.add('active');
    } else {
      // entry.target.classList.remove('active');
    }
  });
},{
  rootMargin:'-100px',
});

const underline1 = document.getElementById('spanobs');
if (underline1) { // Verifica si el elemento existe antes de observarlo
  underlineobservador.observe(underline1);
}

// Observador 2: textobservador
const textobservador = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if (!firstLoad && entry.isIntersecting) { // Verifica si no es la primera carga y está intersectando
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
},{
  threshold: 1,
  rootMargin: '-100px',
});

const text1 = document.querySelectorAll('.section1_p');
if (text1.length > 0) { // Verifica si hay elementos para observar
  text1.forEach(element => {
    textobservador.observe(element);
  });
}

// Cambia el estado de firstLoad después de que la página haya cargado completamente
window.addEventListener('load', () => {
  firstLoad = false;
});

  

