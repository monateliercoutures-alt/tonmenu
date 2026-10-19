<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>FAQ</h1></div>
    <div v-for="(q,i) in faqs" :key="i" class="faq">
      <button @click="q.open=!q.open" class="q">{{ q.q }} <ChevronDown :size="16" :class="{ rot: q.open }"/></button>
      <p v-if="q.open">{{ q.a }}</p>
    </div>
    <a href="https://wa.me/2250707123456?text=Bonjour%20TonMenu%20support" target="_blank" class="wa">Contacter le support WhatsApp</a>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ArrowLeft, ChevronDown } from 'lucide-vue-next'
const faqs = ref([
  { q:'Comment payer en Mobile Money ?', a:'Choisissez Orange, MTN ou Moov, envoyez le montant au numéro du restaurant et cliquez sur J’ai payé.', open:true },
  { q:'Livraison ou retrait ?', a:'Vous pouvez choisir TonMenu Express ou retrait sur place selon le restaurant.' },
  { q:'Annulation ?', a:'Annulation possible avant acceptation par le restaurant.' },
  { q:'Frais de livraison ?', a:'Variables par zone, gratuits chez de nombreux partenaires.' },
])
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
h1{ font-size:18px; font-weight:800; margin:0; }
.faq{ border-bottom:1px solid #eee; }
.q{ width:100%; display:flex; justify-content:space-between; align-items:center; padding:14px 0; background:none; border:none; font-weight:600; text-align:left; }
.faq p{ color:#555; font-size:13px; margin:0 0 12px; }
.wa{ display:block; margin-top:16px; text-align:center; background:#25D366; color:#fff; padding:12px; border-radius:999px; text-decoration:none; font-weight:700; }
.rot{ transform:rotate(180deg); }
</style>
