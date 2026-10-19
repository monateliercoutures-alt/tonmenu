<template>
  <section class="hero">
    <div class="inner">
      <div class="copy">
        <p class="eyebrow">Chaud. Généreux. Tout simplement bon.</p>
        <h1>Le vrai goût<br>de chez nous.</h1>
        <p class="desc">De l'alloco doré à la bonne braise du quartier,<br>vos envies ont trouvé leur adresse.</p>
        <p class="sub">Les cuisines d'Abidjan. <b>À votre porte.</b></p>
        <router-link to="/accueil" class="btn">Découvrir les restaurants <span>→</span></router-link>
        <div class="foot"><span>100 % restauration locale</span><span class="muted">Yopougon, en livraison chez vous.</span></div>
      </div>
      <div class="media">
        <img src="/extracted/hero-food.png" alt="Poulet braisé, attiéké et alloco" loading="eager" fetchpriority="high" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero{ background:#0F1110; color:#fff; }
.inner{ max-width:1220px; margin:0 auto; padding:0 0 0 24px; display:grid; grid-template-columns:520px 1fr; min-height:560px; }
.copy{ padding:46px 24px 18px 0; display:flex; flex-direction:column; justify-content:center; }
.eyebrow{ color:#FFD633; font-style:italic; font-size:11px; margin:0 0 12px; }
h1{ font-size:52px; line-height:.95; font-weight:900; margin:0; letter-spacing:-.5px; }
.desc{ color:#D1D5DB; font-size:11px; line-height:1.5; margin:12px 0 6px; }
.sub{ font-size:11px; margin:0 0 16px; }
.sub b{ color:#FFD633; }
.btn{ display:inline-flex; gap:6px; align-items:center; background:#EC3D2E; color:#fff; padding:11px 16px; border-radius:999px; font-size:11px; font-weight:700; text-decoration:none; width:fit-content; }
.btn span{ font-size:12px; }
.foot{ margin-top:18px; border-top:1px solid rgba(255,255,255,.12); padding-top:10px; display:flex; justify-content:space-between; font-size:9px; color:#9CA3AF; }
.media{ position:relative; overflow:hidden; background:#111; }
.media img{ width:100%; height:100%; object-fit:cover; display:block; }
.sticker{ position:absolute; top:22px; left:22px; width:84px; height:84px; border-radius:50%; background:#1A1A1A; color:#FFD633; border:2px solid #FFD633; display:grid; place-items:center; text-align:center; line-height:1; padding:6px; transform:rotate(-6deg); }
.sticker b{ color:#FFD633; font-size:11px; line-height:1; }
.sticker small{ font-size:6px; color:#fff; letter-spacing:.4px; margin-top:4px; }
@media(max-width:1024px){ .inner{ grid-template-columns:1fr; padding:0; } .copy{ padding:28px 16px; } .media{ height:380px; } h1{ font-size:38px; } }
</style>
