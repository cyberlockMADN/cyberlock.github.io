const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
navLinks.classList.toggle('show-links');
});
const aboutLink = document.getElementById("aboutLink");
aboutLink.addEventListener(function(event) {
  event.preventDefault();
  aboutLink.classList.add("fadeOut");
  setTimeout(function() {
    location.href = aboutLink.href;
  }, 1000); //1000 es el tiempo de transicion en milisegundos
});


const anim = document.getElementById("linkeao");
linkeao.onclick = function(event) {
  event.preventDefault();
  linkeao.classList.add("fadeOut");
  setTimeout(function() {
    location.href = linkeao.href;
  }, 1000);
};

