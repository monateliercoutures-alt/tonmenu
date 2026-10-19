# Arborescence TonMenu

tonmenu/
├── index.html
├── vite.config.js
├── vercel.json
├── package.json
├── public/
│   ├── favicon.svg
│   └── icons/
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── assets/
│   ├── data/
│   │   └── mockData.js          # restaurants, catégories, plats, commandes mock Yopougon/Abidjan
│   ├── composables/
│   │   └── useDeviceMode.js     # détection App vs Site (largeur, pointer:coarse, iPad, standalone)
│   ├── stores/ (Pinia)
│   │   ├── auth.js              # login 1234, Google, logout, pendingPhone
│   │   ├── cart.js              # panier mono-restaurant, qty, totaux
│   │   └── app.js               # adresse, favoris, commandes, sheets
│   ├── router/
│   │   └── index.js             # /accueil, /explorer, /commandes, /compte/*, /restaurant/:id, /panier, /checkout, /commande/:id, /pro/*
│   ├── layouts/
│   │   ├── AppLayout.vue        # mobile/tablette avec BottomNav
│   │   └── SiteLayout.vue       # desktop header + footer + vitrine
│   ├── components/
│   │   ├── BottomNav.vue
│   │   ├── AddressPill.vue
│   │   ├── RestaurantCard.vue
│   │   ├── CategoryPills.vue
│   │   ├── FilterPills.vue
│   │   ├── BottomSheet.vue
│   │   ├── EmptyIllustration.vue
│   │   └── ScrollTopButton.vue
│   └── views/
│       ├── Accueil.vue
│       ├── Explorer.vue
│       ├── Commandes.vue
│       ├── Compte.vue
│       ├── compte/ (Profil, Adresses, Favoris, CodesPromo, Langue, FAQ, Notifications, Suppression)
│       ├── Restaurant.vue
│       ├── Panier.vue
│       ├── Checkout.vue
│       ├── SuiviCommande.vue
│       ├── SiteVitrine.vue
│       ├── shared/ (LoginSheet.vue, AddressSheet.vue)
│       └── pro/ (ProLayout.vue — dashboard restaurant)
└── docs/
    ├── arborescence.md
    ├── modele-donnees.md
    └── ecrans-routes.md

# Backend partagé (Phase 2)
- `server/` (à brancher) : Express/Fastify + Neon Postgres
- Tables : users, restaurants, categories, dishes, dish_options, orders, order_items, payments, couriers, reviews, payouts
- Endpoints : /api/restaurants, /api/orders, /api/menu, /api/payments/validate, /api/qr

