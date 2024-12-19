const locomotiveScroll = new LocomotiveScroll();

const body = document.body;
let lastscroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }
  if (currentScroll > 50 && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }
  if (currentScroll < lastscroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
    body.classList.add("nav-scroll-color");
  }

  if (currentScroll < 50) {
    body.classList.remove("nav-scroll-color");
  }

  lastscroll = currentScroll;
});
