<template>
  <button v-show="visible" class="scroll-top" @click="scrollTop" aria-label="Remonter en haut">
    <ArrowUp :size="16"/> Haut
  </button>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'
const visible = ref(false)
function onScroll(){ visible.value = window.scrollY > 480 }
function scrollTop(){ window.scrollTo({ top:0, behavior:'smooth' }) }
onMounted(()=> window.addEventListener('scroll', onScroll))
onUnmounted(()=> window.removeEventListener('scroll', onScroll))
</script>
<style scoped>
.scroll-top{ position:fixed; left:50%; transform:translateX(-50%); bottom:78px; z-index:30; background:#fff; border:1px solid #eee; box-shadow:0 6px 18px rgba(0,0,0,.08); border-radius:999px; padding:8px 14px; font-size:13px; font-weight:700; display:inline-flex; align-items:center; gap:6px; }
@media(min-width:1024px){ .scroll-top{ bottom:24px; } }
</style>
