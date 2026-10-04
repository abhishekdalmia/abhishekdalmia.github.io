/**
 * Theme manager: applies theme, persists to localStorage, and initializes the toggle.
 * Depends on THEMES_CONFIG (themes/config.js) and assumes theme CSS is loaded.
 */
(function () {
  const STORAGE_KEY = 'theme';
  const DEFAULT_THEME_ID = 'dark';

  function getThemes() {
    return window.THEMES_CONFIG || [];
  }

  function getStoredThemeId() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const validIds = getThemes().map(function (t) { return t.id; });
      if (stored && validIds.indexOf(stored) !== -1) return stored;
    } catch (_) {}
    return null;
  }

  function applyTheme(themeId) {
    if (!themeId) return;
    document.body.setAttribute('data-theme', themeId);
    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch (_) {}
  }

  function getThemeById(id) {
    return getThemes().find(function (t) { return t.id === id; }) || null;
  }

  function otherThemeId(themeId) {
    return themeId === 'dark' ? 'light' : 'dark';
  }

  function updateToggle(button, themeId) {
    var nextId = otherThemeId(themeId);
    var next = getThemeById(nextId);
    var icon = next ? next.icon : (nextId === 'dark' ? 'fa-moon' : 'fa-sun');
    var label = next ? next.label : (nextId === 'dark' ? 'Dark' : 'Light');
    var text = 'Switch to ' + label.toLowerCase() + ' mode';
    button.innerHTML = '<i class="fas ' + icon + '" aria-hidden="true"></i>';
    button.setAttribute('aria-label', text);
    button.setAttribute('title', text);
  }

  function initThemeToggle(buttonId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    const initialId = getStoredThemeId() || DEFAULT_THEME_ID;
    applyTheme(initialId);
    updateToggle(button, initialId);

    button.addEventListener('click', function () {
      var current = document.body.getAttribute('data-theme') || DEFAULT_THEME_ID;
      var next = otherThemeId(current);
      applyTheme(next);
      updateToggle(button, next);
    });
  }

  // Apply stored theme immediately to avoid flash of default theme
  (function applyStoredThemeEarly() {
    var id = getStoredThemeId();
    if (!id) return;
    applyTheme(id);
    var button = document.getElementById('theme-toggle');
    if (button) updateToggle(button, id);
  })();

  window.ThemeManager = {
    applyTheme: applyTheme,
    getStoredThemeId: getStoredThemeId,
    getThemes: getThemes,
    initThemeToggle: initThemeToggle,
    DEFAULT_THEME_ID: DEFAULT_THEME_ID,
  };
})();
