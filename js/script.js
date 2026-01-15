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

  // Game cards click (Rockstar, Forza, etc.)
  document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
      const link = card.dataset.link;
      if (link) {
        window.open(link, "_blank");
      }
    });
  });
});
