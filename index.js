
// animcion del menu
function toggleMenu() {
  var buttonmenu = document.getElementById("menu");
  var linea1 = document.querySelector(".menu_linea1");
  var linea2 = document.querySelector(".menu_linea2");
  var menu = document.querySelector(".menu");
  


  linea1.classList.toggle("open1");
  linea2.classList.toggle("open2");
  buttonmenu.classList.toggle("buttonmove");
  menu.classList.toggle("openmenu");
}

// barra scroll onoff


var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var isScrollingDown = lastScrollTop > 0 ? true : false;

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    var buttonmenu = document.getElementById("menu");
    var linea1 = document.querySelector(".menu_linea1");
    var linea2 = document.querySelector(".menu_linea2");
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
        buttonmenu.classList.remove("buttonmove");
        menu.classList.remove("openmenu");
    } else {
        document.querySelector('.barra').classList.remove('hidden');
        linea1.classList.remove("open1");
        linea2.classList.remove("open2");
        buttonmenu.classList.remove("buttonmove");
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

  




// Función para desplazamiento suave al hacer clic en los enlaces




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    
    // Desplazamiento suave
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});


//scroll desabilitado por tiempo(carga de pagina)
function deshabilitarScrollPorTiempo(tiempo) {
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    document.body.style.overflow = '';
  }, tiempo);
}

// Llama a la función cuando se carga la página
window.addEventListener('load', function() {
  deshabilitarScrollPorTiempo(4000); // Deshabilita el scroll durante 3 segundos (3000 milisegundos)
});
