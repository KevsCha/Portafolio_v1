const square_lt = document.querySelector('.one');
const square_lb = document.querySelector('.two');
const square_rt = document.querySelector('.three');
const square_rb = document.querySelector('.four');

/* ---------------function Slider ----------------------*/
const nav_slider = document.querySelector('.nav_slider');
const slides = nav_slider.querySelectorAll('.slide');
const btn_next = document.querySelector('.next');
const btn_prev = document.querySelector('.prev');

let index_nav = 0;

function transition_slide(index){
	//console.log(move);
	slides[0].style.transform = `translate(${index * -100}%)`;
	slides[1].style.transform = `translate(${index * -100}%)`;
	slides[2].style.transform = `translate(${index * -100}%)`;
	slides[3].style.transform = `translate(${index * -100}%)`;
	slides[4].style.transform = `translate(${index * -100}%)`;

	if (index == 4 || index == -4)
		index_nav = -1;
	console.log(index);
}

btn_next.addEventListener('click', () => {
		transition_slide(++index_nav);
});
btn_prev.addEventListener('click', () => {
	if (index_nav != 0)
		transition_slide(--index_nav);
});


let screen_width = window.innerWidth;
let screen_height = window.innerHeight;












/*
window.addEventListener('resize', () => {
	console.log(window.innerWidth, window.innerHeight, window);
});
console.log(screen_width, screen_height, window);
*/

// JavaScript para habilitar el desplazamiento horizontal con la rueda del ratón
const contenedor = document.querySelector('.nav_slider');
contenedor.addEventListener('wheel', (event) => {
	// console.log(contenedor.scrollLeft += event.deltaY);
	contenedor.scrollLeft += event.deltaY;
	event.preventDefault();
});