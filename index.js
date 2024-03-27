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
  // Verificar si la clase "openmenu" está presente
  if (!menu.classList.contains("openmenu")) {
    // Si no está presente, agregarla y eliminar "closemenu"
    menu.classList.add("openmenu");
    menu.classList.remove("closemenu");
  } else {
    // Si está presente, cambiar a "closemenu"
    menu.classList.remove("openmenu");
    menu.classList.add("closemenu");
  }
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

// animacion de movimiento de elementos
// Detecta el evento de scroll
window.addEventListener('scroll', function() {
  var elemento = document.getElementById('sobremielemento');
  var scrollPos = window.scrollY; // Obtenemos la posición de desplazamiento vertical

  // Calculamos la nueva posición del elemento basada en el desplazamiento
  var newPos = scrollPos / 8; // Puedes ajustar el factor de desplazamiento según sea necesario

  // Aplicamos la nueva posición al elemento
  elemento.style.top = newPos + 'px';
});
// MOVIMIENTO DE CURSOR
// Verificar si el dispositivo es una computadora
const isDesktop = () => {
  const userAgent = navigator.userAgent;
  const desktopKeywords = ['Macintosh', 'Windows', 'Linux', 'Ubuntu'];
  return desktopKeywords.some(keyword => userAgent.includes(keyword));
};

// Verificar si el dispositivo es un dispositivo móvil
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Solo aplicar el efecto de movimiento al cursor en computadoras y no en dispositivos móviles
if (isDesktop() && !isMobile()) {
  const elements = document.querySelectorAll('.menu_icons, .barra_menu, .barra_menu2, .barra_a1');

  elements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const dx = mouseX - centerX;
      const dy = mouseY - centerY;

      const maxDistance = 3000;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        const factor = 1 - (distance / maxDistance);
        const translateX = (dx * factor) * 0.5;
        const translateY = (dy * factor) * 0.5;
        element.style.transform = `translate(${translateX}px, ${translateY}px) scale(1)`;
      } else {
        element.style.transform = 'scale(1)';
      }
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
    });
  });
}
// cierre del menu al hacerle click
document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector('.menu');
  var menulinea1 = document.querySelector('.menu_linea1');
  var menu2linea1 = document.querySelector('.menu2_linea1');
  var menulinea2 = document.querySelector('.menu_linea2');
  var menu2linea2 = document.querySelector('.menu2_linea2');
  var overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  overlay.addEventListener('click', function() {
      menu.classList.remove('openmenu');
      menulinea1.classList.remove('open1');
      menu2linea1.classList.remove('open3');
      menulinea2.classList.remove('open2');
      menu2linea2.classList.remove('open4');
      overlay.style.display = 'none';
  });

  var menuItems = document.querySelectorAll('.menu_ul-a');
  menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        menu.classList.remove('openmenu');
        menu.classList.add('closemenu');
        menulinea1.classList.remove('open1');
        menu2linea1.classList.remove('open3');
        menulinea2.classList.remove('open2');
        menu2linea2.classList.remove('open4');
        overlay.style.display = 'none';
      });
  });
});
