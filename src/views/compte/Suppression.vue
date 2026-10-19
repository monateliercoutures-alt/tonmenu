<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>Supprimer mon compte</h1></div>
    <div class="warn">
      <AlertTriangle :size="22" />
      <p>Cette action est irréversible. Toutes vos commandes, adresses et favoris seront supprimés.</p>
    </div>
    <label><input type="checkbox" v-model="confirm" /> Je comprends et je souhaite supprimer mon compte</label>
    <button class="btn-red" :disabled="!confirm" @click="del">Supprimer définitivement</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, AlertTriangle } from 'lucide-vue-next'
import { useAuthStore } from '../../stores/auth.js'
const router=useRouter(); const auth=useAuthStore(); const confirm=ref(false)
function del(){ if(confirm.value){ auth.logout(); localStorage.clear(); alert('Compte supprimé (mock)'); router.push('/accueil') } }
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
h1{ font-size:18px; font-weight:800; margin:0; }
.warn{ margin-top:12px; background:#FFF3E0; border:1px solid #FFCC80; border-radius:14px; padding:12px; display:flex; gap:10px; font-size:13px; color:#6D4C00; }
label{ display:flex; gap:8px; margin-top:12px; font-size:13px; }
.btn-red{ width:100%; margin-top:12px; background:#D32F2F; color:#fff; border:none; padding:12px; border-radius:999px; font-weight:700; }
.btn-red:disabled{ opacity:.5; }
</style>
