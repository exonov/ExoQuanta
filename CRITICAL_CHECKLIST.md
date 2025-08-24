# CHECKLIST CRITIQUE - PRÉVENTION DES ERREURS EXOQUANTA

## Problèmes résolus
- [x] Routes API manquantes `export const dynamic = "force-static"`
- [x] Espacement interface corrigé avec `fix-spacing.css`
- [x] Configuration Next.js compatible export statique

## Points d'attention futurs

### 1. DÉPENDANCES MANQUANTES
- `lucide-react` utilisée mais pas installée dans package.json
- `framer-motion` installée mais non utilisée actuellement

### 2. ROUTES API À SURVEILLER
- Toute nouvelle route dans `/app/api/` DOIT avoir `export const dynamic = "force-static"`
- Variables d'environnement requises pour n8n:
  - N8N_BASE_URL
  - N8N_API_KEY

### 3. CONFIGURATION CRITIQUE
- Next.js config: `output: 'export'` pour Netlify
- ESLint: `ignoreDuringBuilds: true` (temporaire)
- Import CSS: `fix-spacing.css` obligatoire pour l'espacement

### 4. NETLIFY DEPLOY
- Publish directory: `out` (pas `.next`)
- Build command: `npm run build`
- Node version: 18+

### 5. FICHIERS CRITIQUES
- `/fix-spacing.css` - NE PAS SUPPRIMER
- `/next.config.js` - Configuration export
- `/app/layout.jsx` - Import CSS fix

### 6. ERREURS POTENTIELLES
- TypeScript activé mais pas de fichiers .ts
- Imports unused peuvent causer des warnings
- Variables d'environnement manquantes en production

## ACTIONS PRÉVENTIVES
1. Installer lucide-react si utilisée
2. Ajouter variables env Netlify
3. Ne jamais modifier fix-spacing.css sans test
4. Toujours tester build local avant push

## COMMANDES DE DIAGNOSTIC
```bash
npm run build    # Test build local
npm run lint     # Vérif ESLint  
npm run type-check  # Vérif TypeScript
```

## ROLLBACK RAPIDE
- Commit stable: `d74e71d09414c6535ce57406443fb65623df7f02`
- Branche stable: `main`
- Version fonctionnelle: v1.2.0
