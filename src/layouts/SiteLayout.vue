<template>
  <div class="site-layout">
    <!-- Top bar exact -->
    <div class="topbar">
      <span>Votre repas préféré, en quelques clics.</span>
      <span class="center">100 % restauration locale · Abidjan</span>
      <a href="#">Besoin d'aide ? ↗</a>
    </div>

    <!-- Header -->
    <header class="site-header">
      <div class="header-inner">
        <div class="h-left">
          <button class="hamburger" @click="toggleMenu" :aria-expanded="menuOpen.toString()" aria-label="Menu">
            <svg v-if="!menuOpen" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <label class="search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
            <input v-model="searchQ" placeholder="Une envie, un restaurant..." @keydown.enter="goRestaurants" />
            <button @click="goRestaurants" aria-label="rechercher">→</button>
          </label>
        </div>

        <router-link to="/" class="logo" aria-label="TonMenu accueil">
          <img src="/logo-tonmenu.svg" alt="TonMenu" height="28" />
        </router-link>

        <div class="h-right">
          <button class="addr-btn" @click="app.showAddressSheet=true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC3D2E" stroke-width="1.7"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>
            <span><small>ADRESSE DE LIVRAISON</small><strong>Choisir une adresse</strong></span>
          </button>
          <button class="icon-btn" @click="app.showLogin=true" aria-label="Mon compte">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></svg>
          </button>
          <router-link to="/panier" class="icon-btn cart" aria-label="Panier">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 7h12l-1 12H7L6 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>
            <span class="badge">{{ cart.count }}</span>
          </router-link>
        </div>
      </div>

      <transition name="drawer">
        <div v-if="menuOpen" class="mobile-drawer">
          <label class="m-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
            <input v-model="searchQ" placeholder="Une envie, un restaurant..." @keydown.enter="goRestaurants" />
          </label>
          <nav class="m-nav">
            <router-link to="/" @click="closeMenu">Accueil</router-link>
            <router-link to="/accueil" @click="closeMenu">Restaurants</router-link>
            <a href="#cuisines" @click="closeMenu">Nos cuisines</a>
            <a href="#esprit" @click="closeMenu">L'esprit TonMenu</a>
            <a href="#marche" @click="closeMenu">Comment ça marche</a>
            <router-link to="/pro" @click="closeMenu">Espace partenaire ↗</router-link>
          </nav>
          <div class="m-foot">
            <button @click="app.showAddressSheet=true; closeMenu()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EC3D2E" stroke-width="1.7"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg> Choisir une adresse</button>
            <button class="primary" @click="app.showLogin=true; closeMenu()">Se connecter</button>
          </div>
        </div>
      </transition>
    </header>
    <div v-if="menuOpen" class="backdrop" @click="closeMenu"></div>

    <nav class="red-nav">
      <div class="red-inner">
        <router-link to="/">Accueil</router-link>
        <router-link to="/accueil">Restaurants</router-link>
        <a href="#cuisines">Nos cuisines</a>
        <a href="#esprit">L'esprit TonMenu</a>
        <a href="#marche">Comment ça marche</a>
        <router-link to="/pro">Espace partenaire ↗</router-link>
      </div>
    </nav>

    <main><slot /></main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="f-brand">
          <img src="/logo-tonmenu.svg" alt="TonMenu" height="22" style="filter: brightness(0) invert(1);" />
          <p>Les bonnes adresses d'ici.<br>Les saveurs qu'on aime.<br>Le quartier, en quelques clics.</p>
          <div class="loc"><span style="color:#EC3D2E">●</span> Yopougon · Abidjan · Côte d'Ivoire</div>
        </div>
        <div class="f-col"><h5>À la carte</h5><a>Maquis</a><a>Grillades / Rôtisserie</a><a>Attiéké & Aloco</a><a>Cuisine africaine (autre)</a></div>
        <div class="f-col"><h5>À vos côtés</h5><a>Mes commandes</a><a>Mes bonnes adresses</a><a>Aide & questions</a><a>Espace partenaire</a></div>
        <div class="f-col cta"><h5>Un petit creux ?</h5><p>Votre prochain bon repas<br>n'est jamais bien loin.</p><button @click="$router.push('/accueil')">Installer l'application ↓</button><small>Sans compte pour commander.<br>Paiements simulés dans cette version.</small></div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 TonMenu. Votre repas préféré, en quelques clics.</span>
        <span>Orange Money · MTN MoMo · Moov Money</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app.js'
