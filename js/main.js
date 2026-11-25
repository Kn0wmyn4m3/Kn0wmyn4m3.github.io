import { PROJECTS } from "./projects.js";

const ICONS = {
  spreadsheet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9M3 15h18"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>`,
  beam: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14h18"/><path d="M5 14 3 19h4l-2-5Z"/><path d="M19 14l-2 5h4l-2-5Z"/><path d="M12 5v7m0 0-2.5-2.5M12 12l2.5-2.5"/></svg>`,
  scraper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18"/></svg>`,
  external: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4h5v5M16 4l-7 7M15 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"/></svg>`,
  code: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 6-4 4 4 4M13 6l4 4-4 4M11 4l-2 12"/></svg>`,
  check: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4.5 10.5 3.5 3.5 7.5-8"/></svg>`,
};

const THEME_KEY = "kn0wmyn4m3-theme";

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  applyTheme(theme);

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
}

function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  grid.innerHTML = list
    .map((project) => {
      const tags = project.techStack
        .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
        .join("");

      const highlights = project.highlights
        .map((h) => `<li>${ICONS.check}<span>${escapeHtml(h)}</span></li>`)
        .join("");

      const demoBtn = project.liveDemoUrl
        ? `<a class="btn btn-primary btn-sm" href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer">Live Demo ${ICONS.external}</a>`
        : "";

      const sampleBtn = project.sampleUrl
        ? `<a class="btn btn-ghost btn-sm" href="${project.sampleUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.sampleLabel)} ${ICONS.external}</a>`
        : "";

      return `
        <article class="project-card accent-${project.accent}">
          <div class="project-header">
            <div class="project-icon">${ICONS[project.icon] || ICONS.code}</div>
            <div class="project-meta">
              <span class="project-category">${escapeHtml(project.categoryLabel)}</span>
              <span class="project-verified">${escapeHtml(project.testBadge)}</span>
            </div>
          </div>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-tagline">${escapeHtml(project.tagline)}</p>
          <ul class="project-highlights">${highlights}</ul>
          <div class="tag-list">${tags}</div>
          <div class="project-actions">
            ${demoBtn}
            <a class="btn ${project.liveDemoUrl ? "btn-secondary" : "btn-primary"} btn-sm" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">${ICONS.code} View Code</a>
            ${sampleBtn}
          </div>
        </article>
      `;
    })
    .join("");
}

function initFilters() {
  const bar = document.getElementById("project-filters");
  if (!bar) return;

  bar.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-filter]");
    if (!btn) return;
    bar.querySelectorAll("button[data-filter]").forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    renderProjects(btn.dataset.filter);
  });
}

function initCopyEmail() {
  const btn = document.getElementById("copy-email-btn");
  const status = document.getElementById("copy-status");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const email = btn.dataset.email || "ytxy0114@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      if (status) status.textContent = "Email copied to clipboard!";
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy Email";
        if (status) status.textContent = "";
      }, 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects("all");
  initFilters();
  initCopyEmail();
  initMobileNav();
});
