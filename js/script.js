document.addEventListener("DOMContentLoaded", () => {

  const exploreBtn = document.getElementById("exploreBtn");
  const backBtn = document.getElementById("backBtn");

  const home = document.getElementById("home");
  const games = document.getElementById("games");
  const news = document.getElementById("news");
  const community = document.getElementById("community");
  const login = document.getElementById("login");

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
  }

  if (exploreBtn) exploreBtn.onclick = () => showScreen("games");
  if (backBtn) backBtn.onclick = () => showScreen("home");

  // Game cards
  document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
      const link = card.dataset.link;
      if (link) window.open(link, "_blank");
    });
  });

  // Navbar
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const text = link.innerText.toLowerCase();

      if (text === "home") showScreen("home");
      else if (text === "games") showScreen("games");
      else if (text === "news") showScreen("news");
      else if (text === "community") showScreen("community");
      else alert(text.toUpperCase() + " coming soon");
    });
  });

  // Login check
  function checkLogin() {
    const user = localStorage.getItem("zenUser");
    if (user && login) {
      login.classList.remove("active");
      showScreen("home");
    }
  }
  checkLogin();

  window.doLogin = function () {
    const u = document.getElementById("loginUser").value.trim();
    const p = document.getElementById("loginPass").value.trim();
    if (!u || !p) return alert("Fill both fields");

    localStorage.setItem("zenUser", u);
    login.classList.remove("active");
    showScreen("home");
  };

  loadNews();

});


// ===== NEWS =====

async function loadNews() {
  const apiKey = "544bd0fb601bdf1807b5eeb0d043df0f";
  const page = Math.floor(Math.random() * 5) + 1;

  const url = `https://gnews.io/api/v4/search?q=gaming&lang=en&max=5&page=${page}&apikey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const newsContainer = document.getElementById("news");
    if (!newsContainer) return;

    newsContainer.innerHTML = `
      <button id="backFromNews" onclick="showHome()">← Back</button>
      <h2 class="title">Latest Gaming News</h2>
    `;

    data.articles.forEach(item => {
      const div = document.createElement("div");
      div.className = "news-item";
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description || ""}</p>
        <span class="news-date">${new Date(item.publishedAt).toDateString()}</span>
      `;
      newsContainer.appendChild(div);
    });

  } catch (e) {
    console.log("News error", e);
  }
}

function showHome() {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("home").classList.add("active");
}


// ===== COMMUNITY =====

function addPlayer() {
  const name = document.getElementById("playerName").value.trim();
  const game = document.getElementById("favGame").value.trim();
  const list = document.getElementById("playerList");

  if (!name || !game) return;

  const div = document.createElement("div");
  div.className = "wall-item";
  div.innerText = `${name} joined – Loves ${game}`;
  list.prepend(div);

  document.getElementById("playerName").value = "";
  document.getElementById("favGame").value = "";
}

let votes = {};
function vote(game) {
  votes[game] = (votes[game] || 0) + 1;

  let html = "<h4>Results:</h4>";
  for (let g in votes) html += `<p>${g}: ${votes[g]}</p>`;
  document.getElementById("pollResult").innerHTML = html;
}

function postComment() {
  const name = document.getElementById("commentName").value.trim();
  const text = document.getElementById("commentText").value.trim();
  const list = document.getElementById("commentList");

  if (!name || !text) return;

  const div = document.createElement("div");
  div.className = "wall-item";
  div.innerHTML = `<strong>${name}:</strong> ${text}`;
  list.prepend(div);

  document.getElementById("commentName").value = "";
  document.getElementById("commentText").value = "";
}
