<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>Notifications</h1></div>
    <div v-for="n in notifs" :key="n.label" class="row">
      <div><strong>{{ n.label }}</strong><div class="small">{{ n.desc }}</div></div>
      <label class="switch"><input type="checkbox" v-model="n.on" /><span></span></label>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
const notifs = ref([
  { label:'Suivi de commande', desc:'Changement d’état, livreur en route', on:true },
  { label:'Promos et nouveautés', desc:'Offres des restaurants autour de vous', on:true },
  { label:'Rappels panier', desc:'Paniers non finalisés', on:false },
])
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
h1{ font-size:18px; font-weight:800; margin:0; }
.row{ display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid #f0f0f0; }
.small{ font-size:12px; color:#777; }
.switch{ position:relative; width:42px; height:24px; }
.switch input{ opacity:0; width:0; height:0; }
.switch span{ position:absolute; inset:0; background:#ddd; border-radius:999px; transition:.2s; }
.switch span::after{ content:""; position:absolute; width:18px; height:18px; background:#fff; border-radius:50%; top:3px; left:3px; transition:.2s; }
.switch input:checked + span{ background:#0E8A5A; }
.switch input:checked + span::after{ transform:translateX(18px); }
</style>
