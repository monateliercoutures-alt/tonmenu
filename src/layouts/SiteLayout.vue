<template>
  <div class="site-layout">
    <!-- Top bar -->
    <div class="topbar">
      <span class="tb-left">Votre repas préféré, en quelques clics.</span>
      <span class="tb-center">100 % restauration locale · Abidjan</span>
      <a class="tb-right" href="#">Besoin d'aide ? ↗</a>
    </div>

    <!-- Header -->
    <header class="site-header">
      <div class="header-inner">
        <div class="h-left">
          <button class="hamburger" @click="toggleMenu" :aria-expanded="menuOpen.toString()" aria-label="Ouvrir le menu" :aria-controls="'mobile-drawer'">
            <Menu :size="20" v-if="!menuOpen"/><X :size="20" v-else/>
          </button>
          <div class="search">
            <Search :size="16" class="s-icon"/>
            <input placeholder="Une envie, un restaurant..." @keydown.enter="goRestaurants" v-model="searchQ" />
            <button class="s-btn" @click="goRestaurants" aria-label="Rechercher"><ArrowRight :size="14" class="s-arrow"/></button>
          </div>
        </div>

        <router-link to="/" class="logo">
          <span class="logo-icon">🍚</span>
          <span class="logo-text"><i>Ton</i><b>Menu.</b></span>
        </router-link>

        <div class="h-right">
          <button class="addr-btn" @click="app.showAddressSheet=true">
            <MapPin :size="18" class="addr-icon"/>
            <span class="addr-label"><small>ADRESSE DE LIVRAISON</small><strong>Choisir une adresse</strong></span>
          </button>
          <button class="icon-btn" @click="app.showLogin=true" aria-label="Compte"><User :size="20"/></button>
          <router-link to="/panier" class="icon-btn cart" aria-label="Panier">
            <ShoppingBag :size="20"/>
            <span class="badge" :class="{ empty: cart.count===0 }">{{ cart.count }}</span>
          </router-link>
        </div>
      </div>

      <!-- Mobile drawer -->
      <transition name="drawer">
        <div v-if="menuOpen" id="mobile-drawer" class="mobile-panel" role="dialog" aria-modal="true">
          <div class="m-search">
            <Search :size="16"/><input placeholder="Une envie, un restaurant..." v-model="searchQ" @keydown.enter="goRestaurants" />
            <button @click="goRestaurants" class="m-go">→</button>
          </div>
          <nav class="m-nav">
            <router-link to="/" @click="closeMenu">Accueil</router-link>
            <router-link to="/accueil" @click="closeMenu">Restaurants</router-link>
            <router-link to="/explorer" @click="closeMenu">Nos cuisines</router-link>
            <a href="#esprit" @click="closeMenu">L'esprit TonMenu</a>
            <a href="#marche" @click="closeMenu">Comment ça marche</a>
            <router-link to="/pro" @click="closeMenu">Espace partenaire ↗</router-link>
          </nav>
          <div class="m-foot">
            <button class="m-addr" @click="app.showAddressSheet=true; closeMenu()"><MapPin :size="16"/> Choisir une adresse</button>
            <button class="m-login" @click="app.showLogin=true; closeMenu()">Se connecter</button>
          </div>
        </div>
      </transition>
    </header>
    <!-- Backdrop -->
    <div v-if="menuOpen" class="backdrop" @click="closeMenu"></div>

    <!-- Red nav -->
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
          <div class="logo"><span class="logo-icon">🍚</span> <i>Ton</i><b>Menu.</b></div>
          <p>Les bonnes adresses d'ici.<br>Les saveurs qu'on aime.<br>Le quartier, en quelques clics.</p>
          <div class="loc">📍 Yopougon · Abidjan · Côte d'Ivoire</div>
        </div>
        <div class="f-col"><h5>À la carte</h5><a>Maquis</a><a>Grillades / Rôtisserie</a><a>Attiéké & Aloco</a><a>Cuisine africaine (autre)</a></div>
        <div class="f-col"><h5>À vos côtés</h5><a>Mes commandes</a><a>Mes bonnes adresses</a><a>Aide & questions</a><a>Espace partenaire</a></div>
        <div class="f-col cta"><h5>Un petit creux ?</h5><p>Votre prochain bon repas<br>n'est jamais bien loin.</p><button @click="$router.push('/accueil')">Installer l'application ⬇</button><small>Sans compte pour commander.<br>Paiements simulés dans cette version.</small></div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 TonMenu. Votre repas préféré, en quelques clics.</span>
        <span class="pays">Orange Money · MTN MoMo · Moov Money</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, ArrowRight, MapPin, User, ShoppingBag, Menu, X } from 'lucide-vue-next'
