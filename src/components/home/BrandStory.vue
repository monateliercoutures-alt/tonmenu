<template>
  <section class="wrap">
    <div class="grid">
      <div class="visual">
        <div class="main"><img src="/extracted/brand-main.png" alt="Poisson et crevettes en sauce" loading="lazy" /></div>
        <div class="mini"><img src="/extracted/brand-mini.png" alt="Burger" loading="lazy" /></div>
        <div class="sticker">ICI, ON AIME<br><b>bien manger.</b></div>
      </div>
      <div class="copy">
        <p class="eyebrow">BIENVENUE CHEZ TONMENU</p>
        <h2>Les bonnes cuisines<br>font les bons quartiers.</h2>
        <p>Une braise qui crépite, une recette qu'on se transmet, une adresse qu'on recommande aux amis. C'est cette cuisine-là qu'on veut rapprocher de vous.</p>
        <p>TonMenu commence à Yopougon, avec une idée simple : donner aux restaurants d'ici une place dans votre quotidien. Rien que de la restauration. Et beaucoup de gourmandise.</p>
        <a href="#decouvertes" class="btn">Trouver ma prochaine adresse <span>→</span></a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.wrap{ background:#fff; padding:40px 24px; max-width:1220px; margin:0 auto; }
.grid{ display:grid; grid-template-columns:1fr 1fr; gap:36px; align-items:center; }
.visual{ position:relative; }
.main{ height:320px; border-radius:12px; overflow:hidden; }
.main img{ width:100%; height:100%; object-fit:cover; }
.mini{ position:absolute; bottom:-12px; left:-12px; width:120px; height:120px; border-radius:8px; overflow:hidden; border:3px solid #fff; box-shadow:0 6px 16px rgba(0,0,0,.12); }
.mini img{ width:100%; height:100%; object-fit:cover; }
.sticker{ position:absolute; bottom:18%; right:-10px; background:#FFD633; color:#111; padding:8px 12px; font-size:10px; font-weight:700; transform:rotate(3deg); line-height:1.1; }
.sticker b{ font-size:11px; }
.eyebrow{ color:#EC3D2E; font-size:8px; letter-spacing:.12em; font-weight:800; margin:0 0 8px; }
h2{ font-size:26px; font-weight:800; line-height:1.1; margin:0 0 12px; }
.copy p{ color:#6B6B6B; font-size:11px; line-height:1.6; margin:0 0 10px; }
.btn{ display:inline-flex; gap:6px; align-items:center; background:#EC3D2E; color:#fff; padding:10px 16px; border-radius:999px; font-size:11px; font-weight:700; text-decoration:none; }
@media(max-width:900px){ .grid{ grid-template-columns:1fr; } .main{ height:260px; } }
</style>
