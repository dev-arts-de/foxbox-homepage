export default {
    title: 'Foxbox',
    description: 'Cloud Speicher mit AI Assistenz',
    logo: '/logo.png',
    head: [
        ['link', { rel: 'icon',type: 'image/x-icon', href: '/favicon.ico' }]
    ],
    vite: {
        build: {
            rollupOptions: {
                external: ['bg.mp4', 'bg2.mp4', 'bg-light.mp4', 'logo-dark.png', 'logo.png'], // If needed, explicitly mark these as external
            }
        }
    },
    themeConfig: {
        logo: {
            light: '/logo-dark.png',
            dark: '/logo.png'
        },
        siteTitle: "Foxbox",
        nav: [
            { text: 'Startseite', link: '/' },
            { text: 'Einloggen', link: 'https://app.foxbox.de/login' },
            {
                text: 'Menu',
                items: [
                    { text: 'Mehr Erfahren', link: '/more-info' },
                    { text: 'Preise', link: '/pricing' },
                    { text: 'Impressum', link: 'https://shopitech.de/impressum/' },
                    { text: 'Shoptiech', link: 'https://www.shopitech.de' }
                ]
            }
        ]
    }
}