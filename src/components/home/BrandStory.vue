<template>
  <section class="wrap">
    <div class="grid">
      <div class="copy">
        <p class="eyebrow">— NOTRE HISTOIRE</p>
        <h2>Le goût du quartier, <em>à portée de main.</em></h2>
        <p class="lead">TonMenu connecte les gourmands d'Abidjan aux meilleurs restaurants de leur quartier — vite, frais et sans complications.</p>
        <div class="checks"><span>✓ Fait pour Abidjan — d'abord Yopougon</span><span>✓ Suivi clair et humain</span></div>
        <a href="#" class="link">Découvrir notre histoire →</a>
      </div>
      <div class="visual">
        <div class="photo">
          <img src="/thumbs/saveur2-2.png" alt="Plat appétissant" width="520" height="340" loading="lazy" />
        </div>
        <div class="sticker" aria-hidden="true"><small>Depuis</small><b>2024</b><small>Abidjan</small></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.wrap{ background:#FDFBF7; padding:72px 24px; max-width:1220px; margin:0 auto; }
.grid{ display:grid; grid-template-columns:1fr 1fr; gap:28px; align-items:center; }
.eyebrow{ color:#EC3D2E; font-size:10px; letter-spacing:.15em; font-weight:800; margin:0 0 8px; }
h2{ font-size:32px; font-weight:800; margin:0 0 12px; line-height:1.05; } h2 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; }
.lead{ color:#374151; font-size:13px; line-height:1.6; margin:0 0 14px; }
.checks{ display:flex; flex-direction:column; gap:6px; margin-bottom:14px; font-size:12px; font-weight:600; }
.link{ color:#EC3D2E; font-weight:800; text-decoration:none; font-size:13px; }
.visual{ position:relative; }
.photo{ border-radius:12px; overflow:hidden; background:#fff; border:1px solid #E5E7EB; height:340px; }
.photo img{ width:100%; height:100%; object-fit:cover; display:block; }
.sticker{ position:absolute; left:10px; bottom:-10px; width:76px; height:76px; border-radius:50%; background:#FFD633; border:1px dashed #111; display:grid; place-items:center; text-align:center; line-height:1; }
.sticker small{ font-size:7px; font-weight:800; letter-spacing:.4px; } .sticker b{ font-size:16px; }
@media(max-width:900px){ .grid{ grid-template-columns:1fr; } .photo{ height:280px; } }
</style>
