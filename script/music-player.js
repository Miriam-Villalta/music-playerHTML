let songContainer = document.querySelectorAll(".song-list-el");
let playerContainer = document.querySelector(".player-container");

function showPlayer() {
  playerContainer.classList.toggle("player-container_hidden");
}

for (let i = 0; i < songContainer.length; i++) {
  songContainer[i].addEventListener("click", showPlayer);
  songContainer[i].addEventListener("mouseenter", showPlayIcon);
}
