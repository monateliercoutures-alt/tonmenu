<template>
  <section class="wrap">
    <h2>Pourquoi <em>commander</em> sur TonMenu ?</h2>
    <div class="grid">
      <div v-for="b in items" :key="b.title" class="card">
        <div class="icon" v-html="b.icon"></div>
        <h3>{{ b.title }}</h3>
        <p>{{ b.desc }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
const items=[
  {title:'Rapide & fiable', desc:'Vos plats arrivent chauds, à l’heure dite.', icon:'◷'},
  {title:'100 % Local', desc:'Vos restaurateurs de quartier mis en avant.', icon:'♡'},
  {title:'Paiement simple', desc:'Mobile Money, carte ou à la livraison.', icon:'◈'},
  {title:'Service attentionné', desc:'Une équipe qui répond vite et bien.', icon:'☺'},
]
</script>
<style scoped>
.wrap{ background:#F8F4EE; padding:72px 24px; max-width:1220px; margin:0 auto; text-align:center; }
h2{ font-size:30px; font-weight:800; margin:0 0 22px; } h2 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; }
.grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.card{ background:#fff; border:1px solid #E5E7EB; border-radius:12px; padding:18px 14px; }
.icon{ width:36px; height:36px; border-radius:50%; border:1px solid #111; display:grid; place-items:center; margin:0 auto 10px; font-size:14px; }
.card h3{ font-size:13px; font-weight:800; margin:0 0 6px; } .card p{ font-size:12px; color:#6B6B6B; margin:0; }
@media(max-width:900px){ .grid{ grid-template-columns:repeat(2,1fr); } }
@media(max-width:560px){ .grid{ grid-template-columns:1fr; } }
</style>
