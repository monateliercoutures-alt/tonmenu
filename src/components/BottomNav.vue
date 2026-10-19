<template>
  <nav class="bottom-nav" role="navigation" aria-label="Navigation principale">
    <router-link v-for="tab in tabs" :key="tab.to" :to="tab.to" :aria-current="isActive(tab) ? 'page' : undefined" :class="['tab', { active: isActive(tab)}]">
      <span class="icon-wrap" :class="{ activeBg: isActive(tab) }">
        <component :is="tab.icon" :size="22" :stroke-width="isActive(tab) ? 2.4 : 1.9" />
        <span v-if="tab.badge" class="badge-dot"></span>
      </span>
      <span class="label">{{ tab.label }}</span>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Home, Search, ShoppingBag, User } from 'lucide-vue-next'
import { useAppStore } from '../stores/app.js'
import { computed } from 'vue'

const route = useRoute()
const app = useAppStore()

const tabs = [
  { label: 'Accueil', to: '/accueil', icon: Home },
  { label: 'Explorer', to: '/explorer', icon: Search, badge: computed(() => false) },
  { label: 'Commandes', to: '/commandes', icon: ShoppingBag, badge: computed(() => app.orders.some(o => ['nouvelle','paiement_en_attente','acceptée','en_préparation','prête','en_livraison'].includes(o.status))) },
  { label: 'Compte', to: '/compte', icon: User },
]

function isActive(tab) {
  if (tab.to === '/accueil') return route.path === '/accueil' || route.path === '/'
  return route.path.startsWith(tab.to)
}
</script>

<style scoped>
.bottom-nav{
  position:fixed; left:0; right:0; bottom:0; z-index:40;
  display:flex; justify-content:space-around; align-items:center;
  height:64px; padding-bottom: env(safe-area-inset-bottom);
  background:#fff; border-top:1px solid #eee;
  box-shadow: 0 -4px 20px rgba(0,0,0,.05);
}
.tab{
  flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px;
  text-decoration:none; color:#9AA0A6; font-size:12px; font-weight:500;
  min-height:44px; min-width:44px; padding:4px 0;
}
.tab.active{ color:#111; font-weight:700; }
.icon-wrap{
  position:relative; width:32px; height:28px; display:grid; place-items:center; border-radius:999px; transition:.2s;
}
.icon-wrap.activeBg{ background:#FFF6CC; }
.badge-dot{
  position:absolute; top:0; right:2px; width:8px; height:8px; border-radius:50%; background:#0E8A5A; border:2px solid #fff;
}
.label{ font-size:11.5px; letter-spacing:.1px; }
@media (min-width:1024px){
  .bottom-nav{ display:none; }
}
</style>
