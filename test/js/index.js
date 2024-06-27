/*------------------------Slider-------------------- */
const next_btn = document.getElementById('next');
const prev_btn = document.getElementById('prev');
const slider = document.querySelector('.slider');
const slider_cont = document.querySelector('.slider .cards_contain');
const thumbnail = document.querySelector('.slider .thumbnail');

next_btn.onclick = function(){
    show_slider('next');
}
prev_btn.onclick = function(){
    show_slider('prev');
};
let timing = 1000;
let run_time;
function show_slider(type){
    let item_slider = document.querySelectorAll('.slider .cards_contain .card');
    let item_thumbnail = document.querySelectorAll('.slider .thumbnail .item');

    if(type == 'next'){
        slider_cont.appendChild(item_slider[0]);
        thumbnail.appendChild(item_thumbnail[0]);
        slider.classList.add('next');
    } else if(type == 'prev'){
        let position_last = item_slider.length - 1;
        slider_cont.prepend(item_slider[position_last]);
        thumbnail.prepend(item_thumbnail[position_last]);
        slider.classList.add('prev');
    }
    clearTimeout(run_time);
    run_time = setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, timing);
    console.log(item_slider, item_thumbnail);
}
/*-------------- menu Hamburguesa ------------- */
const menu_hamburguer = document.querySelector('.hamburguer');
const menu_nav = document.getElementById('nav_menu');
menu_hamburguer.onclick = () => {
    menu_hamburguer.classList.toggle('is_activate');
    menu_nav.classList.toggle('is_activate');
};
/*------------------- select_menu----------------- */
let btn_select = Array.from(menu_nav.children);
btn_select.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.id);
        btn_select.forEach((btn) => {
            btn.classList.remove('active');
        });
        if (btn.id != 'nav_cv')
            btn.classList.add('active');
    });
});
console.log(btn_select);
/*-------------------scroll----------------- */
document.addEventListener('DOMContentLoaded', () =>{
    const sections = document.querySelectorAll('[name*="section"]');
    const cpy_nav = [...btn_select];
    window.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        sections.forEach((section, i) => {
            if(scroll >= section.offsetTop - 300){
                cpy_nav.forEach((btn) => {
                    btn.classList.remove('active');
                });
                cpy_nav[i].classList.add('active');
            }
        });
    });
    console.log(cpy_nav, sections);
});

/*-------------------add class to input, modified label------- */
const inputs = document.querySelectorAll('.field_in');
//Este forEach recorre todos los inputs
inputs.forEach((input) => {
    input.addEventListener('input', () => {
        if(input.value != '')
            input.classList.add('field');
        else 
            input.classList.remove('field');
    });
});
/*------------------ Nombre se autocompleta ------------- */
const info_us = document.querySelector('.info_us');
const user_data = Array.from(info_us.children);

let name_porfolio = 'Kevin David Quispe';

/*---------------------copy_clipboard--------------- */
function copy_clipboard(){
    let email = document.getElementById('url_email');
    const popup = document.getElementById('popup');

    popup.children[0].textContent = 'Copied Email';
    popup.classList.add('activate');
    setTimeout(() => {
        popup.classList.remove('activate');
    }, 2000);
    navigator.clipboard.writeText(email.children[1].textContent);
}