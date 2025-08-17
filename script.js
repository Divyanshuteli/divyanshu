console.log("Welcome to my GitHub-hosted site! 🚀");

// ==== Real-Time Clock ====
setInterval(() => {
  const now = new Date();
  console.log(`⏰ Current Time: ${now.toLocaleTimeString()}`);
}, 1000);

// ==== Random Quotes ====
const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different."
];
setTimeout(() => {
  alert("💡 Quote of the Day:\n" + quotes[Math.floor(Math.random() * quotes.length)]);
}, 2000);

// ==== Website Visit Counter ====
let visits = localStorage.getItem("site_visits") || 0;
visits++;
localStorage.setItem("site_visits", visits);
console.log(`👀 You have visited this site ${visits} times.`);
if (visits === 1) {
  alert("🎉 Welcome to your first visit!");
} else {
  alert(`👋 Welcome back! This is your ${visits}th visit.`);
}

// ==== Random Color Change on Hover (Header) ====
document.querySelector("header").addEventListener("mouseenter", () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`;
  document.querySelector("header").style.backgroundColor = randomColor;
});
document.querySelector("header").addEventListener("mouseleave", () => {
  document.querySelector("header").style.backgroundColor = "";
});
