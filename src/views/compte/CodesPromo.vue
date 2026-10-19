<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>Codes promo</h1></div>
    <div class="input-row"><input v-model="code" placeholder="Saisir un code" /><button @click="apply">Appliquer</button></div>
    <div v-if="msg" class="msg">{{ msg }}</div>
    <div class="codes">
      <div class="code-card"><strong>BIENVENUE10</strong><span>-10% sur la 1re commande</span><span class="valid">Actif</span></div>
      <div class="code-card expired"><strong>TONMENU20</strong><span>-20% expiré</span><span class="invalid">Expiré</span></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
const code=ref(''); const msg=ref('')
function apply(){ if(code.value.toUpperCase()==='BIENVENUE10'){ msg.value='Code appliqué: -10%'; } else msg.value='Code invalide' }
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
h1{ font-size:18px; font-weight:800; margin:0; }
.input-row{ display:flex; gap:8px; margin-top:12px; }
.input-row input{ flex:1; padding:10px 12px; border:1px solid #ddd; border-radius:999px; }
.input-row button{ padding:10px 16px; background:#111; color:#fff; border:none; border-radius:999px; font-weight:700; }
.msg{ margin-top:8px; font-size:13px; color:#0E8A5A; }
.codes{ margin-top:12px; display:flex; flex-direction:column; gap:8px; }
.code-card{ border:1px solid #eee; border-radius:14px; padding:12px; display:flex; flex-direction:column; }
.code-card.expired{ opacity:.6; }
.valid{ color:#0E8A5A; font-size:12px; font-weight:700; }
.invalid{ color:#D32F2F; font-size:12px; }
</style>
