function startSurprise() {
  document.querySelector("button").style.display = "none";
  const msg = document.getElementById("message");
  msg.style.display = "block";
  msg.classList.add("animate-fade");

  const music = document.getElementById("music");
  music.play();

  // Balon
  for (let i = 0; i < 25; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 8000);
  }

  // Confetti
  for (let i = 0; i < 60; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 7000);
  }
}

function getRandomColor() {
  const colors = ["#ffb6c1", "#ff69b4", "#ffa07a", "#ffc0cb", "#f08080", "#f0e68c", "#dda0dd", "gold"];
  return colors[Math.floor(Math.random() * colors.length)];
}
