<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>Mes adresses</h1></div>
    <div v-for="a in addrs" :key="a.id" class="addr">
      <div><strong>{{ a.label }}</strong><div class="small">{{ a.address }} — {{ a.detail }}</div></div>
      <button @click="remove(a.id)"><Trash :size="16"/></button>
    </div>
    <div class="form">
      <input v-model="newLabel" placeholder="Label (Maison / Travail)" />
      <input v-model="newAddr" placeholder="Adresse" />
      <input v-model="newDetail" placeholder="Repère" />
      <button class="btn-red" @click="add">Ajouter</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ArrowLeft, Trash } from 'lucide-vue-next'
import { mockAddresses } from '../../data/mockData.js'
const addrs = ref([...mockAddresses])
const newLabel=ref(''), newAddr=ref(''), newDetail=ref('')
function add(){ if(!newAddr.value) return; addrs.value.push({ id: Date.now().toString(), label: newLabel.value||'Autre', address: newAddr.value, detail: newDetail.value }); newLabel.value=''; newAddr.value=''; newDetail.value='' }
function remove(id){ addrs.value = addrs.value.filter(a=> a.id!==id) }
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
h1{ font-size:18px; font-weight:800; margin:0; }
.addr{ display:flex; justify-content:space-between; align-items:center; border:1px solid #eee; border-radius:14px; padding:12px; margin-top:10px; }
.small{ font-size:12px; color:#777; }
.form{ margin-top:14px; display:flex; flex-direction:column; gap:8px; }
.form input{ padding:10px 12px; border:1px solid #ddd; border-radius:10px; }
.btn-red{ background:#ec3d2e; color:#fff; border:none; padding:12px; border-radius:999px; font-weight:700; }
</style>
