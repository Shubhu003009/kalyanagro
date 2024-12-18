const locomotiveScroll = new LocomotiveScroll();

const openSideNav = () => {
  gsap.to(".sideNav", {
    y: 0,
    opacity: 1,
    display: "flex",
    duration: 0.5,
  });
};
const closeSideNav = () => {
  gsap.to(".sideNav", {
    opacity: 0,
    y: -20,
    display: "none",
    duration: 0.5,
  });
};

const body = document.body;
let lastscroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }
  if (currentScroll > 200 && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }
  if (currentScroll < lastscroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
    body.classList.add("nav-scroll-color");
  }

  if (currentScroll < 200) {
    body.classList.remove("nav-scroll-color");
  }

  lastscroll = currentScroll;
});

const product_list = document.querySelectorAll(".product_list li");
const product_showcase = document.querySelector(".product_showcase img");
const all_imgSrc = [
  "/src/assests/img/heroBg.webp",
  "/src/assests/img/heroMobile.webp",
];

product_showcase.src = all_imgSrc[0];
product_list.forEach((product, i) =>
  product.addEventListener("click", () => {
    product_showcase.src = all_imgSrc[i];
  })
);
