<template>
  <div class="site-layout">
    <header class="site-header">
      <div class="inner">
        <router-link to="/" class="logo"><span class="tm">TonMenu</span> <span class="dot">•</span> <span class="slogan">Le goût du quartier</span></router-link>
        <nav class="nav">
          <router-link to="/accueil-vitrine">Accueil</router-link>
          <router-link to="/accueil">Restaurants</router-link>
          <router-link to="/explorer">Explorer</router-link>
          <a href="#devenir">Devenir partenaire</a>
        </nav>
        <div class="actions">
          <button class="btn ghost" @click="app.showLogin=true">Connexion</button>
          <router-link to="/panier" class="btn red">Panier ({{ cart.count }})</router-link>
        </div>
      </div>
    </header>
    <main><slot /></main>
    <footer class="site-footer">
      <div class="inner">
        <div class="cols">
          <div><h4>TonMenu</h4><p>Le goût du quartier — Livraison à Abidjan, Yopougon, Cocody, Plateau et partout en Côte d’Ivoire.</p></div>
          <div><h5>Explorer</h5><a>Restaurants</a><a>Catégories</a><a>Promos</a></div>
          <div><h5>Partenaires</h5><a>Devenir restaurant</a><a>Tarifs</a><a>FAQ Pro</a></div>
          <div><h5>Aide</h5><a>Contact WhatsApp</a><a>Conditions</a><a>Confidentialité</a></div>
        </div>
        <div class="copy">© 2026 TonMenu — FCFA • Côte d’Ivoire</div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { useAppStore } from '../stores/app.js'
import { useCartStore } from '../stores/cart.js'
const app = useAppStore()
const cart = useCartStore()
</script>
<style scoped>
.site-header{ position:sticky; top:0; z-index:20; background:#fff; border-bottom:1px solid #eee; backdrop-filter:blur(8px); }
.inner{ max-width:1200px; margin:0 auto; padding:12px 20px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
.logo{ text-decoration:none; color:#111; font-weight:800; display:flex; align-items:center; gap:6px; }
.tm{ color:#ec3d2e; font-size:20px; }
.slogan{ font-weight:600; color:#666; font-size:13px; }
.nav{ display:flex; gap:18px; }
.nav a{ text-decoration:none; color:#333; font-weight:600; font-size:14px; }
.actions{ display:flex; gap:8px; }
.btn{ padding:9px 14px; border-radius:999px; font-weight:700; font-size:13px; text-decoration:none; cursor:pointer; border:1px solid transparent; }
.btn.ghost{ background:#fff; border-color:#eee; }
.btn.red{ background:#ec3d2e; color:#fff; }
.site-footer{ background:#111; color:#ddd; margin-top:40px; }
.site-footer .inner{ flex-direction:column; align-items:stretch; }
.cols{ display:grid; grid-template-columns:1.6fr 1fr 1fr 1fr; gap:24px; padding:32px 0; }
.cols h4{ color:#fff; margin:0 0 8px; }
.cols h5{ color:#fff; margin:0 0 8px; font-size:13px; }
.cols a{ display:block; color:#bbb; font-size:13px; margin:6px 0; }
.copy{ border-top:1px solid #222; padding:14px 0; text-align:center; color:#777; font-size:12px; }
@media(max-width:900px){ .nav{ display:none; } .cols{ grid-template-columns:1fr 1fr; } }
</style>
