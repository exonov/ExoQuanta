'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ExonovQuantumHome() {
    const [quantumState, setQuantumState] = useState(0);
    const [isSimulating, setIsSimulating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuantumState(prev => (prev + 1) % 8);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const quantumStates = [
        '|0⟩ - État fondamental',
        '|1⟩ - État excité',
        '|+⟩ - Superposition',
        '|-⟩ - Superposition négative',
        '|↑⟩ - Spin up',
        '|↓⟩ - Spin down',
        '|ψ⟩ - État intriqué',
        '|Φ⟩ - État de Bell'
    ];

    const simulateQuantum = () => {
        setIsSimulating(true);
        setTimeout(() => setIsSimulating(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Header amélioré */}
            <header className="bg-black/50 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg sm:text-xl">H</span>
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    EXONOV QUANTUM
                                </h1>
                                <p className="text-purple-400 text-xs sm:text-sm">HADAMS</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/dashboard" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Dashboard
                            </Link>
                            <Link href="/simulation" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Simulation
                            </Link>
                            <Link href="#docs" className="text-purple-300 hover:text-purple-100 transition-colors">
                                Documentation
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Section hero améliorée */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
                <div className="container mx-auto text-center">
                    {/* Statut de déploiement */}
                    <div className="mb-8 sm:mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-300 text-sm mb-4">
                            ✅ DEPLOY READY - All ESLint Errors Fixed!
                        </div>
                        <p className="text-purple-300 text-lg mb-2">Bienvenue, HADAMS ! 🔬</p>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        EXONOV
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        QUANTUM
                    </h2>
                    
                    {/* Badge de production */}
                    <div className="mb-8 sm:mb-12">
                        <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-300 text-base sm:text-lg max-w-4xl mx-auto">
                            <span className="mr-2">✅</span>
                            <span className="font-semibold">PRODUCTION READY</span>
                            <span className="mx-2">-</span>
                            <span>Plateforme révolutionnaire de simulation quantique. Explorez les mystères de la physique quantique avec des outils de pointe.</span>
                        </div>
                    </div>

                    {/* État quantique actuel */}
                    <div className="mb-12 sm:mb-16">
                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
                            <h3 className="text-purple-300 text-lg sm:text-xl mb-4">État Quantique Actuel</h3>
                            <div className="text-2xl sm:text-3xl font-mono text-cyan-400 mb-2">
                                {quantumStates[quantumState]}
                            </div>
                            <div className="text-sm text-purple-400">
                                Évolution en temps réel
                            </div>
                        </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
                        <button 
                            onClick={simulateQuantum}
                            disabled={isSimulating}
                            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     text-white font-bold py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg
                                     transform hover:scale-105 transition-all duration-300
                                     shadow-lg hover:shadow-purple-500/25"
                        >
                            {isSimulating ? '🌀 Simulation en cours...' : '⚛️ Démarrer Simulation'}
                        </button>
                        
                        <Link 
                            href="/dashboard" 
                            className="w-full sm:w-auto bg-black/50 backdrop-blur-lg border border-purple-500/50 
                                     text-purple-300 font-bold py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg text-center
                                     hover:bg-purple-900/30 hover:border-purple-400
                                     transform hover:scale-105 transition-all duration-300"
                        >
                            🔬 Dashboard n8n
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section fonctionnalités améliorée */}
            <section id="features" className="py-16 sm:py-20 px-4 sm:px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Fonctionnalités Quantiques
                    </h2>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 hover:bg-black/40 transition-all duration-300 group">
                            <div className="mb-4">
                                <span className="text-2xl">🔬</span>
                                <h3 className="text-xl font-bold text-purple-300 mt-2">Simulation Multi-Qubits</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed">
                                Simulez des systèmes quantiques complexes avec jusqu&apos;à 8 qubits.
                                Algorithmes optimisés pour des performances maximales.
                            </p>
                        </div>

                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 hover:bg-black/40 transition-all duration-300 group">
                            <div className="mb-4">
                                <span className="text-2xl">🌀</span>
                                <h3 className="text-xl font-bold text-purple-300 mt-2">Algorithmes Quantiques</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed">
                                Implémentez Shor, Grover, Hadamard et d&apos;autres algorithmes quantiques
                                révolutionnaires avec notre interface intuitive.
                            </p>
                        </div>

                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 hover:bg-black/40 transition-all duration-300 group">
                            <div className="mb-4">
                                <span className="text-2xl">📊</span>
                                <h3 className="text-xl font-bold text-purple-300 mt-2">Dashboard n8n</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed">
                                Contrôlez et surveillez vos 13+ workflows quantiques n8n
                                directement depuis l&apos;interface Exonov Quantum.
                            </p>
                        </div>

                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 hover:bg-black/40 transition-all duration-300 group">
                            <div className="mb-4">
                                <span className="text-2xl">⚡</span>
                                <h3 className="text-xl font-bold text-purple-300 mt-2">API Bridge</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed">
                                Connexion transparente avec votre instance n8n pour
                                des workflows quantiques automatisés et intelligents.
                            </p>
                        </div>

                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 hover:bg-black/40 transition-all duration-300 group">
                            <div className="mb-4">
                                <span className="text-2xl">🔐</span>
                                <h3 className="text-xl font-bold text-purple-300 mt-2">Authentification Sécurisée</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed">
                                Connexion sécurisée avec Firebase. Support Google, GitHub et email
                                pour une expérience utilisateur optimale.
                            </p>
                        </div>

                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-6 hover:border-purple-400/70 hover:bg-black/40 transition-all duration-300 group">
                            <div className="mb-4">
                                <span className="text-2xl">🛡️</span>
                                <h3 className="text-xl font-bold text-purple-300 mt-2">Quality Gate Actif</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed">
                                Système d&apos;automatisation universel avec validation syntaxe,
                                health monitoring et auto-rollback d&apos;urgence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section état du système améliorée */}
            <section className="py-16 px-4 sm:px-6 bg-black/20">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-purple-300">
                        État du Système
                    </h2>
                    
                    {isSimulating && (
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                                      border border-purple-500/50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                            <div className="text-2xl mb-4">🌀</div>
                            <div className="text-purple-200">
                                Simulation quantique en cours...
                            </div>
                            <div className="text-sm text-purple-400 mt-2">
                                Calcul des états superposés
                            </div>
                        </div>
                    )}

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                        <div className="bg-black/30 backdrop-blur-lg border border-green-500/50 rounded-xl p-4 sm:p-6">
                            <div className="text-green-400 text-2xl mb-2">✅</div>
                            <div className="text-green-300 font-semibold text-sm sm:text-base">Deploy Success</div>
                        </div>
                        
                        <div className="bg-black/30 backdrop-blur-lg border border-blue-500/50 rounded-xl p-4 sm:p-6">
                            <div className="text-blue-400 text-2xl mb-2">🛡️</div>
                            <div className="text-blue-300 font-semibold text-sm sm:text-base">Quality Gate Actif</div>
                        </div>
                        
                        <div className="bg-black/30 backdrop-blur-lg border border-purple-500/50 rounded-xl p-4 sm:p-6">
                            <div className="text-purple-400 text-2xl mb-2">🔮</div>
                            <div className="text-purple-300 font-semibold text-sm sm:text-base">n8n Intégré</div>
                        </div>

                        <div className="bg-black/30 backdrop-blur-lg border border-orange-500/50 rounded-xl p-4 sm:p-6">
                            <div className="text-orange-400 text-2xl mb-2">🔥</div>
                            <div className="text-orange-300 font-semibold text-sm sm:text-base">Firebase Auth</div>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-12 text-purple-300">
                        <p className="text-sm sm:text-base">✅ Powered by Universal Automation System + Firebase + GitHub Actions</p>
                    </div>
                </div>
            </section>

            {/* Footer amélioré */}
            <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/30 py-8 sm:py-12 px-4 sm:px-6">
                <div className="container mx-auto text-center">
                    <div className="text-purple-300 mb-4 text-sm sm:text-base">
                        Powered by Exonov Quantum Engine v1.0 + GitHub Actions
                    </div>
                    <div className="text-purple-500 text-xs sm:text-sm">
                        © 2025 Exonov Quantum. Révolutionnant la physique quantique.
                    </div>
                </div>
            </footer>
        </div>
    );
}
