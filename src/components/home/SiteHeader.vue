<template>
  <header class="header">
    <div class="inner">
      <label class="search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="#9CA3AF" stroke-width="1.6"/><path d="M16.5 16.5L21 21" stroke="#9CA3AF" stroke-width="1.6" stroke-linecap="round"/></svg>
        <input v-model="q" placeholder="Une envie, un restaurant…" @keydown.enter="go" aria-label="Rechercher un restaurant" />
        <button @click="go" aria-label="Rechercher">→</button>
      </label>
      <router-link to="/" class="logo" aria-label="TonMenu accueil">
        <img src="/extracted/logo.png" alt="TonMenu" height="28" style="height:28px; display:block;" />
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
.inner{ max-width:1220px; margin:0 auto; padding:16px 24px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:16px; }
.search{ display:flex; align-items:center; gap:8px; border-bottom:1px solid #E5E7EB; padding:8px 4px; width:300px; }
.search input{ flex:1; border:none; outline:none; font-size:12px; background:transparent; }
.search input::placeholder{ color:#9CA3AF; }
.search button{ border:none; background:none; color:#9CA3AF; cursor:pointer; font-size:14px; }
.logo{ display:flex; align-items:center; text-decoration:none; justify-self:center; }
.actions{ display:flex; align-items:center; gap:10px; justify-self:end; }
.addr{ display:flex; align-items:center; gap:8px; border:1px solid #E5E7EB; border-radius:999px; padding:6px 12px; background:#fff; cursor:pointer; }
.addr small{ display:block; font-size:7px; letter-spacing:.7px; color:#9CA3AF; font-weight:700; }
.addr strong{ font-size:11px; color:#111; }
.ic{ width:36px; height:36px; border-radius:50%; border:1px solid #E5E7EB; background:#fff; display:grid; place-items:center; color:#111; cursor:pointer; position:relative; }
.ic.cart{ border-color:#111; }
.badge{ position:absolute; top:-4px; right:-4px; background:#EC3D2E; color:#fff; font-size:7px; font-weight:800; min-width:14px; height:14px; border-radius:50%; display:grid; place-items:center; padding:0 3px; }
@media(max-width:1024px){ .inner{ grid-template-columns:auto 1fr auto; } .search{ width:220px; } }
@media(max-width:768px){ .inner{ grid-template-columns:1fr auto; padding:12px 14px; } .search{ display:none; } .addr span{ display:none; } .addr{ width:36px; height:36px; border-radius:50%; padding:0; justify-content:center; } }
</style>
