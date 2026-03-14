/**
 * Theme registry: add new themes here and create a matching CSS file (themes/<id>.css).
 * Each theme is applied via body[data-theme="<id>"].
 */
const THEMES = [
  { id: 'light', label: 'Light', icon: 'fa-sun' },
  { id: 'dark', label: 'Dark', icon: 'fa-moon' },
  { id: 'star-wars', label: 'Star Wars', icon: 'fa-jedi' },
  { id: 'star-wars-light', label: 'Star Wars (light)', icon: 'fa-jedi' },
  { id: 'harry-potter', label: 'Harry Potter', icon: 'fa-wand-magic-sparkles' },
  { id: 'harry-potter-light', label: 'Harry Potter (light)', icon: 'fa-wand-magic-sparkles' },
];

// For use in script (no module system in this project)
if (typeof window !== 'undefined') {
  window.THEMES_CONFIG = THEMES;
}
