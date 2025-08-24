/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{css}',
    './public/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Polices personnalisées
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'jetbrains-mono': ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      
      // Couleurs quantiques étendues
      colors: {
        // Couleurs principales
        primary: {
          50: '#f3f1ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
          DEFAULT: '#7c3aed',
        },
        secondary: {
          50: '#fef7ff',
          100: '#fce7ff',
          200: '#f9d0fe',
          300: '#f5a8fc',
          400: '#ee75f8',
          500: '#e543f0',
          600: '#d123dd',
          700: '#b617b8',
          800: '#96158d',
          900: '#7a1669',
          DEFAULT: '#ec4899',
        },
        quantum: {
          purple: '#7c3aed',
          pink: '#ec4899',
          cyan: '#06b6d4',
          dark: '#0f0f23',
          darker: '#050510',
          light: '#f8fafc',
          gray: '#64748b',
        },
        
        // États quantiques
        'quantum-state': {
          ground: '#06b6d4',      // |0⟩ - État fondamental
          excited: '#f59e0b',     // |1⟩ - État excité  
          superposition: '#8b5cf6', // |+⟩ - Superposition
          negative: '#ef4444',    // |-⟩ - Superposition négative
          spinup: '#10b981',      // |↑⟩ - Spin up
          spindown: '#f97316',    // |↓⟩ - Spin down
          entangled: '#ec4899',   // |ψ⟩ - État intriqué
          bell: '#6366f1',        // |Φ⟩ - État de Bell
        },

        // Statuts système
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          DEFAULT: '#22c55e',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          DEFAULT: '#f59e0b',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          DEFAULT: '#ef4444',
        },
      },

      // Espacements quantiques
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },

      // Rayons de bordure
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },

      // Ombres quantiques
      boxShadow: {
        'quantum': '0 25px 50px -12px rgba(124, 58, 237, 0.25)',
        'quantum-lg': '0 35px 60px -12px rgba(124, 58, 237, 0.4)',
        'quantum-xl': '0 45px 70px -12px rgba(124, 58, 237, 0.5)',
        'quantum-glow': '0 0 20px rgba(124, 58, 237, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)',
        'inner-quantum': 'inset 0 2px 4px 0 rgba(124, 58, 237, 0.1)',
      },

      // Animations quantiques personnalisées
      animation: {
        'quantum-pulse': 'quantum-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'quantum-glow': 'quantum-glow 3s ease-in-out infinite alternate',
        'quantum-float': 'quantum-float 6s ease-in-out infinite',
        'quantum-rotate': 'quantum-rotate 20s linear infinite',
        'quantum-bounce': 'quantum-bounce 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },

      // Keyframes pour animations
      keyframes: {
        'quantum-pulse': {
          '0%, 100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
          '50%': { 
            opacity: '0.7', 
            transform: 'scale(1.05)' 
          },
        },
        'quantum-glow': {
          '0%': { 
            boxShadow: '0 0 5px rgba(124, 58, 237, 0.3)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)' 
          },
        },
        'quantum-float': {
          '0%, 100%': { 
            transform: 'translateY(0px)' 
          },
          '50%': { 
            transform: 'translateY(-10px)' 
          },
        },
        'quantum-rotate': {
          '0%': { 
            transform: 'rotate(0deg)' 
          },
          '100%': { 
            transform: 'rotate(360deg)' 
          },
        },
        'quantum-bounce': {
          '0%, 100%': { 
            transform: 'translateY(0)', 
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' 
          },
          '50%': { 
            transform: 'translateY(-25%)', 
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' 
          },
        },
        'fadeIn': {
          '0%': { 
            opacity: '0' 
          },
          '100%': { 
            opacity: '1' 
          },
        },
        'fadeInUp': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'slideIn': {
          '0%': { 
            transform: 'translateX(-100%)' 
          },
          '100%': { 
            transform: 'translateX(0)' 
          },
        },
        'scaleIn': {
          '0%': { 
            transform: 'scale(0.9)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          },
        },
      },

      // Gradients personnalisés
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #06b6d4 100%)',
        'quantum-radial': 'radial-gradient(circle at center, #7c3aed 0%, #1e1b4b 100%)',
        'quantum-dark': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        'quantum-card': 'linear-gradient(135deg, rgba(15, 15, 35, 0.4) 0%, rgba(30, 27, 75, 0.2) 100%)',
        'quantum-noise': "linear-gradient(to bottom, color-mix(in oklab, #0f172a 0%, transparent), color-mix(in oklab, #0f172a 100%, transparent)), url('/images/noise.png')",
      },

      // Filtres backdrop
      backdropBlur: {
        'quantum': '20px',
      },

      // Tailles de conteneur personnalisées
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },

      // Hauteurs personnalisées
      height: {
        '128': '32rem',
        '144': '36rem',
        'screen-1/2': '50vh',
        'screen-2/3': '66.67vh',
        'screen-3/4': '75vh',
      },

      // Z-index personnalisés
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // Transitions personnalisées
      transitionTimingFunction: {
        'quantum': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'quantum-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // Durées de transition
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [
    // Plugin pour les utilitaires quantiques personnalisés
    function({ addUtilities, theme }) {
      const quantumUtilities = {
        '.text-shadow-quantum': {
          'text-shadow': '0 0 20px rgba(124, 58, 237, 0.5)',
        },
        '.text-shadow-quantum-sm': {
          'text-shadow': '0 0 10px rgba(124, 58, 237, 0.3)',
        },
        '.text-shadow-quantum-lg': {
          'text-shadow': '0 0 30px rgba(124, 58, 237, 0.7)',
        },
        '.backdrop-blur-quantum': {
          'backdrop-filter': 'blur(20px) saturate(180%)',
        },
        '.gradient-quantum-text': {
          'background': 'linear-gradient(135deg, #a855f7, #ec4899)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.border-quantum': {
          'border-image': 'linear-gradient(135deg, #7c3aed, #ec4899) 1',
        },
        '.scrollbar-quantum': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(15, 15, 35, 0.3)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            'border-radius': '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'linear-gradient(135deg, #8b5cf6, #f472b6)',
          },
        },
      };
      
      addUtilities(quantumUtilities);
    },
  ],
}
