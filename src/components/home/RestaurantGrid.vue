<template>
  <section id="decouvertes" class="wrap">
    <p class="eyebrow">LES BONNES ADRESSES DU QUARTIER</p>
    <h2>Vos prochaines découvertes</h2>
    <p class="sub">De vraies cuisines, tout près de chez vous.</p>
    <div class="bar">
      <span class="pillLight">Tous les restaurants <em>0</em></span>
      <button class="sort">≡ Recommandés ▾</button>
    </div>
    <div class="empty">
      <div class="emptyImg">
        <img src="/thumbs/saveur-0.png" alt="Plat en sauce" loading="lazy" />
        <span class="badge">BIENTÔT<br>À TABLE !</span>
      </div>
      <div class="emptyTxt">
        <small>LES PREMIERS PARTENAIRES ARRIVENT</small>
        <h3>Le quartier se met à table.</h3>
        <p>Nous préparons les premières bonnes adresses de Yopougon.<br>Vous avez un restaurant ? Faites découvrir votre cuisine.</p>
        <router-link to="/pro" class="btn">Inscrire mon restaurant <span>↗</span></router-link>
      </div>
    </div>
  </section>
</template>
<style scoped>
.wrap{ background:#FAF8F3; padding:40px 24px; max-width:1220px; margin:0 auto; text-align:center; }
.eyebrow{ color:#EC3D2E; font-size:9px; letter-spacing:.12em; font-weight:800; margin:0 0 8px; }
h2{ font-size:26px; font-weight:800; margin:0 0 6px; }
.sub{ font-size:11px; color:#6B6B6B; margin:0 0 16px; }
.bar{ display:flex; justify-content:space-between; align-items:center; margin:18px 0; }
.pillLight{ background:#fff; border:1px solid #E5E7EB; padding:8px 12px; border-radius:999px; font-size:11px; font-weight:700; }
.pillLight em{ background:#F3E8D8; width:16px; height:16px; border-radius:50%; display:inline-grid; place-items:center; font-size:9px; font-style:normal; margin-left:6px; }
.sort{ background:#fff; border:1px solid #E5E7EB; padding:8px 12px; border-radius:999px; font-size:11px; font-weight:600; }
.empty{ display:grid; grid-template-columns:320px 1fr; gap:24px; background:#fff; border:1px dashed #E7D9C0; border-radius:14px; padding:22px; align-items:center; text-align:left; max-width:860px; margin:0 auto; }
.emptyImg{ position:relative; }
.emptyImg img{ width:100%; height:180px; object-fit:cover; border-radius:60% 60% 12px 12px / 35% 35% 12px 12px; }
.badge{ position:absolute; top:6px; right:4px; background:#FFD633; color:#111; font-size:8px; font-weight:800; width:60px; height:60px; border-radius:50%; display:grid; place-items:center; text-align:center; transform:rotate(8deg); line-height:1.1; }
.emptyTxt small{ color:#EC3D2E; font-size:8px; letter-spacing:.08em; font-weight:800; }
.emptyTxt h3{ font-size:18px; font-weight:800; margin:6px 0; }
.emptyTxt p{ color:#6B6B6B; font-size:11px; line-height:1.5; margin:0 0 14px; }
.btn{ display:inline-flex; gap:6px; align-items:center; background:#EC3D2E; color:#fff; padding:10px 16px; border-radius:999px; font-size:11px; font-weight:700; text-decoration:none; }
@media(max-width:700px){ .empty{ grid-template-columns:1fr; text-align:center; } .bar{ flex-direction:column; gap:10px; } }
</style>
