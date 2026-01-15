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
    const news = document.getElementById("news");

    // sab screens hide
    home.classList.remove("active");
    games.classList.remove("active");
    news.classList.remove("active");

    if (text === "home") {
      home.classList.add("active");
    } else if (text === "games") {
      games.classList.add("active");
    } else if (text === "news") {
      news.classList.add("active");
    } else {
      alert(text.toUpperCase() + " section coming soon!");
    }
  });
});
// Smooth cinematic switch
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  setTimeout(() => {
    document.getElementById(id).classList.add('active');
  }, 100);
}

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => showScreen("games"));
}
if (backBtn) {
  backBtn.addEventListener("click", () => showScreen("home"));
}
async function loadNews() {
  const apiKey = "544bd0fb601bdf1807b5eeb0d043df0f";
  const page = Math.floor(Math.random() * 5) + 1;
const url = `https://gnews.io/api/v4/search?q=gaming&lang=en&max=5&page=${page}&apikey=${apiKey}&_=${Date.now()}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const newsContainer = document.querySelector("#news");
    if (!newsContainer) return;

    // Header reset
    newsContainer.innerHTML = `
      <button id="backFromNews">← Back</button>
      <h2 class="title">Latest Gaming News</h2>
    `;

    data.articles.forEach(item => {
      const div = document.createElement("div");
      div.className = "news-item";
      div.innerHTML = `
        <h3>📰 ${item.title}</h3>
        <p>${item.description || ""}</p>
        <span class="news-date">${new Date(item.publishedAt).toDateString()}</span>
      `;
      newsContainer.appendChild(div);
    });

  } catch (e) {
    console.log("News load error:", e);
  }
}

// Page load par real news fetch
document.addEventListener("DOMContentLoaded", loadNews);
// ---- COMMUNITY FEATURES ----

// Player Join
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

// Poll
let votes = {};
function vote(game) {
  votes[game] = (votes[game] || 0) + 1;

  let html = "<h4>Results:</h4>";
  for (let g in votes) {
    html += `<p>${g}: ${votes[g]} votes</p>`;
  }
  document.getElementById("pollResult").innerHTML = html;
}

// Comments
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
