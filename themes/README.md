# Themes

The site has two themes: **Dark** (default) and **Light**. They are applied via `body[data-theme="dark"]` or `body[data-theme="light"]`. Each theme is a CSS file that overrides the design tokens used in `styles.css`.

The choice is stored in `localStorage` under the key `theme`. A saved theme that is no longer in the registry is ignored, and the site falls back to dark.

## Adding a new theme

1. **Create** `themes/<theme-id>.css` (e.g. `themes/ocean.css`).
2. **Define** variables for the selector `[data-theme="<theme-id>"]`. Use the same variable names as in other theme files:
   - `--font-family`
   - `--primary-color`
   - `--text-color`
   - `--light-text`
   - `--background`
   - `--section-bg`
   - `--nav-bg`
   - `--hero-bg`
   - `--border-color`
3. **Register** the theme in `themes/config.js`: add an entry to the `THEMES` array with `id`, `label`, and `icon` (Font Awesome class, e.g. `fa-star`).
4. **Load** the CSS in `index.html`: add `<link rel="stylesheet" href="themes/<theme-id>.css">`.

The nav button only toggles between dark and light, and it shows the mode a click will switch to. A third theme also needs a change in `themes/manager.js`. Persistence still uses the theme id stored in `localStorage`.
