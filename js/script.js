// Toggle header navigation
const header = document.querySelector("header");
const toggleMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
console.log(header);

toggleMenu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  closeMenu.classList.toggle("d-none");
});
closeMenu.addEventListener("click", () => {
  header.classList.remove("nav-open");
  closeMenu.classList.add("d-none");
});

// Sticky navigation
const secHero = document.querySelector(".hero-sec");
const scrollTop = document.querySelector(".to-top");
const obs = new IntersectionObserver(
  (entires) => {
    const ent = entires[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
      scrollTop.classList.remove("d-none");
    } else {
      header.classList.remove("sticky");
      scrollTop.classList.add("d-none");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(secHero);

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//! Animate scroll section
const sections = document.querySelectorAll("section");
console.log(sections);
const observers = new IntersectionObserver(
  (entries) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) {
        ent.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0,
  }
);
sections.forEach((sec) => {
  observers.observe(sec);
})