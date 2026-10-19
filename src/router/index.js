import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/accueil' },
  { path: '/accueil-vitrine', component: () => import('../views/SiteVitrine.vue'), meta: { layout: 'site' } },

  // App main tabs
  { path: '/accueil', component: () => import('../views/Accueil.vue'), meta: { layout: 'app', tab: 'accueil' } },
  { path: '/explorer', component: () => import('../views/Explorer.vue'), meta: { layout: 'app', tab: 'explorer' } },
  { path: '/commandes', component: () => import('../views/Commandes.vue'), meta: { layout: 'app', tab: 'commandes' } },
  { path: '/compte', component: () => import('../views/Compte.vue'), meta: { layout: 'app', tab: 'compte' } },

  // Compte subpages
  { path: '/compte/profil', component: () => import('../views/compte/Profil.vue'), meta: { layout: 'app', tab: 'compte' } },
  { path: '/compte/adresses', component: () => import('../views/compte/Adresses.vue'), meta: { layout: 'app', tab: 'compte' } },
  { path: '/compte/favoris', component: () => import('../views/compte/Favoris.vue'), meta: { layout: 'app', tab: 'compte' } },
  { path: '/compte/codes-promo', component: () => import('../views/compte/CodesPromo.vue'), meta: { layout: 'app', tab: 'compte' } },
  { path: '/compte/langue', component: () => import('../views/compte/Langue.vue'), meta: { layout: 'app', tab: 'compte' } },
  { path: '/compte/faq', component: () => import('../views/compte/FAQ.vue'), meta: { layout: 'app', tab: 'compte' } },
  { path: '/compte/notifications', component: () => import('../views/compte/Notifications.vue'), meta: { layout: 'app', tab: 'compte' } },
  { path: '/compte/suppression', component: () => import('../views/compte/Suppression.vue'), meta: { layout: 'app', tab: 'compte' } },

  // Restaurant & ordering
  { path: '/restaurant/:id', component: () => import('../views/Restaurant.vue'), meta: { hideBottomNav: true } },
  { path: '/panier', component: () => import('../views/Panier.vue'), meta: { hideBottomNav: true } },
  { path: '/checkout', component: () => import('../views/Checkout.vue'), meta: { hideBottomNav: true } },
  { path: '/commande/:id', component: () => import('../views/SuiviCommande.vue'), meta: { hideBottomNav: true } },

  // Pro placeholder
  { path: '/pro', redirect: '/pro/commandes' },
  { path: '/pro/:path(.*)', component: () => import('../views/pro/ProLayout.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    return { top: 0, behavior: 'smooth' }
  }
})

// Device mode guard: mobile should not see vitrine
router.beforeEach((to, from, next) => {
  const w = window.innerWidth
  const isCoarse = window.matchMedia('(pointer: coarse)').matches
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone
  const isIpad = navigator.userAgent.includes('Macintosh') && navigator.maxTouchPoints > 1
  const isApp = w < 1024 || isCoarse || isStandalone || isIpad

  if (isApp && to.path === '/accueil-vitrine') return next('/accueil')
  if (!isApp && to.path === '/accueil') {
    // On desktop, keep /accueil accessible but optionally show vitrine at /
    // No forced redirect to avoid trapping devs resizing
  }
  next()
})

export default router
