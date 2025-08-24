import '../styles/globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-jetbrains-mono'
});

export const metadata = {
    title: {
        template: '%s | Exonov Quantum',
        default: 'Exonov Quantum - Plateforme de Simulation Quantique Avancée'
    },
    description: 'Plateforme révolutionnaire de simulation quantique. Explorez les mystères de la physique quantique avec des outils de pointe, intégration n8n et workflows automatisés.',
    keywords: [
        'quantum computing', 
        'simulation quantique', 
        'physique quantique', 
        'exonov', 
        'quantum algorithms', 
        'qubits',
        'n8n workflows',
        'quantum dashboard',
        'hadamard',
        'grover',
        'shor algorithm',
        'quantum teleportation'
    ],
    authors: [{ name: 'Exonov Quantum Team', url: 'https://quantum.exonovnow.com' }],
    creator: 'HADAMS - Exonov Quantum',
    publisher: 'Exonov Quantum',
    robots: 'index, follow',
    metadataBase: new URL('https://quantum.exonovnow.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Exonov Quantum - Simulation Quantique Avancée avec n8n',
        description: 'Plateforme révolutionnaire de simulation quantique avec dashboard n8n intégré, algorithmes quantiques avancés et workflows automatisés.',
        type: 'website',
        locale: 'fr_FR',
        url: 'https://quantum.exonovnow.com',
        siteName: 'Exonov Quantum',
        images: [
            {
                url: '/quantum-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Exonov Quantum - Interface de Simulation Quantique',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exonov Quantum - Simulation Quantique Avancée',
        description: 'Plateforme révolutionnaire de simulation quantique avec n8n intégré',
        images: ['/quantum-twitter-card.jpg'],
        creator: '@exonov',
        site: '@exonov'
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
        userScalable: true,
    },
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#7c3aed' },
        { media: '(prefers-color-scheme: dark)', color: '#1e1b4b' }
    ],
    manifest: '/manifest.json',
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
    },
    category: 'technology',
};

export default function RootLayout({ children }) {
    return (
        <html 
            lang="fr" 
            className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
            suppressHydrationWarning={true}
        >
            <head>
                <link rel="icon" href="/quantum-favicon.svg" sizes="any" />
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                
                {/* Preconnect pour optimiser les performances */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                
                {/* Structured Data pour SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Exonov Quantum",
                            "description": "Plateforme révolutionnaire de simulation quantique avec n8n intégré",
                            "url": "https://quantum.exonovnow.com",
                            "applicationCategory": "ScientificApplication",
                            "operatingSystem": "Web Browser",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "EUR"
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "Exonov Quantum",
                                "url": "https://quantum.exonovnow.com"
                            }
                        })
                    }}
                />
            </head>
            <body 
                className="antialiased text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-inter overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-100"
                suppressHydrationWarning={true}
            >
                {/* Conteneur principal avec z-index approprié */}
                <div className="relative min-h-screen z-10">
                    <main className="w-full relative z-20">{children}</main>
                </div>
                
                {/* Effets de fond quantiques améliorés */}
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    {/* Gradients radiaux principaux */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_50%)] animate-pulse"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.12),transparent_60%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.12),transparent_60%)]"></div>
                    
                    {/* Effet de particules quantiques */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    
                    {/* Grille quantique subtile */}
                    <div 
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147,51,234,0.3) 1px, transparent 0)`,
                            backgroundSize: '50px 50px'
                        }}
                    ></div>
                </div>

                {/* Loader pour la performance */}
                <div id="quantum-loader" className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-purple-300 text-sm">Initialisation quantique...</p>
                    </div>
                </div>

                {/* Script pour masquer le loader */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.addEventListener('load', function() {
                                const loader = document.getElementById('quantum-loader');
                                if (loader) {
                                    setTimeout(() => {
                                        loader.style.opacity = '0';
                                        setTimeout(() => {
                                            loader.remove();
                                        }, 500);
                                    }, 100);
                                }
                            });
                        `
                    }}
                />
            </body>
        </html>
    );
}
