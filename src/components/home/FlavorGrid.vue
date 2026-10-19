<template>
  <section class="wrap">
    <p class="eyebrow">LA GOURMANDISE PARLE TOUTES LES LANGUES</p>
    <h2>Les saveurs qu'on aime</h2>
    <p class="sub">Des inspirations à retrouver selon les menus de nos partenaires.</p>
    <div class="grid">
      <a v-for="f in flavors" :key="f.title" class="card" href="#decouvertes">
        <div class="imgwrap"><img :src="f.img" :alt="f.title" loading="lazy" /></div>
        <small>Cuisine locale</small>
        <h3>{{ f.title }}</h3>
        <span>Explorer les restaurants →</span>
      </a>
    </div>
    <p class="legal">Photos d'inspiration. Les plats disponibles sont ceux des menus partenaires. Les marques visibles ne constituent pas une affiliation.</p>
  </section>
</template>
<script setup>
const flavors=[
  {title:'Plats en sauce', img:'/thumbs/saveur-0.png'},
  {title:'Poisson & crevettes', img:'/thumbs/saveur-1.png'},
  {title:'Attiéké & poisson', img:'/thumbs/saveur-2.png'},
  {title:'Riz & poisson', img:'/thumbs/saveur-3.png'},
  {title:'Burgers généreux', img:'/thumbs/saveur-4.png'},
  {title:'Pizzas gourmandes', img:'/thumbs/saveur-5.png'},
  {title:'Poulet croustillant', img:'/thumbs/saveur-6.png'},
  {title:'Croques dorés', img:'/thumbs/saveur-7.png'},
]
</script>
<style scoped>
.wrap{ background:#fff; padding:36px 24px 24px; max-width:1220px; margin:0 auto; text-align:center; }
.eyebrow{ color:#EC3D2E; font-size:9px; letter-spacing:.12em; font-weight:800; margin:0 0 8px; }
h2{ font-size:24px; font-weight:800; margin:0 0 6px; }
.sub{ font-size:11px; color:#6B6B6B; margin:0 0 18px; }
.grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.card{ text-decoration:none; color:inherit; display:flex; flex-direction:column; align-items:center; }
.imgwrap{ width:100%; height:277px; border-radius:12px; overflow:hidden; background:#FDF6EE; }
.imgwrap img{ width:100%; height:100%; object-fit:cover; display:block; }
.card small{ font-size:8px; color:#9CA3AF; margin-top:10px; letter-spacing:.06em; }
.card h3{ font-size:12px; font-weight:800; margin:4px 0 6px; color:#111; }
.card span{ font-size:10px; color:#EC3D2E; font-weight:600; }
.legal{ font-size:9px; color:#9CA3AF; margin-top:16px; }
@media(max-width:900px){ .grid{ grid-template-columns:repeat(2,1fr); } .imgwrap{ height:240px; } }
@media(max-width:560px){ .grid{ grid-template-columns:1fr; } }
</style>
