document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider-image');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add('active');
    }
    images[currentIndex].classList.add('active');

    setInterval(showNextImage, 5000);
});




const carrusel= document.querySelector(".carrusel");
let maxScrolleft = carrusel.scrollWidth - carrusel .clientWidth;
let intervalo = null; 
let step = 1;
const start = () => {
intervalo = setInterval (function (){
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrolleft) {
    step = -1;    
    } else if (carrusel.scrollLeft === 0) {
        step = step * -1;
    }
}, 10)
}
const stop = () => {
clearInterval (intervalo);
}
carrusel.addEventListener('mouseover', () => {
    stop();
})
carrusel.addEventListener('mouseout', () => {
    start();
})
start ();

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}