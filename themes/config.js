/**
 * Theme registry: add new themes here and create a matching CSS file (themes/<id>.css).
 * Each theme is applied via body[data-theme="<id>"].
 */
const THEMES = [
  { id: 'dark', label: 'Dark', icon: 'fa-moon' },
  { id: 'light', label: 'Light', icon: 'fa-sun' },
];

// For use in script (no module system in this project)
if (typeof window !== 'undefined') {
  window.THEMES_CONFIG = THEMES;
}
