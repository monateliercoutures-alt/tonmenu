<template>
  <div class="site-layout">
    <TopInfoBar class="desktop-only" />
    <SiteHeader class="desktop-only" />
    <MainNav class="desktop-only" />
    <!-- Mobile fallback: header simple -->
    <div class="mobile-only mhead">
      <button class="burger" @click="menuOpen=!menuOpen" :aria-expanded="menuOpen"><span/><span/><span/></button>
      <router-link to="/" class="mlogo"><img src="/extracted/logo.png" alt="TonMenu" height="22" /></router-link>
      <router-link to="/panier" class="mcart">🛒 {{ cart.count }}</router-link>
    </div>
    <div v-if="menuOpen" class="mnav">
      <router-link to="/" @click="menuOpen=false">Accueil</router-link>
      <router-link to="/accueil" @click="menuOpen=false">Restaurants</router-link>
      <router-link to="/pro" @click="menuOpen=false">Devenir partenaire</router-link>
    </div>
    <main><slot /></main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import TopInfoBar from '../components/home/TopInfoBar.vue'
import SiteHeader from '../components/home/SiteHeader.vue'
import MainNav from '../components/home/MainNav.vue'
import { useCartStore } from '../stores/cart.js'
const cart=useCartStore(); const menuOpen=ref(false)
</script>
<style scoped>
.desktop-only{ display:block; }
.mobile-only{ display:none; }
@media(max-width:1023px){
  .desktop-only{ display:none; }
  .mobile-only{ display:flex; }
}
.mhead{ align-items:center; justify-content:space-between; padding:10px 14px; background:#fff; border-bottom:1px solid #E5E7EB; position:sticky; top:0; z-index:30; }
.burger{ display:flex; flex-direction:column; gap:3px; width:36px; height:36px; border:1px solid #E5E7EB; border-radius:50%; background:#fff; align-items:center; justify-content:center; }
.burger span{ width:14px; height:1.5px; background:#111; border-radius:1px; }
.mlogo img{ height:22px; }
.mcart{ text-decoration:none; color:#111; font-weight:700; font-size:13px; }
.mnav{ background:#fff; border-bottom:1px solid #E5E7EB; padding:12px 14px; display:flex; flex-direction:column; gap:10px; }
.mnav a{ color:#111; text-decoration:none; font-weight:700; }
</style>
