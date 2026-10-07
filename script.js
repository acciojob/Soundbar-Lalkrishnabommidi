//your JS code here. If required.
const buttons = document.getElementById("buttons");
let currentAudio = null;

buttons.addEventListener("click", function (event) {
  const button = event.target;

  if (button.classList.contains("stop")) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
    return;
  }

  if (button.classList.contains("btn")) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const sound = button.dataset.sound;

    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  }
});