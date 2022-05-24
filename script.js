const content = document.querySelector(".main-content");
const btn = document.querySelector(".header_btn");
const text = document.querySelector(".main-content_text");

const openSection = () => {
  content.classList.toggle("show-element");
  text.classList.toggle("show-element");
};
btn.addEventListener("click", openSection);
