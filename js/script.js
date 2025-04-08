// ========== Load Tech Skills HTML ==========
fetch('tech-skills.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('techSkillsContainer').innerHTML = data;
  });

// ========== Fetch Data ==========
async function getData(type) {
  try {
    const response = await fetch('../data.json');
    const result = await response.json();
    if (type === 'project') return result.projects;
    if (type === 'certificate') return result.certificates;
  } catch (e) {
    console.error(e);
  }
}

// ========== Render Certificates ==========
getData('certificate').then(certificates => {
  if (!certificates) return;

  const indicators = certificates.map((_, i) =>
    `<li data-target="#certCarousel" data-slide-to="${i}" class="${i === 0 ? 'active' : ''}"></li>`).join('');

  const items = certificates.map((data, i) => {
    const active = i === 0 ? 'active' : '';
    return `
      <div class="carousel-item ${active}">
        <div class="d-flex flex-column align-items-center">
          <img src="${data.img}" class="img-fluid rounded mb-3" alt="${data.ket}" style="max-height: 500px; object-fit: contain;">
          <div class="text-center pb-5">
            <h5 class="gradient-text mb-2">${data.ket}</h5>
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('certificateContainer').innerHTML = `
    <div id="certCarousel" class="carousel slide" data-ride="carousel" data-interval="2500">
      <div class="carousel-inner">${items}</div>
      <ol class="carousel-indicators">${indicators}</ol>
      <a class="carousel-control-prev d-none d-md-flex" href="#certCarousel" role="button" data-slide="prev">
        <span class="text-white" style="font-size: 2rem;">&lt;</span>
      </a>
      <a class="carousel-control-next d-none d-md-flex" href="#certCarousel" role="button" data-slide="next">
        <span class="text-white" style="font-size: 2rem;">&gt;</span>
      </a>
    </div>`;
});

// ========== TypeIt Animation ==========
new TypeIt("#companionMethods", {
  speed: 60,
  waitUntilVisible: true,
  loop: true,
  loopDelay: 0,
  deleteSpeed: 40,
})
  .type("Hi, I’mm")
  .pause(800)
  .delete(5)
  .pause(800)
  .type(" I'm")
  .pause(1000)
  .type(" Anant!", { delay: 5000 })
  .delete(null)
  .go();

// ========== Contact Form Submission ==========
const form = document.forms["contact"];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      alert("✅ Thank you for contacting me — I’ll reach out to you soon!");
      form.reset();
    })
    .catch(() => {
      alert("❌ Something went wrong. Please try again.");
    });
});

// ========== Download CV Button Handler ==========
document.getElementById("downloadCV").addEventListener("click", function (e) {
  const href = this.getAttribute("href");
  if (!href || href === "NULL" || href.trim().toLowerCase() === "null") {
    e.preventDefault();
    alert("🚧 I am updating my resume! Feel free to reach out meanwhile.");
  }
});

// ========== Vanta Background ==========
let vantaEffect;
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("vanta-canvas");
  if (!el) return console.error("Vanta canvas not found!");

  document.body.setAttribute("data-theme", "dark");

  vantaEffect = VANTA.CLOUDS({
    el,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    backgroundColor: 0x121212,
    skyColor: 0x0e0e1a,
    cloudColor: 0x2c2c3a,
    cloudShadowColor: 0x1a1a26,
    sunColor: 0x9b55f3,
    sunGlareColor: 0xd1b3ff,
  });
});
