document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.getElementById("exploreBtn");
  const backBtn = document.getElementById("backBtn");

  const homeScreen = document.getElementById("home");
  const gamesScreen = document.getElementById("games");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      homeScreen.classList.remove("active");
      gamesScreen.classList.add("active");
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      gamesScreen.classList.remove("active");
      homeScreen.classList.add("active");
    });
  }

  // Game card buttons (Rockstar / others)
  const gameButtons = document.querySelectorAll(".game-card button");

  gameButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
