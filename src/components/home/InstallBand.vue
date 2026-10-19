<template>
  <section class="band">
    <div class="inner">
      <div class="copy">
        <p class="eyebrow">— TONMENU DANS VOTRE POCHE</p>
        <h2>TonMenu<br><em>dans votre poche.</em></h2>
        <p class="meta">Installez l'app et commandez en 2 taps — notifications de suivi incluses.</p>
        <ul>
          <li>✓ Ajout en 5 secondes</li>
          <li>✓ Notifications de suivi</li>
          <li>✓ Mode hors-ligne partiel</li>
          <li>✓ Léger — idéal 3G/4G</li>
        </ul>
        <div class="row">
          <button class="pill">Installer l'application</button>
          <span class="hint">iPhone & Android · 3G/4G optimisé · Gratuit</span>
        </div>
      </div>
      <div class="phone">
        <div class="device">
          <div class="bar">TonMenu</div>
          <img src="/thumbs/saveur2-0.png" alt="Aperçu de l'app" width="220" height="320" loading="lazy" />
          <div class="dots"><span/><span/><span/></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.band{ background:#D32626; color:#fff; position:relative; overflow:hidden; }
.band::before, .band::after{ content:''; position:absolute; width:280px; height:280px; border-radius:50%; border:1px solid rgba(255,255,255,.12); }
.band::before{ left:-80px; top:-80px; } .band::after{ right:-80px; bottom:-80px; }
.inner{ max-width:1220px; margin:0 auto; padding:56px 24px; display:grid; grid-template-columns:1fr 340px; gap:24px; align-items:center; position:relative; z-index:1; }
.eyebrow{ font-size:10px; letter-spacing:.15em; font-weight:800; opacity:.9; margin:0 0 8px; }
h2{ font-size:36px; line-height:1; font-weight:800; margin:0 0 10px; } h2 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; }
.meta{ font-size:12px; opacity:.9; margin:0 0 12px; }
ul{ list-style:none; padding:0; margin:0 0 16px; display:grid; grid-template-columns:1fr 1fr; gap:6px 16px; font-size:12px; }
.row{ display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
.pill{ background:#FFD633; color:#111; border:none; border-radius:999px; padding:10px 16px; font-weight:800; font-size:13px; cursor:pointer; }
.hint{ font-size:11px; opacity:.9; }
.phone{ display:grid; place-items:center; }
.device{ width:210px; background:#fff; border-radius:18px; overflow:hidden; border:4px solid #111; box-shadow:0 10px 24px rgba(0,0,0,.2); }
.bar{ background:#111; color:#fff; text-align:center; padding:8px; font-size:11px; font-weight:800; }
.device img{ width:100%; height:220px; object-fit:cover; display:block; }
.dots{ display:flex; gap:6px; justify-content:center; padding:10px; } .dots span{ width:30px; height:6px; border-radius:999px; background:#E5E7EB; } .dots span:first-child{ background:#111; }
@media(max-width:900px){ .inner{ grid-template-columns:1fr; } }
</style>
