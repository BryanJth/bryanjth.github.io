// Navbar background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  nav.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("is-open");
    nav.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Rotating role text in hero
const roleEl = document.getElementById("roleRotate");
const roles = ["Data Scientist", "Machine Learning Enthusiast", "Computer Vision Researcher", "AI Builder"];
let roleIdx = 0;
if (roleEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    roleEl.classList.add("is-out");
    setTimeout(() => {
      roleIdx = (roleIdx + 1) % roles.length;
      roleEl.textContent = roles[roleIdx];
      roleEl.classList.remove("is-out");
    }, 350);
  }, 2600);
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project case-study showcase
const projectStage = document.querySelector(".projects__stage");
const projectControls = document.querySelector(".projects__controls");
const projectCards = Array.from(projectStage.querySelectorAll(".project"));
const projectLinks = Array.from(document.querySelectorAll(".projects__index a"));
const projectPosition = projectControls.querySelector("[data-position]");
const currentProjectTitle = projectControls.querySelector("[data-current-title]");
const projectNumber = (number) => String(number).padStart(2, "0");
let activeProject = 0;

function showProject(index) {
  activeProject = index;
  projectCards.forEach((card, i) => { card.hidden = i !== index; });
  projectLinks.forEach((link, i) => {
    if (i === index) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
  projectPosition.textContent = `${projectNumber(index + 1)} / ${projectNumber(projectCards.length)}`;
  currentProjectTitle.textContent = `, ${projectCards[index].querySelector("h3").textContent}`;
}

function selectProjectFromHash() {
  const index = projectCards.findIndex((card) => `#${card.id}` === window.location.hash);
  if (index >= 0) showProject(index);
}

projectControls.querySelectorAll("[data-step]").forEach((button) => {
  button.addEventListener("click", () => {
    const next = (activeProject + Number(button.dataset.step) + projectCards.length) % projectCards.length;
    showProject(next);
    if (projectCards.some((card) => `#${card.id}` === window.location.hash)) {
      history.replaceState(null, "", `#${projectCards[next].id}`);
    }
  });
});
projectLinks.forEach((link, index) => {
  // Reveal the anchor's target before the browser follows the link.
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    showProject(index);
  });
});
window.addEventListener("hashchange", selectProjectFromHash);
showProject(0);
selectProjectFromHash();
projectStage.classList.add("is-interactive");
projectControls.hidden = false;
