<template>
  <section class="wrap">
    <p class="eyebrow">— MADE IN ABIDJAN</p>
    <h2>Qu'est-ce qui vous <em>fait envie ?</em></h2>
    <div class="grid">
      <a v-for="c in items" :key="c.label" class="card" href="#decouvertes">
        <img :src="c.img" :alt="c.label" width="100" height="100" loading="lazy" />
        <span>{{ c.label }}</span>
      </a>
    </div>
  </section>
</template>
<script setup>
const items=[
  {label:'Grillades', img:'/thumbs/thumb-0.png'},
  {label:'Garba', img:'/thumbs/thumb-1.png'},
  {label:'Attiéké', img:'/thumbs/thumb-2.png'},
  {label:'Poulet', img:'/thumbs/thumb-3.png'},
  {label:'Poisson', img:'/thumbs/thumb-4.png'},
  {label:'Libanaise', img:'/thumbs/thumb-5.png'},
  {label:'Française', img:'/thumbs/thumb-6.png'},
  {label:'Desserts', img:'/thumbs/thumb-7.png'},
  {label:'Jus', img:'/thumbs/thumb-8.png'},
  {label:'Packs Famille', img:'/thumbs/thumb-9.png'},
]
</script>
<style scoped>
.wrap{ background:#fff; padding:72px 24px; max-width:1220px; margin:0 auto; text-align:center; }
.eyebrow{ color:#EC3D2E; font-size:10px; letter-spacing:.15em; font-weight:800; margin:0 0 8px; }
h2{ font-family:'Plus Jakarta Sans', sans-serif; font-size:32px; font-weight:800; margin:0 0 24px; color:#111; }
h2 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; }
.grid{ display:grid; grid-template-columns:repeat(5,1fr); gap:14px; }
.card{ background:#FDFBF7; border:1px solid #F3EFE6; border-radius:12px; padding:16px 10px 14px; text-decoration:none; color:#111; display:flex; flex-direction:column; align-items:center; gap:10px; transition:border-color .2s, transform .2s; }
.card:hover{ border-color:#EC3D2E; transform:translateY(-2px); }
.card img{ width:100px; height:100px; border-radius:50%; object-fit:cover; background:#fff; }
.card span{ font-size:12px; font-weight:700; }
@media(max-width:900px){ .grid{ grid-template-columns:repeat(3,1fr); } }
@media(max-width:560px){ .grid{ grid-template-columns:repeat(2,1fr); } }
@media(min-width:1220px){ .wrap{ padding:80px 24px; } }
</style>