import { useAppStore } from '../stores/app.js'
import { useCartStore } from '../stores/cart.js'
const app = useAppStore()
const cart = useCartStore()
const router = useRouter()
const menuOpen = ref(false)
const searchQ = ref('')

function toggleMenu(){ menuOpen.value = !menuOpen.value }
function closeMenu(){ menuOpen.value = false }
function goRestaurants(){
  if(searchQ.value.trim()){
    router.push({ path: '/accueil', query: { q: searchQ.value }})
  } else router.push('/accueil')
  closeMenu()
}

function onEsc(e){ if(e.key==='Escape') closeMenu() }
watch(menuOpen, (v)=> {
  if(v) document.body.style.overflow='hidden'
  else document.body.style.overflow=''
})
onMounted(()=> window.addEventListener('keydown', onEsc))
onUnmounted(()=> { window.removeEventListener('keydown', onEsc); document.body.style.overflow='' })

// close on route change
router.afterEach(()=> { menuOpen.value=false })
</script>

<style scoped>
.site-layout{ background:#fff; }
.topbar{
  display:flex; justify-content:space-between; align-items:center;
  font-size:11px; color:#666; background:#F7F5F0; padding:6px 20px; border-bottom:1px solid #eee;
}
.tb-center{ font-weight:600; }
.tb-right{ text-decoration:none; color:#666; }
.site-header{ position:sticky; top:0; z-index:30; background:#fff; border-bottom:1px solid #eee; }
.header-inner{
  max-width:1280px; margin:0 auto; padding:14px 20px;
  display:grid; grid-template-columns: 1fr auto 1fr; align-items:center; gap:16px;
}
.h-left{ display:flex; align-items:center; gap:10px; }
.hamburger{ display:none; width:36px; height:36px; border:1px solid #eee; border-radius:50%; background:#fff; place-items:center; cursor:pointer; }
.search{
  display:flex; align-items:center; gap:8px; border:1px solid #e5e5e5; border-radius:999px; padding:8px 14px; width:280px; background:#fff;
}
.search input{ border:none; outline:none; flex:1; font-size:13px; }
.s-btn{ border:none; background:none; cursor:pointer; display:grid; place-items:center; }
.s-icon{ color:#999; } .s-arrow{ color:#999; }
.logo{ display:flex; align-items:center; gap:6px; text-decoration:none; color:#111; font-size:22px; justify-self:center; }
.logo-icon{ width:28px; height:28px; background:#ec3d2e; color:#fff; border-radius:8px; display:grid; place-items:center; font-size:16px; }
.logo-text i{ font-weight:300; font-style:italic; color:#111; }
.logo-text b{ color:#ec3d2e; }
.h-right{ display:flex; align-items:center; gap:10px; justify-self:end; }
.addr-btn{ display:flex; align-items:center; gap:8px; border:1px solid #e5e5e5; border-radius:999px; padding:6px 12px; background:#fff; text-align:left; cursor:pointer; }
.addr-icon{ color:#ec3d2e; }
.addr-label small{ display:block; font-size:8px; letter-spacing:.6px; color:#999; font-weight:700; }
.addr-label strong{ font-size:11px; color:#111; }
.icon-btn{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; position:relative; cursor:pointer; }
.icon-btn.cart{ border-color:#111; }
.badge{ position:absolute; top:-4px; right:-4px; background:#ec3d2e; color:#fff; font-size:9px; font-weight:700; min-width:16px; height:16px; padding:0 4px; border-radius:50%; display:grid; place-items:center; }
.badge.empty{ background:#111; }

.mobile-panel{
  position:fixed; top:56px; left:0; right:0; bottom:0; z-index:31;
  background:#fff; padding:16px 20px; overflow:auto; border-top:1px solid #f0f0f0;
  animation: slideDown .22s ease;
}
@keyframes slideDown{ from{ opacity:0; transform:translateY(-6px) } to{ opacity:1; transform:translateY(0) } }
.m-search{ display:flex; align-items:center; gap:8px; border:1px solid #e5e5e5; border-radius:999px; padding:10px 14px; background:#F9F9F9; }
.m-search input{ flex:1; border:none; outline:none; font-size:14px; background:transparent; }
.m-go{ width:28px; height:28px; border-radius:50%; background:#ec3d2e; color:#fff; border:none; display:grid; place-items:center; cursor:pointer; }
.m-nav{ display:flex; flex-direction:column; gap:4px; margin-top:16px; }
.m-nav a{ text-decoration:none; color:#111; font-weight:700; font-size:15px; padding:12px 0; border-bottom:1px solid #f5f5f5; }
.m-nav a.router-link-active{ color:#ec3d2e; }
.m-foot{ display:flex; flex-direction:column; gap:8px; margin-top:18px; }
.m-addr{ display:flex; align-items:center; gap:8px; justify-content:center; padding:12px; border-radius:999px; border:1px solid #e5e5e5; background:#fff; font-weight:700; }
.m-login{ padding:12px; border-radius:999px; border:none; background:#ec3d2e; color:#fff; font-weight:700; }

.backdrop{ position:fixed; inset:0; top:96px; background:rgba(0,0,0,.28); z-index:29; backdrop-filter: blur(1px); }

.drawer-enter-active,.drawer-leave-active{ transition: .22s ease; }
.drawer-enter-from,.drawer-leave-to{ opacity:0; transform:translateY(-6px); }

.red-nav{ background:#ec3d2e; overflow:auto; scrollbar-width:none; position:sticky; top:56px; z-index:20; }
.red-nav::-webkit-scrollbar{ display:none; }
.red-inner{
  max-width:1280px; margin:0 auto; padding:10px 20px; display:flex; gap:22px; align-items:center; overflow:auto; scrollbar-width:none;
}
.red-inner a{ color:#fff; text-decoration:none; font-size:12.5px; font-weight:600; white-space:nowrap; opacity:.95; }
.red-inner a.router-link-active{ text-decoration:underline; text-underline-offset:4px; opacity:1; }
.red-inner a:hover{ opacity:1; text-decoration:underline; text-underline-offset:4px; }

.site-footer{ background:#111; color:#ddd; margin-top:0; }
.footer-inner{ max-width:1280px; margin:0 auto; padding:36px 20px; display:grid; grid-template-columns:1.3fr 1fr 1fr 1.3fr; gap:24px; }
.f-brand .logo{ font-size:20px; color:#fff; }
.f-brand p{ font-size:12px; color:#aaa; line-height:1.5; margin:10px 0; }
.loc{ font-size:11px; color:#ec3d2e; }
.f-col h5{ color:#fff; font-size:12px; margin:0 0 10px; }
.f-col a{ display:block; color:#aaa; font-size:12px; margin:6px 0; text-decoration:none; }
.f-col.cta p{ font-size:12px; color:#aaa; }
.f-col.cta button{ margin-top:10px; background:#ec3d2e; color:#fff; border:none; padding:10px 16px; border-radius:999px; font-weight:700; font-size:12px; cursor:pointer; }
.f-col.cta small{ display:block; margin-top:8px; font-size:10px; color:#777; }
.footer-bottom{ max-width:1280px; margin:0 auto; border-top:1px solid #222; padding:14px 20px; display:flex; justify-content:space-between; font-size:11px; color:#777; }

/* Tablet */
@media(max-width:1024px){
  .header-inner{ grid-template-columns: auto 1fr auto; }
  .search{ width:220px; }
  .red-inner{ gap:16px; }
  .footer-inner{ grid-template-columns:1fr 1fr; gap:20px; }
}
/* Mobile */
@media(max-width:768px){
  .topbar{ flex-direction:column; gap:2px; text-align:center; padding:8px 12px; font-size:10px; }
  .header-inner{ grid-template-columns: 1fr auto; padding:10px 14px; }
  .h-left .search{ display:none; }
  .hamburger{ display:grid; }
  .logo{ justify-self:start; font-size:20px; }
  .h-right .addr-btn span{ display:none; }
  .h-right .addr-btn{ width:36px; height:36px; border-radius:50%; padding:0; justify-content:center; }
  .red-nav{ top:56px; }
  .red-inner{ padding:10px 14px; }
  .footer-inner{ grid-template-columns:1fr; text-align:center; }
  .footer-bottom{ flex-direction:column; gap:6px; text-align:center; }
}
@media(min-width:769px){ .mobile-panel{ display:none !important; } .backdrop{ display:none !important; } }
</style>
