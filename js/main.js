document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('lootlizard-theme') || 'dark';
  applyTheme(savedTheme);

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.faq-item').classList.toggle('open');
    });
  });
});

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  updateToggleIcon(theme);
}

function updateToggleIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  // Show sun icon when in dark mode (click to go light),
  // moon icon when in light mode (click to go dark).
  btn.textContent = theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
  btn.setAttribute('aria-label',
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('lootlizard-theme', next);
  applyTheme(next);
}

window.toggleTheme = toggleTheme;

function scrollCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const scrollAmount = 220; // phone width + gap
  track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
window.scrollCarousel = scrollCarousel;
