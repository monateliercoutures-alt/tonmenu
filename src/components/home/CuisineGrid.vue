<template>
  <section class="wrap">
    <p class="eyebrow">CHAQUE ENVIE A SON MENU</p>
    <h2>Qu'est-ce qui vous fait envie ?</h2>
    <div class="bar">
      <button class="pillActive">🍴 Toutes les cuisines <span>0</span></button>
      <span class="hint">10 catégories de restauration</span>
    </div>
    <div class="grid">
      <a v-for="c in items" :key="c.label" class="card" href="#decouvertes">
        <div class="imgCircle"><img :src="c.img" :alt="c.label" width="120" height="120" loading="lazy" /></div>
        <h3>{{ c.label }}</h3>
        <p>{{ c.desc }}</p>
        <span class="count">0 restaurants</span>
      </a>
    </div>
  </section>
</template>
<script setup>
const items=[
  {label:'Maquis', desc:'Restaurants ivoiriens traditionnels, souvent en plein air : kedjenou, sauce feuille, sauce graine.', img:'/extracted/categories/cat-0-0.png'},
  {label:'Grillades / Rôtisserie', desc:'Poulet braisé, poisson grillé et brochettes, en kiosque ou à l\'allocodrome.', img:'/extracted/categories/cat-0-1.png'},
  {label:'Attiéké & Aloco', desc:'Spécialités de manioc râpé et de banane plantain, incontournables de la street-food ivoirienne.', img:'/extracted/categories/cat-0-2.png'},
  {label:'Cuisine africaine (autre)', desc:'Les saveurs d\'Afrique de l\'Ouest hors Côte d\'Ivoire : cuisines sénégalaise, ghanéenne et autres.', img:'/extracted/categories/cat-0-3.png'},
  {label:'Cuisine libanaise', desc:'Mezzés, chawarmas, grillades et spécialités libanaises à découvrir à Abidjan.', img:'/extracted/categories/cat-0-4.png'},
  {label:'Fast-food', desc:'Burgers, sandwichs et poulet frit des enseignes locales et internationales.', img:'/extracted/categories/cat-1-0.png'},
  {label:'Pizza / Italien', desc:'Pizzas, pâtes et spécialités italiennes, à partager ou à savourer en solo.', img:'/extracted/categories/cat-1-1.png'},
  {label:'Fruits de mer', desc:'Poissons, crevettes, langouste et spécialités marines, notamment côté lagune.', img:'/extracted/categories/cat-1-2.png'},
  {label:'Cuisine française / européenne', desc:'Bistrots, brasseries et plats des cuisines française et européenne.', img:'/extracted/categories/cat-1-3.png'},
  {label:'Pâtisserie / Snacks / Café', desc:'Viennoiseries, gâteaux, snacks et boissons chaudes pour toutes les pauses.', img:'/extracted/categories/cat-1-4.png'},
]
</script>
<style scoped>
.wrap{ background:#fff; padding:40px 24px 36px; max-width:1220px; margin:0 auto; text-align:center; }
.eyebrow{ color:#EC3D2E; font-size:10px; letter-spacing:.15em; font-weight:800; margin:0 0 8px; }
h2{ font-size:26px; font-weight:800; margin:0 0 16px; }
.bar{ display:flex; justify-content:space-between; align-items:center; margin:0 0 18px; }
.pillActive{ background:#EC3D2E; color:#fff; border:none; border-radius:999px; padding:9px 14px; font-size:11px; font-weight:700; display:inline-flex; gap:6px; align-items:center; }
.pillActive span{ background:#fff; color:#EC3D2E; width:16px; height:16px; border-radius:50%; display:grid; place-items:center; font-size:9px; }
.hint{ font-size:11px; color:#9CA3AF; }
.grid{ display:grid; grid-template-columns:repeat(5,1fr); gap:14px; }
.card{ background:#FFFBF5; border:1px solid #F3E8D8; border-radius:12px; padding:16px 12px; text-decoration:none; color:#111; display:flex; flex-direction:column; align-items:center; }
.imgCircle{ width:120px; height:120px; border-radius:50%; overflow:hidden; background:#fff; border:3px solid #fff; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.imgCircle img{ width:100%; height:100%; object-fit:cover; }
.card h3{ font-size:11px; font-weight:800; margin:10px 0 6px; }
.card p{ font-size:10px; color:#6B6B6B; line-height:1.4; margin:0; min-height:38px; }
.count{ margin-top:10px; background:#F3E8D8; color:#6B6B6B; font-size:9px; padding:5px 8px; border-radius:999px; }
@media(max-width:900px){ .grid{ grid-template-columns:repeat(3,1fr); } .bar{ flex-direction:column; gap:8px; } }
@media(max-width:560px){ .grid{ grid-template-columns:repeat(2,1fr); } }
</style>
