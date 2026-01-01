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
// 🔍 Search Games
const searchInput = document.getElementById("search");
const gameCards = document.querySelectorAll(".game-card");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  gameCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});
