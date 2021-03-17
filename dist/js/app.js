// Testimonials Section

const nextBtn = document.querySelector(".next__btn");
const prevBtn = document.querySelector(".prev__btn");
const sliderContainer = document.querySelector(".testimonials__slider");
const testimonialComponent = document.querySelector(
  ".testimonials__slider .article"
);
const childrenNum = sliderContainer.childElementCount;
let testimonialCounter = 0;

const handleSlideImages = () => {
  sliderContainer.style.transform =
    "translateX(" +
    -testimonialComponent.clientWidth * testimonialCounter +
    "px)";
  sliderContainer.style.transition = "transform 0.4s ease";
};

nextBtn.addEventListener("click", () => {
  if (testimonialCounter > childrenNum - 4) {
    return;
  }
  testimonialCounter++;
  handleSlideImages();
});

prevBtn.addEventListener("click", () => {
  if (testimonialCounter < 1) {
    return;
  }
  testimonialCounter--;
  handleSlideImages();
});
