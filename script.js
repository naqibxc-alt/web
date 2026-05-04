// =======================
// COUNTDOWN TIMER (18 OGOS 2026)
// =======================
const eventDate = new Date("August 18, 2026 00:00:00").getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // kalau dah lepas tarikh event
  if (distance <= 0) {
    document.getElementById("countdown").innerText = "EVENT BERMULA!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerText =
    days + " HARI " + hours + " JAM " + minutes + " MINIT " + seconds + " SAAT";
}, 1000);


// =======================
// RANDOM PARTICIPANT COUNTER
// =======================
document.addEventListener("DOMContentLoaded", () => {
  updateCounter();
  setInterval(updateCounter, 5000);
});

async function updateCounter() {
  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbypNoKSF551wd0-BoHbLIVhl-KxYVjp6HIi_DOvBH_TCoecsXO5Vt6ZPptq96cfGVn0/exec");
    const data = await res.json();

    const el = document.getElementById("counter");
    if (!el) return;

    el.innerText = data.total || 0;

  } catch (err) {
    console.log("Counter error:", err);
  }
}