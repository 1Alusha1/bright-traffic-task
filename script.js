const timerElement = document.querySelector(".timer");
const secondFooter = document.querySelector(".second-footer");
const secondHeader = document.querySelector(".second-header");
const firstFooter = document.querySelector(".first-footer");
const firstHeader = document.querySelector(".first-header");
const scrollToTopBtn = document.querySelector(".minimal-btn");

let remainingMilliseconds = 90000;
const interval = 1000;
let toggle = true;

function startTimer() {
  const timer = setInterval(() => {
    remainingMilliseconds -= interval;

    const minutes = Math.floor(remainingMilliseconds / 60000);
    const seconds = Math.floor((remainingMilliseconds % 60000) / 1000);

    timerElement.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (remainingMilliseconds <= 0) {
      clearInterval(timer);
      secondFooter.classList.toggle("hide", !toggle);
      secondHeader.classList.toggle("hide", !toggle);
      firstFooter.classList.toggle("hide", toggle);
      firstHeader.classList.toggle("hide", toggle);

      remainingMilliseconds = 90000;
      toggle = !toggle;

      startTimer();
    }
  }, interval);
}

startTimer();


scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
