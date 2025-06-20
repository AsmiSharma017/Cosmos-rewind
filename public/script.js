const datePicker = document.getElementById("datePicker");
const eventTitle = document.getElementById("eventTitle");
const eventDesc = document.getElementById("eventDesc");
const eventBox = document.getElementById("eventBox");
const randomBtn = document.getElementById("randomBtn");
const mainMusic = document.getElementById("mainMusic");
const eventTune = document.getElementById("eventTune");

const themedTunes = {
  saturn: "sounds/saturn.mp3",
  moon: "sounds/moon.mp3",
  galaxy: "sounds/galaxy.mp3",
  mars: "sounds/mars.mp3"
};

const fallbackTunes = [
  "sounds/default1.mp3",
  "sounds/default2.mp3"
];

function playTuneBasedOnText(text) {
  const lower = text.toLowerCase();

  for (const key in themedTunes) {
    if (lower.includes(key)) {
      eventTune.src = themedTunes[key];
      mainMusic.pause();
      eventTune.play();
      return;
    }
  }

  const random = fallbackTunes[Math.floor(Math.random() * fallbackTunes.length)];
  eventTune.src = random;
  mainMusic.pause();
  eventTune.play();
}

function fetchEvent(dateStr) {
  const url = `/api/apod?date=${dateStr}`; // Calls your server instead of NASA directly

  fetch(url)
    .then(res => res.json())
    .then(data => {
      eventTitle.textContent = data.title || "🌌 No Title";
      eventDesc.textContent = data.explanation || "No explanation available.";
      eventBox.classList.remove("hidden");

      if (data.media_type === "image") {
        document.body.style.backgroundImage = `url(${data.url})`;
      }

      playTuneBasedOnText((data.title || "") + " " + (data.explanation || ""));
    })
    .catch(err => {
      console.error("Fetch failed:", err);
      eventTitle.textContent = "🌠 No data available";
      eventDesc.textContent = "The cosmos is taking a break today.";
      eventBox.classList.remove("hidden");
    });
}

datePicker.addEventListener("change", () => {
  const selectedDate = datePicker.value;
  fetchEvent(selectedDate);
});

randomBtn.addEventListener("click", () => {
  const start = new Date("1996-06-16");
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const iso = randomDate.toISOString().split("T")[0];
  fetchEvent(iso);
});
