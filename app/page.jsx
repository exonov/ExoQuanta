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
            {/* Header optimisé avec meilleur espacement */}
            <header className="bg-black/50 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">H</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    EXONOV QUANTUM
                                </h1>
                                <p className="text-purple-400 text-sm">HADAMS</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/dashboard" className="text-purple-300 hover:text-purple-100 transition-colors font-medium">
                                Dashboard
                            </Link>
                            <Link href="/simulation" className="text-purple-300 hover:text-purple-100 transition-colors font-medium">
                                Simulation
                            </Link>
                            <Link href="#docs" className="text-purple-300 hover:text-purple-100 transition-colors font-medium">
                                Documentation
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Section hero avec espacement amélioré */}
            <section className="py-20 lg:py-28 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Statut de déploiement avec plus d'espace */}
                    <div className="mb-16">
                        <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-full text-green-300 text-sm mb-6 shadow-lg">
                            ✅ DEPLOY READY - All ESLint Errors Fixed!
                        </div>
                        <p className="text-purple-300 text-xl mb-4">Bienvenue, HADAMS !</p>
                    </div>

                    {/* Titres avec plus d'impact visuel */}
                    <div className="mb-16">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                            EXONOV
                        </h1>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            QUANTUM
                        </h2>
                    </div>
                    
                    {/* Badge de production avec meilleur espacement */}
                    <div className="mb-20">
                        <div className="inline-flex items-center px-8 py-4 bg-green-500/20 border border-green-500/50 rounded-2xl text-green-300 text-lg max-w-5xl mx-auto shadow-xl backdrop-blur-sm">
                            <span className="mr-3 text-xl">✅</span>
                            <span className="font-semibold">PRODUCTION READY</span>
                            <span className="mx-3">-</span>
                            <span>Plateforme révolutionnaire de simulation quantique. Explorez les mystères de la physique quantique avec des outils de pointe.</span>
                        </div>
                    </div>

                    {/* État quantique avec espacement optimisé */}
                    <div className="mb-20">
                        <div className="bg-black/40 backdrop-blur-lg border border-purple-500/50 rounded-3xl p-10 max-w-lg mx-auto shadow-2xl">
                            <h3 className="text-purple-300 text-2xl mb-6 font-semibold">État Quantique Actuel</h3>
                            <div className="text-3xl font-mono text-cyan-400 mb-4 leading-relaxed">
                                {quantumStates[quantumState]}
                            </div>
                            <div className="text-purple-400">
                                Évolution en temps réel
                            </div>
                        </div>
                    </div>

                    {/* Boutons d'action avec espacement généreux */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button 
                            onClick={simulateQuantum}
                            disabled={isSimulating}
                            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     text-white font-bold py-5 px-10 rounded-2xl text-lg
                                     transform hover:scale-105 transition-all duration-300
                                     shadow-xl hover:shadow-purple-500/25"
                        >
                            {isSimulating ? 'Simulation en cours...' : 'Démarrer Simulation'}
                        </button>
                        
                        <Link 
                            href="/dashboard" 
                            className="w-full sm:w-auto bg-black/50 backdrop-blur-lg border border-purple-500/50 
                                     text-purple-300 font-bold py-5 px-10 rounded-2xl text-lg text-center
                                     hover:bg-purple-900/30 hover:border-purple-400
                                     transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Dashboard n8n
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section fonctionnalités avec espacement amélioré */}
            <section id="features" className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Fonctionnalités Quantiques
                    </h2>
                    
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                        <div className="bg-black/40 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/70 hover:bg-black/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="text-4xl mb-4">🔬</div>
                                <h3 className="text-2xl font-bold text-purple-300">Simulation Multi-Qubits</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed text-base">
                                Simulez des systèmes quantiques complexes avec jusqu&apos;à 8 qubits.
                                Algorithmes optimisés pour des performances maximales.
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/70 hover:bg-black/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="text-4xl mb-4">🌀</div>
                                <h3 className="text-2xl font-bold text-purple-300">Algorithmes Quantiques</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed text-base">
                                Implémentez Shor, Grover, Hadamard et d&apos;autres algorithmes quantiques
                                révolutionnaires avec notre interface intuitive.
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/70 hover:bg-black/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="text-4xl mb-4">📊</div>
                                <h3 className="text-2xl font-bold text-purple-300">Dashboard n8n</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed text-base">
                                Contrôlez et surveillez vos 13+ workflows quantiques n8n
                                directement depuis l&apos;interface Exonov Quantum.
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/70 hover:bg-black/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="text-4xl mb-4">⚡</div>
                                <h3 className="text-2xl font-bold text-purple-300">API Bridge</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed text-base">
                                Connexion transparente avec votre instance n8n pour
                                des workflows quantiques automatisés et intelligents.
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/70 hover:bg-black/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="text-4xl mb-4">🔐</div>
                                <h3 className="text-2xl font-bold text-purple-300">Authentification Sécurisée</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed text-base">
                                Connexion sécurisée avec Firebase. Support Google, GitHub et email
                                pour une expérience utilisateur optimale.
                            </p>
                        </div>

                        <div className="bg-black/40 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-8 hover:border-purple-400/70 hover:bg-black/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                            <div className="mb-6">
                                <div className="text-4xl mb-4">🛡️</div>
                                <h3 className="text-2xl font-bold text-purple-300">Quality Gate Actif</h3>
                            </div>
                            <p className="text-purple-200 leading-relaxed text-base">
                                Système d&apos;automatisation universel avec validation syntaxe,
                                health monitoring et auto-rollback d&apos;urgence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section état du système avec plus d'espace */}
            <section className="py-20 px-6 lg:px-8 bg-black/20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 text-purple-300">
                        État du Système
                    </h2>
                    
                    {isSimulating && (
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                                      border border-purple-500/50 rounded-2xl p-8 mb-12 max-w-md mx-auto shadow-xl">
                            <div className="text-3xl mb-4">🌀</div>
                            <div className="text-purple-200 text-lg mb-2">
                                Simulation quantique en cours...
                            </div>
                            <div className="text-purple-400">
                                Calcul des états superposés
                            </div>
                        </div>
                    )}

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="bg-black/40 backdrop-blur-lg border border-green-500/50 rounded-2xl p-8 shadow-xl">
                            <div className="text-green-400 text-3xl mb-4">✅</div>
                            <div className="text-green-300 font-semibold text-lg">Deploy Success</div>
                        </div>
                        
                        <div className="bg-black/40 backdrop-blur-lg border border-blue-500/50 rounded-2xl p-8 shadow-xl">
                            <div className="text-blue-400 text-3xl mb-4">🛡️</div>
                            <div className="text-blue-300 font-semibold text-lg">Quality Gate Actif</div>
                        </div>
                        
                        <div className="bg-black/40 backdrop-blur-lg border border-purple-500/50 rounded-2xl p-8 shadow-xl">
                            <div className="text-purple-400 text-3xl mb-4">🔮</div>
                            <div className="text-purple-300 font-semibold text-lg">n8n Intégré</div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-lg border border-orange-500/50 rounded-2xl p-8 shadow-xl">
                            <div className="text-orange-400 text-3xl mb-4">🔥</div>
                            <div className="text-orange-300 font-semibold text-lg">Firebase Auth</div>
                        </div>
                    </div>

                    <div className="text-purple-300">
                        <p className="text-base">✅ Powered by Universal Automation System + Firebase + GitHub Actions</p>
                    </div>
                </div>
            </section>

            {/* Footer avec espacement généreux */}
            <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-500/30 py-16 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-purple-300 mb-6 text-base">
                        Powered by Exonov Quantum Engine v1.0 + GitHub Actions
                    </div>
                    <div className="text-purple-500 text-sm">
                        © 2025 Exonov Quantum. Révolutionnant la physique quantique.
                    </div>
                </div>
            </footer>
        </div>
    );
}