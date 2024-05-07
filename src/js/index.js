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
	let i = 0;

	while (i < slides.length)
		slides[i++].style.transform = `translate(${index * -100}%)`;
}

btn_next.addEventListener('click', () => {
	console.log(index_nav);
	if (index_nav == 4)
		index_nav = -1;
	transition_slide(++index_nav);
});
btn_prev.addEventListener('click', () => {
	console.log(index_nav);
	if (index_nav <= 0)
		index_nav = 5;
	transition_slide(--index_nav);
});

/*-------------------mini slider(Projects)---------------------- */
const container_cards = document.querySelector('.projects_card');
let x = 0;
const projects = document.querySelectorAll('.card');

function transition_project(){
	let card_clone = projects[x].cloneNode(true);
	console.log(projects.length);
	projects.forEach((card) => {
		// let card_clone = card.cloneNode(true);
		// console.log(card_clone);
		card.style.transform = `translate(${x * -100}%)`;

		// console.log(window.getComputedStyle(card).getPropertyValue('transform'));
	});
	projects[x].remove();
	container_cards.appendChild(card_clone);
	// container_cards.appendChild(card_clone);
	if (x == projects.length)
	{
		console.log(projects[x - 1]);
		x = -1;
	}
	console.log(x++);
}
// setInterval(transition_project, 2000);







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