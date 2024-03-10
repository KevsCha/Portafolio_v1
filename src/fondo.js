const square_lt = document.querySelector('.one');
const square_lb = document.querySelector('.two');
const square_rt = document.querySelector('.three');
const square_rb = document.querySelector('.four');

let screen_width = window.innerWidth;
let screen_height = window.innerHeight;

window.addEventListener('resize', () => {
    console.log(window.innerWidth, window.innerHeight, window);
});
console.log(screen_width, screen_height, window);