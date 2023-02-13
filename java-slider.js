let slides = [
    {
        city: "Rostov-on-Don <br> LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        img: "./images/image1.png"
    },
    {
        city: "Sochi Thieves",
        area: "105 m2",
        time: "4 months",
        img: "./images/image2.png"
    },
    {
        city: "Rostov-on-Don <br> Patriotic",
        area: "93 m2",
        time: "3 months",
        img: "./images/image3.png"
    }
]
function initSlider() {

    let city_text = document.querySelector(".city_text");
    let area_text = document.querySelector(".area_text");
    let time_text = document.querySelector(".time_text");

    let sliderImages = document.querySelector(".images");
    let sliderDots = document.querySelector(".dots");
    let navTitles = document.querySelector(".nav_titles");

    let next = document.querySelector(".right_arrow");
    let prev = document.querySelector(".left_arrow");
    let slideNum = 0;

    slides.forEach((image, index) => {
            let imageDiv = `<img class="image n${index} ${index === 0 ? "active_img" : ""}" src="${slides[index].img}" data-index="${index}">`;
            sliderImages.innerHTML += imageDiv;
        })

    slides.forEach((img, index) => {
        let dot = `<div class="slider_dot n${index} ${index === 0? "active_dot" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;

        sliderDots.querySelectorAll(".slider_dot").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);
            })
        })
    })

    navTitles.querySelectorAll(".nav_title").forEach(title => {
        title.addEventListener("click", function() {
            moveSlider(this.dataset.index);
        })
    })

    next.addEventListener("click", () => {
        if (slideNum === slides.length - 1) slideNum = -1;
        moveSlider(slideNum + 1);
    })

    prev.addEventListener("click", () => {
        if (slideNum === 0) slideNum = slides.length
        moveSlider(slideNum - 1);
    })

    function moveSlider(num) {

        sliderImages.querySelector(".active_img").classList.remove("active_img");
        sliderImages.querySelector(".n" + num).classList.add("active_img");

        sliderDots.querySelector(".active_dot").classList.remove("active_dot");
        sliderDots.querySelector(".n" + num).classList.add("active_dot");

        navTitles.querySelector(".active_nav_title").classList.remove("active_nav_title");
        navTitles.querySelector(".n" + num).classList.add("active_nav_title");

        city_text.innerHTML = slides[num].city;
        area_text.innerHTML = slides[num].area;
        time_text.innerHTML = slides[num].time;

        slideNum = +num;
    }
}

document.addEventListener("DOMContentLoaded", initSlider)