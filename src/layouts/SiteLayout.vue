<template>
  <div class="site-layout">
    <div class="topbar">
      <span>Votre repas préféré, en quelques clics.</span>
      <span class="center">100 % restauration locale · Abidjan</span>
      <a href="#">Besoin d'aide ? ↗</a>
    </div>

    <header class="header">
      <div class="header-inner">
        <div class="h-left">
          <button class="burger" @click="toggleMenu" :aria-expanded="menuOpen">
            <span class="line"></span><span class="line"></span><span class="line"></span>
          </button>
          <div class="search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9CA3AF" stroke-width="1.6"/><path d="M16.5 16.5L21 21" stroke="#9CA3AF" stroke-width="1.6" stroke-linecap="round"/></svg>
            <input v-model="q" placeholder="Une envie, un restaurant..." @keydown.enter="go" />
            <button @click="go" class="go">→</button>
          </div>
        </div>
        <router-link to="/" class="logo">
          <img src="/extracted/logo.png" alt="TonMenu" style="height:32px; image-rendering: crisp-edges;" />
        </router-link>
        <div class="h-right">
          <button class="addr" @click="app.showAddressSheet=true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 20s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z" stroke="#EC3D2E" stroke-width="1.5"/><circle cx="12" cy="9" r="2.2" stroke="#EC3D2E" stroke-width="1.5"/></svg>
            <span><small>ADRESSE DE LIVRAISON</small><strong>Choisir une adresse</strong></span>
          </button>
          <button class="ic" @click="app.showLogin=true" aria-label="Compte"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" stroke-width="1.5"/></svg></button>
          <router-link to="/panier" class="ic cart"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 7h12l-1 12H7z" stroke="currentColor" stroke-width="1.5"/><path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.5"/></svg><span class="badge">{{ cart.count }}</span></router-link>
        </div>
      </div>
      <div v-if="menuOpen" class="drawer">
        <div class="drawer-search"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9CA3AF"/><path d="M16.5 16.5L21 21" stroke="#9CA3AF"/></svg><input v-model="q" placeholder="Une envie, un restaurant..." @keydown.enter="go"/></div>
        <nav>
          <router-link to="/" @click="close">Accueil</router-link>
          <router-link to="/accueil" @click="close">Restaurants</router-link>
          <a href="#cuisines" @click="close">Nos cuisines</a>
          <a href="#esprit" @click="close">L'esprit TonMenu</a>
          <a href="#marche" @click="close">Comment ça marche</a>
          <router-link to="/pro" @click="close">Espace partenaire ↗</router-link>
        </nav>
      </div>
    </header>
    <div v-if="menuOpen" class="backdrop" @click="close"></div>

    <nav class="redbar">
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

    <footer class="footer">
      <div class="foot-inner">
        <div class="col brand">
          <img src="/extracted/logo.png" alt="TonMenu" style="height:24px; filter: brightness(0) invert(1);" />
          <p>Les bonnes adresses d'ici.<br>Les saveurs qu'on aime.<br>Le quartier, en quelques clics.</p>
          <div class="loc">● Yopougon · Abidjan · Côte d'Ivoire</div>
        </div>
        <div class="col"><h5>À la carte</h5><a>Maquis</a><a>Grillades / Rôtisserie</a><a>Attiéké & Aloco</a><a>Cuisine africaine (autre)</a></div>
        <div class="col"><h5>À vos côtés</h5><a>Mes commandes</a><a>Mes bonnes adresses</a><a>Aide & questions</a><a>Espace partenaire</a></div>
        <div class="col cta"><h5>Un petit creux ?</h5><p>Votre prochain bon repas<br>n'est jamais bien loin.</p><button @click="$router.push('/accueil')">Installer l'application ↓</button><small>Sans compte pour commander.<br>Paiements simulés dans cette version.</small></div>
      </div>
      <div class="foot-bottom"><span>© 2025 TonMenu. Votre repas préféré, en quelques clics.</span><span>Orange Money · MTN MoMo · Moov Money</span></div>
    </footer>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app.js'
