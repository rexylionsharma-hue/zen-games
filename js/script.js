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
// Navbar links
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = link.innerText.toLowerCase();

    const home = document.getElementById("home");
    const games = document.getElementById("games");

    // sab screens hide
    home.classList.remove("active");
    games.classList.remove("active");

    if (text === "home") {
      home.classList.add("active");
    } else if (text === "games") {
      games.classList.add("active");
    } else {
      alert(text.toUpperCase() + " section coming soon!");
    }
  });
});
