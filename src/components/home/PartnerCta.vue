<template>
  <section class="wrap">
    <div class="head">
      <div>
        <p class="eyebrow">VOTRE TALENT MÉRITE D'ÊTRE DÉCOUVERT</p>
        <h2>Vous cuisinez. Le quartier se régale.</h2>
        <p>Un menu en ligne, des commandes et votre propre QR code.<br>Rejoignez TonMenu, simplement.</p>
      </div>
      <router-link to="/pro" class="btn">Devenir partenaire <span>↗</span></router-link>
    </div>
    <div class="strip">
      <img v-for="s in photos" :key="s" :src="s" loading="lazy" :alt="s" />
    </div>
  </section>
</template>
<script setup>
const photos=['/thumbs/saveur-0.png','/thumbs/saveur-1.png','/thumbs/saveur-2.png','/thumbs/saveur-3.png','/thumbs/saveur-4.png','/thumbs/saveur-5.png','/thumbs/saveur-6.png','/thumbs/saveur-7.png']
</script>
<style scoped>
.wrap{ background:#fff; padding:36px 24px; max-width:1220px; margin:0 auto; }
.head{ display:flex; justify-content:space-between; align-items:center; gap:16px; }
.eyebrow{ color:#EC3D2E; font-size:8px; letter-spacing:.1em; font-weight:800; margin:0 0 6px; }
h2{ font-size:20px; font-weight:800; margin:0 0 6px; }
.head p{ font-size:11px; color:#6B6B6B; margin:0; }
.btn{ background:#EC3D2E; color:#fff; padding:10px 16px; border-radius:999px; text-decoration:none; font-size:11px; font-weight:700; white-space:nowrap; }
.strip{ display:grid; grid-template-columns:repeat(8,1fr); gap:8px; margin-top:20px; }
.strip img{ width:100%; height:90px; object-fit:cover; border-radius:8px; }
@media(max-width:900px){ .head{ flex-direction:column; text-align:center; } .strip{ grid-template-columns:repeat(4,1fr); } }
</style>
