const sliderRate = document.querySelector(".slider-rate");
const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const selector = document.querySelector(".selector")

slider.oninput = function (){
    sliderRate.innerText = (this.value);
    selector.style.left = this.value + "%";
    progress.style.width = this.value + "%";
}