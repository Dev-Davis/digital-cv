const slides = [
  document.getElementById("summary"),
  document.getElementById("education"),
  document.getElementById("skills"),
  document.getElementById("tools"),
  document.getElementById("contact"),
];

// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;
//   const windowHeight = window.innerHeight;

//   // Define which scroll zones each div should appear in
//   const index = Math.floor(scrollY / windowHeight);

//   slides.forEach((slide, i) => {
//     if (i === index) {
//       slide.classList.add('active');
//     } else {
//       slide.classList.remove('active');
//     }
//   });
// });

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const index = Math.min(Math.floor(scrollY / windowHeight), slides.length - 1);

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
});
