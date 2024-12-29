module.exports = {
  darkMode: 'class',
  content: [
    './docs/**/*.md', // Alle Markdown-Dateien im "docs"-Ordner
    './docs/.vitepress/**/*.{js,ts,vue}', // Dateien in ".vitepress" innerhalb von "docs"
    './.vitepress/**/*.{js,ts,vue}', // Dateien in ".vitepress" außerhalb von "docs"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f5f5f5", // Helle Hintergrundfarbe (Light Mode)
          "100": "#e5e5e5", // Sehr helles Grau
          "200": "#d4d4d4", // Helles Grau
          "300": "#a3a3a3", // Neutral
          "400": "#737373", // Dunkler
          "500": "#525252", // Mittleres Dunkelgrau
          "600": "#404040", // Dunkler (für Texte geeignet)
          "700": "#262626", // Dunkler Hintergrund
          "800": "#171717", // Sehr dunkler Hintergrund
          "900": "#0f0f0f", // Fast schwarz
          "950": "#080808"  // Tiefer Kontrast
        },
        text: {
          light: "#e5e5e5", // Textfarbe im Dark Mode
          muted: "#a3a3a3", // Gedämpfte Textfarbe
          default: "#f5f5f5", // Primäre Textfarbe
          dark: "#262626" // Textfarbe im Light Mode
        },
        background: {
          light: "#ffffff", // Heller Hintergrund für Light Mode
          dark: "#1f1f1f", // Dunkler Hintergrund für Dark Mode
          muted: "#2d2d2d", // Gedämpfter Hintergrund
        },
        border: {
          light: "#d4d4d4", // Heller Rahmen für Light Mode
          dark: "#404040", // Dunkler Rahmen für Dark Mode
        }
      },
      fontFamily: {
        'body': [
          'Inter', 'ui-sans-serif', 'system-ui', '-apple-system',
          'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue',
          'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
        ],
        'sans': [
          'Inter', 'ui-sans-serif', 'system-ui', '-apple-system',
          'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue',
          'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
        ]
      }
    }
  },
  plugins: []
};