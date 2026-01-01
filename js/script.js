document.addEventListener("DOMContentLoaded", () => {

  const exploreBtn = document.getElementById("exploreBtn");
  const backBtn = document.getElementById("backBtn");
  const detailBackBtn = document.getElementById("detailBackBtn");

  const homeScreen = document.getElementById("home");
  const gamesScreen = document.getElementById("games");
  const gameDetail = document.getElementById("game-detail");

  const searchInput = document.getElementById("search");
  const gameCards = document.querySelectorAll(".game-card");

  const detailImage = document.getElementById("detail-image");
  const detailTitle = document.getElementById("detail-title");
  const detailInfo = document.getElementById("detail-info");
  const detailDesc = document.getElementById("detail-desc");
  const detailLink = document.getElementById("detail-link");

  // HOME → GAMES
  exploreBtn.addEventListener("click", () => {
    homeScreen.classList.remove("active");
    gamesScreen.classList.add("active");
  });

  // GAMES → HOME
  backBtn.addEventListener("click", () => {
    gamesScreen.classList.remove("active");
    homeScreen.classList.add("active");
  });

  // SEARCH
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase().trim();

      gameCards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(value) ? "block" : "none";
      });
    });
  }

  // GAME → DETAIL
  gameCards.forEach(card => {
    card.addEventListener("click", () => {
      if (!card.dataset.title) return;

      gamesScreen.classList.remove("active");
      gameDetail.classList.add("active");

      detailImage.src = card.dataset.image || "";
      detailTitle.innerText = card.dataset.title || "";
      detailInfo.innerText = `${card.dataset.rating || ""} | ${card.dataset.size || ""}`;
      detailDesc.innerText = card.dataset.desc || "";
      detailLink.href = card.dataset.link || "#";
    });
  });

  // DETAIL → GAMES
  detailBackBtn.addEventListener("click", () => {
    gameDetail.classList.remove("active");
    gamesScreen.classList.add("active");
  });

});
