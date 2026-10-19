<template>
  <div class="filters" ref="el">
    <button class="pill"><SlidersHorizontal :size="14"/> Type de plat <ChevronDown :size="14"/></button>
    <button class="pill"><PersonStanding :size="14"/> Retrait</button>
    <button class="pill" @click="showSort=!showSort">Trier par <ChevronDown :size="14"/></button>
    <button class="pill">Promotions</button>
    <button class="pill"><Crown :size="14"/> Les mieux notés</button>
    <div v-if="showSort" class="sort-card">
      <button v-for="o in sorts" :key="o" @click="showSort=false">{{ o }}</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { SlidersHorizontal, ChevronDown, PersonStanding, Crown } from 'lucide-vue-next'
const showSort=ref(false)
const sorts=['Pertinence','Mieux notés','Plus rapides','Livraison gratuite']
</script>
<style scoped>
.filters{ position:sticky; top:0; z-index:5; display:flex; gap:8px; overflow:auto; padding:10px 16px; background:#fff; scrollbar-width:none; border-bottom:1px solid #f3f3f3; }
.filters::-webkit-scrollbar{ display:none; }
.pill{ flex:0 0 auto; display:inline-flex; align-items:center; gap:6px; padding:8px 12px; border-radius:999px; border:1px solid #e8e8e8; background:#fff; font-size:12.5px; font-weight:600; color:#222; cursor:pointer; white-space:nowrap; }
.sort-card{ position:absolute; top:48px; left:16px; background:#fff; border:1px solid #eee; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,.08); padding:8px; display:flex; flex-direction:column; min-width:180px; }
.sort-card button{ text-align:left; padding:10px 12px; border:none; background:none; border-radius:8px; font-size:13px; }
.sort-card button:hover{ background:#FFF6CC; }
</style>
