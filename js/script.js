const exploreBtn = document.getElementById("exploreBtn");
const backBtn = document.getElementById("backBtn");

const homeScreen = document.getElementById("home");
const gamesScreen = document.getElementById("games");

// Explore Games → Games Screen
exploreBtn.addEventListener("click", () => {
  homeScreen.classList.remove("active");
  gamesScreen.classList.add("active");
});

// Back → Home Screen
backBtn.addEventListener("click", () => {
  gamesScreen.classList.remove("active");
  homeScreen.classList.add("active");
});
// 🔍 Search Games (FINAL & CLEAN)
const searchInput = document.getElementById("search");
const gameGrid = document.querySelector(".game-grid");
const gameCards = document.querySelectorAll(".game-card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase().trim();

    gameCards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(value)) {
        card.style.display = "block";
        gameGrid.prepend(card); // ⭐ matched game upar
      } else {
        card.style.display = "none";
      }
    });
  });
}
