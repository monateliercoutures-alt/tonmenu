<template>
  <section class="hero">
    <div class="inner">
      <div class="copy">
        <p class="eyebrow">Chaud. Généreux. Tout simplement bon.</p>
        <h1>Le vrai goût<br>de chez nous.</h1>
        <p class="desc">De l'alloco doré à la bonne braise du quartier,<br>vos envies ont trouvé leur adresse.</p>
        <p class="sub">Les cuisines d'Abidjan. <b>À votre porte.</b></p>
        <router-link to="/accueil" class="btn">Découvrir les restaurants <span>→</span></router-link>
        <div class="foot"><span>100 % restauration locale</span><span class="muted">Yopougon, on commence chez vous.</span></div>
      </div>
      <div class="media">
        <img src="/extracted/hero-food.png" alt="Poulet braisé, attiéké et alloco" loading="eager" fetchpriority="high" />
        <div class="stamp">
          <small>FAIT POUR</small>
          <b>les bons<br>appétits.</b>
          <span>TONMENU — ABIDJAN</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero{ background:#0A0A0A; color:#fff; }
.inner{ max-width:1220px; margin:0 auto; padding:0 0 0 24px; display:grid; grid-template-columns:520px 1fr; min-height:575px; }
.copy{ padding:48px 24px 18px 0; display:flex; flex-direction:column; justify-content:center; }
.eyebrow{ color:#FFD633; font-style:italic; font-size:11px; margin:0 0 12px; font-family:'Playfair Display', serif; }
h1{ font-size:56px; line-height:.95; font-weight:900; margin:0; letter-spacing:-1px; font-family:'Plus Jakarta Sans', sans-serif; }
.desc{ color:#D1D5DB; font-size:12px; line-height:1.5; margin:14px 0 6px; }
.sub{ font-size:12px; margin:0 0 18px; }
.sub b{ color:#FFD633; }
.btn{ display:inline-flex; gap:8px; align-items:center; background:#EC3D2E; color:#fff; padding:12px 18px; border-radius:999px; font-size:12px; font-weight:700; text-decoration:none; width:fit-content; }
.btn span{ font-size:13px; }
.foot{ margin-top:20px; border-top:1px solid rgba(255,255,255,.14); padding-top:12px; display:flex; justify-content:space-between; font-size:9px; color:#9CA3AF; letter-spacing:.04em; }
.media{ position:relative; overflow:hidden; background:#111; display:flex; align-items:stretch; }
.media img{ width:100%; height:100%; object-fit:cover; display:block; }
.stamp{ position:absolute; top:24px; right:24px; width:88px; height:88px; border-radius:50%; background:#111; border:1.5px dashed #FFD633; color:#FFD633; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; line-height:1.1; transform:rotate(8deg); padding:6px; }
.stamp small{ font-size:6px; color:#fff; letter-spacing:.08em; font-weight:700; }
.stamp b{ font-size:11px; font-family:'Playfair Display', serif; font-style:italic; line-height:1; margin:2px 0; }
.stamp span{ font-size:5px; color:#fff; letter-spacing:.06em; }
@media(max-width:1024px){ .inner{ grid-template-columns:1fr; padding:0; min-height:auto; } .copy{ padding:32px 16px; } .media{ height:420px; } h1{ font-size:42px; } }
</style>
