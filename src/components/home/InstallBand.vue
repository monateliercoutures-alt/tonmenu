<template>
  <section class="band">
    <div class="inner">
      <div class="copy">
        <p class="eyebrow">TONMENU DANS VOTRE POCHE</p>
        <h2>Votre quartier.<br>Votre menu.<br><em>Dans votre poche.</em></h2>
        <p class="meta">Ajoutez TonMenu à votre écran d'accueil. Pas d'App Store — 2 taps.</p>
        <ul><li>✓ Ajout en 5 secondes</li><li>✓ Suivi des commandes</li><li>✓ Paiement Mobile Money</li></ul>
        <button class="pill">Installer l'application →</button>
        <small>PWA — fonctionne sur iPhone, Android et ordi</small>
      </div>
      <div class="phone">
        <div class="device"><div class="bar">TonMenu.</div><img src="/thumbs/saveur-5.png" alt="Aperçu app" loading="lazy" /><div class="phFoot">Commandez local</div></div>
        <div class="device2"><img src="/thumbs/saveur-0.png" alt="" loading="lazy" /></div>
        <div class="sticker">TOUJOURS<br><b>à portée</b><br>de main.</div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.band{ background:#C41212; color:#fff; padding:36px 24px; overflow:hidden; }
.inner{ max-width:1220px; margin:0 auto; display:grid; grid-template-columns:1fr 420px; gap:24px; align-items:center; }
.eyebrow{ color:#FFD633; font-size:8px; letter-spacing:.12em; font-weight:800; margin:0 0 8px; }
h2{ font-size:26px; font-weight:800; line-height:1.05; margin:0 0 10px; }
h2 em{ color:#FFD633; font-style:italic; font-weight:400; font-family:'Playfair Display', serif; }
.meta{ font-size:11px; color:#FECACA; margin:0 0 12px; }
ul{ list-style:none; padding:0; margin:0 0 16px; display:flex; flex-direction:column; gap:6px; font-size:11px; }
.pill{ background:#111; color:#fff; border:none; padding:10px 16px; border-radius:999px; font-weight:700; font-size:11px; }
small{ display:block; margin-top:8px; font-size:9px; opacity:.8; }
.phone{ position:relative; height:360px; display:flex; justify-content:center; }
.device{ width:190px; height:340px; background:#fff; border-radius:24px; overflow:hidden; border:4px solid #111; box-shadow:0 12px 24px rgba(0,0,0,.3); }
.bar{ background:#111; color:#fff; text-align:center; padding:8px; font-size:11px; font-weight:800; }
.device img{ width:100%; height:200px; object-fit:cover; }
.phFoot{ background:#EC3D2E; color:#fff; text-align:center; padding:8px; font-size:9px; font-weight:800; }
.device2{ position:absolute; right:10px; top:20px; width:150px; height:260px; border-radius:20px; overflow:hidden; transform:rotate(6deg); box-shadow:0 8px 20px rgba(0,0,0,.3); }
.device2 img{ width:100%; height:100%; object-fit:cover; }
.sticker{ position:absolute; left:20px; top:10px; width:74px; height:74px; background:#FFD633; color:#111; border-radius:50%; display:grid; place-items:center; text-align:center; font-size:8px; line-height:1.1; transform:rotate(-6deg); }
@media(max-width:900px){ .inner{ grid-template-columns:1fr; } .phone{ height:320px; } }
</style>
