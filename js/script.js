document.addEventListener("DOMContentLoaded", () => {

  const exploreBtn = document.getElementById("exploreBtn");
  const backBtn = document.getElementById("backBtn");

  const homeScreen = document.getElementById("home");
  const gamesScreen = document.getElementById("games");

  // 🏠 → 🎮 Explore
  exploreBtn.addEventListener("click", () => {
    homeScreen.style.display = "none";
    gamesScreen.style.display = "block";
  });

  // 🎮 → 🏠 Back
  backBtn.addEventListener("click", () => {
    gamesScreen.style.display = "none";
    homeScreen.style.display = "block";
  });

  // 🔍 Search
  const searchInput = document.getElementById("search");

  // 🎮 Game Detail Elements
  const gameDetail = document.getElementById("game-detail");
  const detailImage = document.getElementById("detail-image");
  const detailTitle = document.getElementById("detail-title");
  const detailInfo = document.getElementById("detail-info");
  const detailDesc = document.getElementById("detail-desc");
  const detailLink = document.getElementById("detail-link");
  const detailBackBtn = document.getElementById("detailBackBtn");

  const gameCards = document.querySelectorAll(".game-card");

  // Search logic
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase().trim();

      gameCards.forEach(card => {
        card.style.display = card.innerText
          .toLowerCase()
          .includes(value)
          ? "block"
          : "none";
      });
    });
  }

  // 🎮 Card → Detail
  gameCards.forEach(card => {
    card.addEventListener("click", () => {
      gamesScreen.style.display = "none";
      gameDetail.style.display = "block";

      detailImage.src = card.dataset.image || "";
      detailTitle.innerText = card.dataset.title || "";
      detailInfo.innerText =
        `${card.dataset.rating || ""} | ${card.dataset.size || ""}`;
      detailDesc.innerText = card.dataset.desc || "";
      detailLink.href = card.dataset.link || "#";
    });
  });

  // 🔙 Detail → Games
  detailBackBtn.addEventListener("click", () => {
    gameDetail.style.display = "none";
    gamesScreen.style.display = "block";
  });

});
