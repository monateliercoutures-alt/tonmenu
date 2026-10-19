# TonMenu — Le goût du quartier

Application de commande et livraison de repas pour la Côte d'Ivoire (extensible Afrique de l'Ouest).

- **Client**: PWA mobile-first, Vue 3 + Vite, 4 onglets (Accueil, Explorer, Commandes, Compte), mode App (mobile/tablette) vs Site complet (desktop), données mockées locales.
- **Pro**: Tableau de bord restaurant (commandes temps réel, menu, ventes, finances, avis, QR code), accessible via `/pro`.
- **Backend**: Phase 1 mock localStorage. Prêt pour Neon Postgres + API.
- **Paiement**: Mobile Money (Orange, MTN, Moov) validation manuelle + WhatsApp/SMS pré-remplis.
- **Palette**: Rouge #ec3d2e, jaune doux #FFF6CC, vert #0E8A5A, coins 16px, typographie Plus Jakarta Sans.

## Lancer
```bash
npm install
npm run dev   # http://localhost:5173
npm run build
npm run preview
```

## Routes
- `/` → redirige vers `/accueil` en mode App, vitrine en mode Site
- `/accueil` `/explorer` `/commandes` `/compte` (4 onglets + sous-pages)
- `/restaurant/:id` `/panier` `/checkout` `/commande/:id`
- `/pro` → dashboard restaurant (`/pro/commandes`, `/pro/menu`, `/pro/ventes`, `/pro/finances`, `/pro/avis`, `/pro/qr`)

## Design system
Couleurs, typographie, cartes restaurant, pilules, feuilles du bas, BottomNav, AddressPill.

## Vercel
`vercel.json` inclus (SPA rewrite). `npm run build` génère `dist/`.

## Connexion
Démo: numéro quelconque + code `1234`.

## Livrables
- `docs/arborescence.md`
- `docs/modele-donnees.md`
- `docs/ecrans-routes.md`

