<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>Compte</h1></div>
    <div class="card">
      <label>Nom</label><input v-model="name" />
      <label>Téléphone</label><input v-model="phone" />
      <label>E-mail (facultatif)</label><input v-model="email" placeholder="ex@mail.com" />
      <button class="btn-red" @click="save">Enregistrer</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import { useAuthStore } from '../../stores/auth.js'
const auth = useAuthStore()
const name = ref(auth.user?.name || 'Kouakou Mark')
const phone = ref(auth.user?.phone || '+2250103021672')
const email = ref('')
function save(){ alert('Profil enregistré (mock)') }
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
h1{ font-size:18px; font-weight:800; margin:0; }
.card{ margin-top:12px; border:1px solid #eee; border-radius:16px; padding:14px; display:flex; flex-direction:column; gap:8px; }
label{ font-size:12px; color:#666; font-weight:600; }
input{ padding:10px 12px; border:1px solid #ddd; border-radius:10px; }
.btn-red{ margin-top:8px; background:#ec3d2e; color:#fff; border:none; padding:12px; border-radius:999px; font-weight:700; }
</style>
