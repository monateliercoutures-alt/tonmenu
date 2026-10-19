<template>
  <header class="header">
    <div class="inner">
      <label class="search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="#9CA3AF" stroke-width="1.6"/><path d="M16.5 16.5L21 21" stroke="#9CA3AF" stroke-width="1.6" stroke-linecap="round"/></svg>
        <input v-model="q" placeholder="Une envie, un restaurant…" @keydown.enter="go" aria-label="Rechercher un restaurant" />
        <button @click="go" aria-label="Rechercher">→</button>
      </label>
      <router-link to="/" class="logo" aria-label="TonMenu accueil">
        <span class="picto" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="0" y="0" width="28" height="28" rx="7" fill="#EC3D2E"/><path d="M7 12c0 0 2.5 5.5 7 5.5S21 12 21 12" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8.5 8.5c0-1 0.8-1.8 1.8-1.6M13 7c0-1.2 1-1.8 2-1.5M17.5 8.2c0-1 0.8-1.8 1.8-1.3" stroke="white" stroke-width="1.2" stroke-linecap="round" opacity="0.95"/><ellipse cx="14" cy="17.8" rx="6.5" ry="1" fill="white" opacity="0.9"/></svg>
        </span>
        <span class="word"><em>Ton</em><b>Menu.</b></span>
      </router-link>
      <div class="actions">
        <button class="addr" @click="app.showAddressSheet=true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" stroke="#EC3D2E" stroke-width="1.5"/><circle cx="12" cy="9" r="2.3" stroke="#EC3D2E" stroke-width="1.5"/></svg>
          <span><small>ADRESSE DE LIVRAISON</small><strong>Choisir une adresse</strong></span>
        </button>
        <button class="ic" @click="app.showLogin=true" aria-label="Mon compte"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.4"/><path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" stroke="currentColor" stroke-width="1.4"/></svg></button>
        <router-link to="/panier" class="ic cart" aria-label="Panier"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 7h12l-1 12H7z" stroke="currentColor" stroke-width="1.4"/><path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.4"/></svg><span class="badge">{{ cart.count }}</span></router-link>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../../stores/app.js'
import { useCartStore } from '../../stores/cart.js'
const app=useAppStore(); const cart=useCartStore(); const router=useRouter(); const q=ref('')
function go(){ if(q.value.trim()) router.push({path:'/accueil', query:{q:q.value}}); else router.push('/accueil') }
</script>
<style scoped>
.header{ background:#fff; border-bottom:1px solid #E5E7EB; position:sticky; top:0; z-index:30; }
.inner{ max-width:1220px; margin:0 auto; padding:18px 24px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:16px; }
.search{ display:flex; align-items:center; gap:8px; border-bottom:1px solid #E5E7EB; padding:8px 4px; width:300px; }
.search input{ flex:1; border:none; outline:none; font-size:13px; background:transparent; }
.search input::placeholder{ color:#9CA3AF; }
.search button{ border:none; background:none; color:#9CA3AF; cursor:pointer; font-size:14px; }
.logo{ display:flex; align-items:center; gap:8px; text-decoration:none; justify-self:center; }
.picto{ width:28px; height:28px; display:grid; place-items:center; }
.word{ font-family:'Playfair Display', serif; font-size:20px; line-height:1; }
.word em{ font-style:italic; font-weight:400; color:#111; }
.word b{ font-style:italic; font-weight:700; color:#EC3D2E; }
.actions{ display:flex; align-items:center; gap:10px; justify-self:end; }
.addr{ display:flex; align-items:center; gap:8px; border:1px solid #E5E7EB; border-radius:999px; padding:6px 12px; background:#fff; cursor:pointer; }
.addr small{ display:block; font-size:7.5px; letter-spacing:.7px; color:#9CA3AF; font-weight:700; }
.addr strong{ font-size:11px; color:#111; }
.ic{ width:36px; height:36px; border-radius:50%; border:1px solid #E5E7EB; background:#fff; display:grid; place-items:center; color:#111; cursor:pointer; position:relative; }
.ic.cart{ border-color:#111; }
.badge{ position:absolute; top:-4px; right:-4px; background:#EC3D2E; color:#fff; font-size:7px; font-weight:800; min-width:14px; height:14px; border-radius:50%; display:grid; place-items:center; padding:0 3px; }
@media(max-width:1024px){ .inner{ grid-template-columns:auto 1fr auto; } .search{ width:220px; } }
@media(max-width:768px){ .inner{ grid-template-columns:1fr auto; padding:12px 14px; } .search{ display:none; } .addr span{ display:none; } .addr{ width:36px; height:36px; border-radius:50%; padding:0; justify-content:center; } }
</style>
