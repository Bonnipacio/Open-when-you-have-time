// Get name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// Elements
const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const app = document.getElementById("app");
const heartsContainer = document.getElementById("hearts-container");

// Personalize question
if (name) {
  question.textContent = `💖 ${name}, will you be my Valentine? 💖`;
}

// No button messages
const noMessages = [
  "No",
  "Are you sure? 😢",
  "Totoo ba?",
  "Really sure? 🥺",
  "Last chance 😭",
  "Last chance natalaga 😢",
  "Hala nag NO padin sya 😭",
  "😭😭😭😭😭😭",
  "Okay… this hurts 💔",
  "Bebe naman ehh",
  "Hayss"
];

let noHoverCount = 0;
let yesScale = 1;

// No button dodges + changes text + grows Yes button
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noHoverCount++;
  const msgIndex = Math.min(noHoverCount, noMessages.length - 1);
  noBtn.textContent = noMessages[msgIndex];

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// Yes button → final love page
yesBtn.addEventListener("click", () => {
  app.innerHTML = `
    <div class="final">
      <h1>💕 Yay! Happy Valentine’s! 💕</h1>
      <p>${name ? name + "," : ""} I’m really happy you said yes.</p>
      <p>You make my days lighter, my smiles easier, and my heart warmer.</p>
      <p>Thank you for choosing me again, for loving me the way you do, and for spending another Valentine’s Day by my side.</p>
      <p>Every year with you feels special, but this one feels extra meaningful — just You and Me, still choosing each other, still growing, still in love.</p>
      <p>I’m so grateful for you, today and always. 💖</p>
    </div>
  `;
});

// Floating hearts (always active)
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 400);
