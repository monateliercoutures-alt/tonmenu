<template>
  <button class="pill" @click="$emit('open')" aria-label="Changer d'adresse">
    <span class="dot"></span>
    <span class="text">{{ short }}</span>
    <ChevronDown :size="14" />
  </button>
</template>
<script setup>
import { computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
const props = defineProps({ address: Object })
const short = computed(()=> {
  const a = props.address?.label || props.address?.full || 'Rue Mohamed Diomandé, 389'
  if(a.length > 28) return a.slice(0, 14) + '...' + a.slice(-10)
  return a
})
</script>
<style scoped>
.pill{
  display:inline-flex; align-items:center; gap:6px;
  max-width: 84%; background:#fff; border:1px solid #eee; border-radius:999px;
  padding:7px 12px; font-size:13.5px; font-weight:600; color:#1a1a1a;
  box-shadow:0 2px 10px rgba(0,0,0,.06);
  cursor:pointer; white-space:nowrap; overflow:hidden;
}
.dot{ width:8px; height:8px; border-radius:50%; background:#ec3d2e; flex:0 0 auto; }
.text{ overflow:hidden; text-overflow:ellipsis; }
</style>
