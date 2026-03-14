# Themes

Themes are applied via `body[data-theme="<id>"]`. Each theme is a single CSS file that overrides the design tokens used in `styles.css`.

Branded themes (e.g. Star Wars, Harry Potter) can have both a dark and a light variant (e.g. `star-wars`, `star-wars-light`) so the same look can be used on light or dark backgrounds. The generic **Light** and **Dark** themes stay as the default options.

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

No other code changes are required; the dropdown and persistence are driven by the config.