import { useCartStore } from '../stores/cart.js'
const app = useAppStore()
const cart = useCartStore()
const router = useRouter()
const menuOpen = ref(false)
const searchQ = ref('')
function toggleMenu(){ menuOpen.value=!menuOpen.value }
function closeMenu(){ menuOpen.value=false }
function goRestaurants(){ if(searchQ.value.trim()) router.push({path:'/accueil', query:{q:searchQ.value}}); else router.push('/accueil'); closeMenu() }
function onEsc(e){ if(e.key==='Escape') closeMenu() }
watch(menuOpen, v=> document.body.style.overflow = v ? 'hidden' : '')
onMounted(()=> window.addEventListener('keydown', onEsc))
onUnmounted(()=> { window.removeEventListener('keydown', onEsc); document.body.style.overflow='' })
router.afterEach(()=> menuOpen.value=false)
</script>

<style scoped>
.site-layout{ background:#fff; }
.topbar{ display:flex; justify-content:space-between; align-items:center; font-size:10px; letter-spacing:.2px; color:#6B7280; background:#F9F6F0; padding:7px 24px; border-bottom:1px solid #E5E7EB; }
.topbar .center{ font-weight:600; color:#6B7280; }
.topbar a{ color:#6B7280; text-decoration:none; }
.site-header{ position:sticky; top:0; z-index:30; background:#fff; border-bottom:1px solid #E5E7EB; }
.header-inner{ max-width:1280px; margin:0 auto; padding:14px 24px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:16px; }
.h-left{ display:flex; align-items:center; gap:10px; }
.hamburger{ display:none; width:36px; height:36px; border:1px solid #E5E7EB; border-radius:50%; background:#fff; display:grid; place-items:center; cursor:pointer; }
.search{ display:flex; align-items:center; gap:8px; border:1px solid #E5E7EB; border-radius:999px; padding:9px 14px; width:300px; background:#fff; }
.search input{ border:none; outline:none; flex:1; font-size:12px; color:#111; }
.search input::placeholder{ color:#9CA3AF; }
.search button{ border:none; background:none; font-size:14px; color:#9CA3AF; cursor:pointer; }
.logo{ justify-self:center; display:flex; align-items:center; }
.h-right{ display:flex; align-items:center; gap:10px; justify-self:end; }
.addr-btn{ display:flex; align-items:center; gap:8px; border:1px solid #E5E7EB; border-radius:999px; padding:6px 12px; background:#fff; text-align:left; cursor:pointer; }
.addr-btn span small{ display:block; font-size:7.5px; letter-spacing:.7px; color:#9CA3AF; font-weight:700; line-height:1; }
.addr-btn span strong{ font-size:11px; color:#111; line-height:1.2; }
.icon-btn{ width:36px; height:36px; border-radius:50%; border:1px solid #E5E7EB; background:#fff; display:grid; place-items:center; position:relative; cursor:pointer; color:#111; }
.icon-btn.cart{ border-color:#111; }
.badge{ position:absolute; top:-4px; right:-4px; background:#EC3D2E; color:#fff; font-size:8px; font-weight:800; min-width:16px; height:16px; padding:0 4px; border-radius:50%; display:grid; place-items:center; }
.mobile-drawer{ position:fixed; top:60px; left:0; right:0; bottom:0; z-index:31; background:#fff; padding:16px 20px; overflow:auto; border-top:1px solid #E5E7EB; }
.m-search{ display:flex; align-items:center; gap:8px; border:1px solid #E5E7EB; border-radius:999px; padding:10px 14px; background:#F9FAFB; }
.m-search input{ flex:1; border:none; outline:none; font-size:14px; background:transparent; }
.m-nav{ display:flex; flex-direction:column; margin-top:16px; }
.m-nav a{ padding:14px 0; border-bottom:1px solid #F3F4F6; font-weight:700; font-size:14px; color:#111; text-decoration:none; }
.m-nav a.router-link-active{ color:#EC3D2E; }
.m-foot{ display:flex; flex-direction:column; gap:8px; margin-top:20px; }
.m-foot button{ padding:12px; border-radius:999px; font-weight:700; font-size:13px; display:flex; justify-content:center; gap:6px; }
.m-foot button{ border:1px solid #E5E7EB; background:#fff; }
.m-foot .primary{ background:#EC3D2E; color:#fff; border-color:#EC3D2E; }
.backdrop{ position:fixed; inset:0; top:88px; background:rgba(0,0,0,.22); z-index:29; }
.red-nav{ background:#EC3D2E; overflow:auto; scrollbar-width:none; position:sticky; top:60px; z-index:20; }
.red-nav::-webkit-scrollbar{ display:none; }
.red-inner{ max-width:1280px; margin:0 auto; padding:10px 24px; display:flex; gap:24px; align-items:center; overflow:auto; scrollbar-width:none; }
.red-inner a{ color:#fff; text-decoration:none; font-size:12px; font-weight:600; white-space:nowrap; letter-spacing:.1px; }
.red-inner a.router-link-active{ text-decoration:underline; text-underline-offset:4px; }
.site-footer{ background:#0B0B0B; color:#ddd; }
.footer-inner{ max-width:1280px; margin:0 auto; padding:40px 24px; display:grid; grid-template-columns:1.4fr 1fr 1fr 1.3fr; gap:24px; }
.f-brand p{ font-size:11px; color:#9CA3AF; line-height:1.5; margin:10px 0; }
.loc{ font-size:11px; color:#EC3D2E; }
.f-col h5{ color:#fff; font-size:11px; margin:0 0 12px; font-weight:700; }
.f-col a{ display:block; color:#9CA3AF; font-size:11px; margin:7px 0; }
.f-col.cta p{ font-size:11px; color:#9CA3AF; }
.f-col.cta button{ margin-top:10px; background:#EC3D2E; color:#fff; border:none; padding:10px 16px; border-radius:999px; font-weight:700; font-size:11px; cursor:pointer; }
.f-col.cta small{ display:block; margin-top:8px; font-size:9px; color:#6B7280; line-height:1.3; }
.footer-bottom{ max-width:1280px; margin:0 auto; border-top:1px solid #1F2937; padding:14px 24px; display:flex; justify-content:space-between; font-size:10px; color:#6B7280; }
@media(max-width:1024px){ .header-inner{ grid-template-columns:auto 1fr auto; } .search{ width:240px; } .footer-inner{ grid-template-columns:1fr 1fr; } }
@media(max-width:768px){
  .topbar{ flex-direction:column; gap:2px; text-align:center; padding:8px 12px; }
  .header-inner{ grid-template-columns:1fr auto; padding:10px 14px; }
  .h-left .search{ display:none; }
  .hamburger{ display:grid; }
  .logo{ justify-self:start; }
  .h-right .addr-btn span{ display:none; }
  .h-right .addr-btn{ width:36px; height:36px; border-radius:50%; padding:0; justify-content:center; }
  .red-nav{ top:60px; }
  .footer-inner{ grid-template-columns:1fr; text-align:center; }
  .footer-bottom{ flex-direction:column; gap:6px; text-align:center; }
}
@media(min-width:769px){ .mobile-drawer,.backdrop{ display:none !important; } }
</style>
