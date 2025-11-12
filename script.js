// === Alert saat form dikirim ===
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan kamu sudah terkirim 💌");
    form.reset();
  });
}

// === INTERAKSI 2: Ubah background dengan tombol ===
const themeBtn = document.createElement("button");
themeBtn.textContent = "Ganti Tema 🎨";
themeBtn.classList.add("theme-btn");
document.body.appendChild(themeBtn);

let isPastel = true;
themeBtn.addEventListener("click", function () {
  if (isPastel) {
    document.body.style.background = "linear-gradient(to right, #fce1ec, #e5d1f5)";
  } else {
    document.body.style.background = "linear-gradient(to right, #f8e8ff, #fde3f3)";
  }
  isPastel = !isPastel;
});

// === INTERAKSI 3 (bonus): Menampilkan jam otomatis ===
const clock = document.createElement("p");
clock.classList.add("clock");
document.body.appendChild(clock);

function updateClock() {
  const now = new Date();
  clock.textContent = `Waktu sekarang: ${now.toLocaleTimeString()}`;
}
setInterval(updateClock, 1000);
updateClock();
