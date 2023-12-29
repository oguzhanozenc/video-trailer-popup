// selectors

const btn = document.querySelector(".btn");
const closeBtn = document.querySelector(".closebtn");
const trailerContainer = document.querySelector(".trailer_container");
const video = document.querySelector("video");
// event listener

btn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
