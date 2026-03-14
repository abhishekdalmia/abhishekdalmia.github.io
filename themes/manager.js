/**
 * Theme manager: applies theme, persists to localStorage, and initializes the dropdown.
 * Depends on THEMES_CONFIG (themes/config.js) and assumes theme CSS is loaded.
 */
(function () {
  const STORAGE_KEY = 'theme';
  const DEFAULT_THEME_ID = 'light';

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

  function initThemeDropdown(triggerId, panelId) {
    const trigger = document.getElementById(triggerId);
    const panel = document.getElementById(panelId);
    if (!trigger || !panel) return;

    const themes = getThemes();
    const storedId = getStoredThemeId();
    const initialId = storedId || DEFAULT_THEME_ID;
    applyTheme(initialId);
    updateTriggerLabel(trigger, getThemeById(initialId));

    panel.innerHTML = '';
    themes.forEach(function (theme) {
      const option = document.createElement('button');
      option.type = 'button';
      option.role = 'option';
      option.className = 'theme-dropdown-option';
      option.dataset.themeId = theme.id;
      option.setAttribute('aria-selected', theme.id === initialId ? 'true' : 'false');
      option.innerHTML = '<i class="fas ' + theme.icon + '" aria-hidden="true"></i><span>' + theme.label + '</span>';
      option.addEventListener('click', function () {
        selectTheme(theme.id);
        panel.setAttribute('hidden', '');
        trigger.setAttribute('aria-expanded', 'false');
      });
      panel.appendChild(option);
    });

    function updateTriggerLabel(tr, theme) {
      if (!theme) return;
      var icon = tr.querySelector('.theme-dropdown-trigger-icon');
      var label = tr.querySelector('.theme-dropdown-label');
      if (icon) icon.className = 'theme-dropdown-trigger-icon fas ' + theme.icon;
      if (label) label.textContent = theme.label;
      panel.querySelectorAll('.theme-dropdown-option').forEach(function (opt) {
        opt.setAttribute('aria-selected', opt.dataset.themeId === theme.id ? 'true' : 'false');
      });
    }

    function selectTheme(themeId) {
      applyTheme(themeId);
      updateTriggerLabel(trigger, getThemeById(themeId));
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = !panel.hasAttribute('hidden');
      if (isOpen) {
        panel.setAttribute('hidden', '');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        panel.removeAttribute('hidden');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    document.addEventListener('click', function () {
      panel.setAttribute('hidden', '');
      trigger.setAttribute('aria-expanded', 'false');
    });
    panel.addEventListener('click', function (e) { e.stopPropagation(); });
  }

  // Apply stored theme immediately to avoid flash of default theme
  (function applyStoredThemeEarly() {
    var id = getStoredThemeId();
    if (id) applyTheme(id);
  })();

  window.ThemeManager = {
    applyTheme: applyTheme,
    getStoredThemeId: getStoredThemeId,
    getThemes: getThemes,
    initThemeDropdown: initThemeDropdown,
    DEFAULT_THEME_ID: DEFAULT_THEME_ID,
  };
})();
