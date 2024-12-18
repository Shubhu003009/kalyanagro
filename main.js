const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

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