import { useCartStore } from '../stores/cart.js'
const app=useAppStore(); const cart=useCartStore(); const router=useRouter()
const menuOpen=ref(false); const q=ref('')
function toggleMenu(){ menuOpen.value=!menuOpen.value }
function close(){ menuOpen.value=false }
function go(){ if(q.value) router.push({path:'/accueil', query:{q:q.value}}); else router.push('/accueil'); close() }
watch(menuOpen, v=> document.body.style.overflow=v?'hidden':'')
router.afterEach(()=> close())
</script>
<style scoped>
.site-layout{ background:#fff; }
.topbar{ display:flex; justify-content:space-between; align-items:center; font-size:10px; color:#6B7280; background:#F9F6F0; padding:6px 24px; border-bottom:1px solid #E5E7EB; letter-spacing:.1px; }
.topbar .center{ font-weight:600; }
.topbar a{ color:#6B7280; text-decoration:none; }
.header{ position:sticky; top:0; z-index:30; background:#fff; border-bottom:1px solid #E5E7EB; }
.header-inner{ max-width:1280px; margin:0 auto; padding:12px 24px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:16px; }
.h-left{ display:flex; align-items:center; gap:12px; }
.burger{ display:none; flex-direction:column; gap:4px; width:36px; height:36px; border:1px solid #E5E7EB; border-radius:50%; background:#fff; align-items:center; justify-content:center; cursor:pointer; }
.burger .line{ width:14px; height:1.5px; background:#111; border-radius:1px; }
.search{ display:flex; align-items:center; gap:8px; border-bottom:1px solid #E5E7EB; padding:8px 4px 8px 0; width:300px; }
.search input{ border:none; outline:none; flex:1; font-size:12px; }
.search .go{ border:none; background:none; color:#9CA3AF; cursor:pointer; font-size:14px; }
.logo{ justify-self:center; }
.h-right{ display:flex; align-items:center; gap:10px; justify-self:end; }
.addr{ display:flex; align-items:center; gap:8px; border:1px solid #F3F4F6; border-radius:999px; padding:6px 12px; background:#fff; cursor:pointer; }
.addr span small{ display:block; font-size:7px; letter-spacing:.6px; color:#9CA3AF; font-weight:700; }
.addr span strong{ font-size:11px; color:#111; }
.ic{ width:36px; height:36px; border-radius:50%; border:1px solid #E5E7EB; background:#fff; display:grid; place-items:center; position:relative; cursor:pointer; color:#111; }
.ic.cart{ border-color:#111; }
.badge{ position:absolute; top:-3px; right:-3px; background:#111; color:#fff; font-size:7px; font-weight:800; min-width:16px; height:16px; border-radius:50%; display:grid; place-items:center; }
.badge{ background:#EC3D2E; }
.drawer{ position:fixed; top:62px; left:0; right:0; bottom:0; background:#fff; z-index:31; padding:16px 20px; overflow:auto; border-top:1px solid #E5E7EB; }
.drawer-search{ display:flex; align-items:center; gap:8px; border:1px solid #E5E7EB; border-radius:999px; padding:10px 14px; background:#F9FAFB; }
.drawer-search input{ flex:1; border:none; outline:none; background:transparent; font-size:14px; }
.drawer nav{ display:flex; flex-direction:column; margin-top:16px; }
.drawer nav a{ padding:14px 0; border-bottom:1px solid #F3F4F6; font-weight:700; color:#111; text-decoration:none; font-size:14px; }
.backdrop{ position:fixed; inset:0; top:88px; background:rgba(0,0,0,.2); z-index:29; }
.redbar{ background:#EC3D2E; position:sticky; top:61px; z-index:20; overflow:auto; scrollbar-width:none; }
.redbar::-webkit-scrollbar{ display:none; }
.red-inner{ max-width:1280px; margin:0 auto; padding:9px 24px; display:flex; gap:28px; align-items:center; overflow:auto; scrollbar-width:none; }
.red-inner a{ color:#fff; font-size:11px; font-weight:600; white-space:nowrap; text-decoration:none; letter-spacing:.2px; }
.red-inner a.router-link-active{ text-decoration:underline; text-underline-offset:4px; }
.footer{ background:#0B0B0B; color:#ddd; }
.foot-inner{ max-width:1280px; margin:0 auto; padding:40px 24px; display:grid; grid-template-columns:1.5fr 1fr 1fr 1.3fr; gap:24px; }
.brand p{ font-size:11px; color:#9CA3AF; line-height:1.5; margin:10px 0; }
.loc{ font-size:11px; color:#EC3D2E; }
.col h5{ color:#fff; font-size:11px; font-weight:700; margin:0 0 10px; }
.col a{ display:block; color:#9CA3AF; font-size:11px; margin:6px 0; }
.cta p{ font-size:11px; color:#9CA3AF; }
.cta button{ margin-top:10px; background:#EC3D2E; color:#fff; border:none; padding:9px 14px; border-radius:999px; font-weight:700; font-size:11px; cursor:pointer; }
.cta small{ display:block; margin-top:8px; font-size:9px; color:#6B7280; }
.foot-bottom{ max-width:1280px; margin:0 auto; border-top:1px solid #1F2937; padding:14px 24px; display:flex; justify-content:space-between; font-size:10px; color:#6B7280; }
@media(max-width:1024px){ .header-inner{ grid-template-columns:auto 1fr auto; } .search{ width:240px; } .foot-inner{ grid-template-columns:1fr 1fr; } }
@media(max-width:768px){
  .topbar{ flex-direction:column; font-size:9px; padding:6px 12px; }
  .header-inner{ grid-template-columns:1fr auto; padding:10px 14px; }
  .h-left .search{ display:none; }
  .burger{ display:flex; }
  .logo{ justify-self:start; }
  .h-right .addr span{ display:none; }
  .h-right .addr{ width:36px; height:36px; border-radius:50%; padding:0; justify-content:center; }
  .redbar{ top:61px; }
  .foot-inner{ grid-template-columns:1fr; text-align:center; }
  .foot-bottom{ flex-direction:column; gap:6px; text-align:center; }
}
@media(min-width:769px){ .drawer,.backdrop{ display:none !important; } }
</style>
