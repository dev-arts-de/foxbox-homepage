import DefaultTheme from 'vitepress/theme';
import HeroSection from './components/HeroSection.vue';
import ContentSection from './components/ContentSection.vue';
import CreatePortfolioSection from './components/CreatePortfolioSection.vue';
import FooterComponent from './components/FooterComponent.vue';
import MoreInfoSection from './components/MoreInfoSection.vue';
import PricingSection from './components/PricingSection.vue';
import './style.css'; // Importiere die Datei mit Tailwind-Stilen

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('HeroSection', HeroSection); // Registriere die Komponente
        app.component('ContentSection', ContentSection); // Registriere die Komponente
        app.component('CreatePortfolioSection', CreatePortfolioSection); // Registriere die Komponente
        app.component('FooterComponent', FooterComponent); // Registriere die Komponente
        app.component('MoreInfoSection', MoreInfoSection); // Registriere die Komponente
        app.component('PricingSection', PricingSection); // Registriere die Komponente
    }
};