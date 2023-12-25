let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let slideImg = document.querySelectorAll(".slide");

console.log(slideImg.length - 1);
let startSlider = 0;
let endSlider = (slideImg.length - 1) * 100;

slideBtnLeft.addEventListener("click", () => {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    slideImg.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
});

slideBtnRight.addEventListener("click", () => {
    if (startSlider > -endSlider) {
        startSlider = startSlider - 100;
    }
    slideImg.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
});



