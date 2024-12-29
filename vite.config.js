import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/style.scss";` // Hier kannst du globale SCSS/CSS-Dateien importieren
            }
        }
    }
});