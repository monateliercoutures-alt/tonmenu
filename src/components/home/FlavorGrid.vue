<template>
  <section class="wrap">
    <div class="head">
      <div>
        <p class="eyebrow">— SAVEURS & INSPIRATIONS</p>
        <h2>Explorez les <em>saveurs.</em></h2>
      </div>
      <div class="arrows"><button aria-label="Précédent">‹</button><button aria-label="Suivant">›</button></div>
    </div>
    <div class="grid">
      <a v-for="f in flavors" :key="f.title" class="card" href="#">
        <div class="imgwrap"><img :src="f.img" :alt="f.title" width="275" height="275" loading="lazy" /><span class="price">Bientôt</span></div>
        <h3>{{ f.title }}</h3>
        <p>{{ f.desc }}</p>
      </a>
    </div>
    <div class="more"><a href="#" class="pill">Voir toutes les inspirations</a></div>
  </section>
</template>
<script setup>
const flavors=[
  {title:'Midi gourmand', desc:'Menus copieux pour vos pauses déjeuner.', img:'/thumbs/saveur2-0.png'},
  {title:'Street Food Ivoire', desc:'Garba, alloco, brochettes — 100% local.', img:'/thumbs/saveur2-1.png'},
  {title:'Brunch du dimanche', desc:'Pancakes, jus frais et douceurs sucrées.', img:'/thumbs/saveur2-2.png'},
  {title:'Poulet braisé', desc:'Grillades savoureuses façon Abidjan.', img:'/thumbs/saveur2-3.png'},
  {title:'Poisson attiéké', desc:'Le classique ivoirien revisité par nos chefs.', img:'/thumbs/saveur2-0.png'},
  {title:'Desserts maison', desc:'Tartes, glaces et pâtisseries du jour.', img:'/thumbs/saveur2-1.png'},
  {title:'Jus naturels', desc:'Bissap, gingembre, passion — pressés du jour.', img:'/thumbs/saveur2-2.png'},
  {title:'Packs famille', desc:'Plats généreux à partager sans compter.', img:'/thumbs/saveur2-3.png'},
]
</script>
<style scoped>
.wrap{ background:#fff; padding:72px 24px; max-width:1220px; margin:0 auto; }
.head{ display:flex; justify-content:space-between; align-items:flex-end; gap:16px; margin-bottom:18px; }
.eyebrow{ color:#EC3D2E; font-size:10px; letter-spacing:.15em; font-weight:800; margin:0 0 8px; }
h2{ font-size:30px; font-weight:800; margin:0; } h2 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; }
.arrows{ display:flex; gap:8px; } .arrows button{ width:34px; height:34px; border-radius:50%; border:1px solid #E5E7EB; background:#fff; cursor:pointer; font-size:16px; }
.grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.card{ text-decoration:none; color:#111; }
.imgwrap{ position:relative; border-radius:12px; overflow:hidden; background:#F3F4F6; aspect-ratio:1; }
.imgwrap img{ width:100%; height:100%; object-fit:cover; display:block; }
.price{ position:absolute; right:8px; bottom:8px; background:#fff; border-radius:999px; padding:6px 10px; font-size:11px; font-weight:800; box-shadow:0 2px 8px rgba(0,0,0,.12); }
.card h3{ font-size:13px; font-weight:800; margin:10px 0 4px; } .card p{ font-size:12px; color:#6B6B6B; margin:0; line-height:1.4; }
.more{ text-align:center; margin-top:20px; } .pill{ display:inline-block; border:1px solid #E5E7EB; padding:10px 18px; border-radius:999px; text-decoration:none; color:#111; font-weight:700; font-size:13px; }
@media(max-width:900px){ .grid{ grid-template-columns:repeat(2,1fr); } }
@media(max-width:560px){ .grid{ grid-template-columns:1fr; } .head{ flex-direction:column; align-items:flex-start; } }
</style>
