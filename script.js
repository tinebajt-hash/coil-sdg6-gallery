/* ============================================================
   COIL · SDG 12 – interaktivnost
   - mobilni meni
   - filtriranje fotografij po avtorjih (Dijak A / Dijak B)
   - lightbox (povečava fotografij)
   - interaktivni kviz s točkovanjem
   - anketa z rezultati (shranjeni v localStorage)
   ============================================================ */

"use strict";

/* ---------- Mobilni meni ---------- */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  // Zapri meni po kliku na povezavo
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

/* ---------- Filtriranje fotografij ---------- */
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryCards = document.querySelectorAll("#gallery-grid .card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter; // "vsi" | "dijakA" | "dijakB"
    galleryCards.forEach((card) => {
      const show = filter === "vsi" || card.classList.contains(filter);
      card.classList.toggle("hidden", !show);
    });
  });
});

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    const caption = card.querySelector("figcaption");
    if (!img || !lightbox) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

document.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ---------- Kviz ---------- */
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

const QUIZ_ANSWERS = {
  q1: "b", // plastika razgrajuje najdlje
  q2: "a", // Reduce, Reuse, Recycle
  q3: "c", // približno tretjina hrane se zavrže
};

if (quizForm && quizResult) {
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(quizForm);
    let score = 0;
    const total = Object.keys(QUIZ_ANSWERS).length;

    for (const [name, correct] of Object.entries(QUIZ_ANSWERS)) {
      if (data.get(name) === correct) score++;
    }

    if (score === total) {
      quizResult.textContent = `🌟 Odlično! ${score}/${total} – pravi poznavalec odgovorne porabe!`;
      quizResult.className = "quiz-result correct";
    } else if (score >= Math.ceil(total / 2)) {
      quizResult.textContent = `👍 Dobro! ${score}/${total}. Preveri še zadnje pravilne odgovore.`;
      quizResult.className = "quiz-result";
    } else {
      quizResult.textContent = `🙂 ${score}/${total}. Ni slabo – zdaj že veš več kot prej!`;
      quizResult.className = "quiz-result wrong";
    }
  });
}

/* ---------- Anketa (localStorage) ---------- */
const POLL_KEY = "sdg12-poll-v1";
const POLL_LABELS = {
  hrana: "Ne mečem hrane stran",
  oblacila: "Kupujem rabljena oblačila",
  popravila: "Stvari popravljam",
  brembalaza: "Izbiram brez embalaže",
};

const pollButtons = document.querySelectorAll(".poll-btn");
const pollResults = document.getElementById("poll-results");

function loadPoll() {
  try {
    return JSON.parse(localStorage.getItem(POLL_KEY)) || {};
  } catch {
    return {};
  }
}

function savePoll(votes) {
  try {
    localStorage.setItem(POLL_KEY, JSON.stringify(votes));
  } catch {
    /* v privatnem načinu brskalnika morda ni shrambe – ni problem */
  }
}

function renderPoll(votes) {
  if (!pollResults) return;
  const total = Object.values(votes).reduce((s, n) => s + n, 0);
  pollResults.innerHTML = "";

  for (const [key, label] of Object.entries(POLL_LABELS)) {
    const n = votes[key] || 0;
    const pct = total ? Math.round((n / total) * 100) : 0;

    const row = document.createElement("div");
    row.className = "poll-bar";
    row.innerHTML = `
      <span class="bar-label">${label}: <strong>${n}</strong></span>
      <span class="bar-track"><span class="bar-fill" style="width:${pct}%"></span></span>
      <span>${pct} %</span>`;
    pollResults.appendChild(row);
  }
}

if (pollButtons.length && pollResults) {
  let votes = loadPoll();
  const alreadyVoted = Object.keys(votes).length > 0;

  if (alreadyVoted) {
    renderPoll(votes);
    pollButtons.forEach((b) => (b.disabled = true));
  }

  pollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const option = btn.dataset.option;
      votes[option] = (votes[option] || 0) + 1;
      savePoll(votes);
      renderPoll(votes);
      pollButtons.forEach((b) => (b.disabled = true));
    });
  });
}

/* ---------- Leto v nogi (samodejno) ---------- */
const year = new Date().getFullYear();
document.querySelectorAll(".footer p")[0]?.replaceChildren(
  document.createTextNode(`© ${year} COIL projekt · SDG 12 · Narejeno z ❤️ za trajnejši svet.`)
);
