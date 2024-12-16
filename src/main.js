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
