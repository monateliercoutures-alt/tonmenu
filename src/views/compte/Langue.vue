<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>Langue</h1></div>
    <button v-for="l in ['Français (défaut)','English','Wolof']" :key="l" class="lang" :class="{ active: l.includes('Français') }">{{ l }} <Check v-if="l.includes('Français')" :size="16"/></button>
    <p class="hint">Extensible à d’autres langues d’Afrique de l’Ouest.</p>
  </div>
</template>
<script setup>
import { ArrowLeft, Check } from 'lucide-vue-next'
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
h1{ font-size:18px; font-weight:800; margin:0; }
.lang{ width:100%; display:flex; justify-content:space-between; align-items:center; padding:12px; border:1px solid #eee; border-radius:12px; background:#fff; margin-top:8px; font-weight:600; }
.lang.active{ border-color:#ec3d2e; background:#FFF6F2; }
.hint{ font-size:12px; color:#777; margin-top:10px; }
</style>
