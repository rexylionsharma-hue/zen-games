const screens = document.querySelectorAll(".screen");
const show = id => {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
};

exploreBtn.onclick = () => show("games");
backBtn.onclick = () => show("home");
detailBackBtn.onclick = () => show("games");

const cards = document.querySelectorAll(".game-card");

cards.forEach(card => {
  card.onclick = () => {
    detailImage.src = card.dataset.image;
    detailTitle.innerText = card.dataset.title;
    detailInfo.innerText = `${card.dataset.rating} | ${card.dataset.size}`;
    detailDesc.innerText = card.dataset.desc;
    detailLink.href = card.dataset.link;
    show("game-detail");
  };
});

search.oninput = () => {
  const val = search.value.toLowerCase();
  cards.forEach(c =>
    c.style.display = c.innerText.toLowerCase().includes(val)
      ? "block"
      : "none"
  );
};
