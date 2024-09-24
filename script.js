const thumbImages = document.querySelectorAll(".thumbImages");
const starSpan = document.querySelector(".starSpan");
const starBtn = document.querySelector(".starBtn");
const starSci = document.querySelector(".sci");

const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

thumbImages.forEach((img) => {
  const imgSource = img.getAttribute("imageAttribute");
  const circleColor = img.getAttribute("circleColor");

  img.addEventListener("click", () => imgSlider(imgSource, circleColor));
});

function imgSlider(providedSrc, circleColor) {
  document.querySelector(".starbucks").src = providedSrc;

  const circle = document.querySelector(".circle");
  circle.style.background = circleColor;

  starSpan.style.color = circleColor;
  starBtn.style.backgroundColor = circleColor;
  starSci.style.backgroundColor = circleColor;
}

function toggleMenu() {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
menuToggle.addEventListener("click", toggleMenu);
