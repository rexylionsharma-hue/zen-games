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
