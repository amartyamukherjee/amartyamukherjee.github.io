(() => {
  const nav = [...document.querySelectorAll('nav a[data-section]')];
  const sections = [...document.querySelectorAll('main > section[id]')];
  function updateNav() {
    let current = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= 160) current = section;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = sections.at(-1);
    nav.forEach(link => {
      const active = link.dataset.section === current?.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }
  let scheduled = false;
  addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(() => { updateNav(); scheduled = false; }); } }, {passive:true});
  updateNav();
  const search = document.getElementById('publication-search');
  if (search) search.addEventListener('input', () => {
    const terms = search.value.toLowerCase().trim().split(/\s+/);
    const cards = [...document.querySelectorAll('.publication')];
    let count = 0;
    cards.forEach(card => { card.hidden = !terms.every(term => card.textContent.toLowerCase().includes(term)); if (!card.hidden) count++; });
    document.getElementById('publication-count').textContent = `${count} ${count === 1 ? "paper" : "papers"}`;
    document.getElementById('no-results').hidden = count > 0;
  });
})();

(() => {
  const root = document.documentElement;
  const swatches = [...document.querySelectorAll('[data-color].color-choice')];
  const toggle = document.getElementById('dark-mode');
  let color = 'blue';
  let mode = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  try {
    const saved = JSON.parse(localStorage.getItem('marty-appearance') || '{}');
    if (['blue', 'purple', 'teal', 'orange'].includes(saved.color)) color = saved.color;
    if (['dark', 'light'].includes(saved.mode)) mode = saved.mode;
  } catch (_) {}
  function apply(save = false) {
    root.dataset.color = color;
    root.dataset.mode = mode;
    swatches.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.color === color)));
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(mode === 'dark'));
      toggle.textContent = mode === 'dark' ? '☀' : '☾';
      toggle.title = mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
    if (save) try { localStorage.setItem('marty-appearance', JSON.stringify({color, mode})); } catch (_) {}
  }
  swatches.forEach(button => button.addEventListener('click', () => {color = button.dataset.color; apply(true);}));
  toggle?.addEventListener('click', () => {mode = mode === 'dark' ? 'light' : 'dark'; apply(true);});
  apply();
})();
