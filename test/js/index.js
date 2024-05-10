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