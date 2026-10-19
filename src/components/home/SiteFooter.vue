<template>
  <footer class="footer">
    <div class="inner">
      <div class="brand">
        <div class="logo"><img src="/extracted/logo.png" alt="TonMenu" style="height:22px; filter:brightness(0) invert(1);" /></div>
        <p>Les bonnes adresses d'ici.<br>Les saveurs qu'on aime.<br>Le quartier, en quelques clics.</p>
        <small><span style="color:#EC3D2E;">●</span> Yopougon · Abidjan · Côte d'Ivoire</small>
      </div>
      <div class="col"><h4>À la carte</h4><a>Maquis</a><a>Grillades / Rôtisserie</a><a>Attiéké & Aloco</a><a>Cuisine africaine (autre)</a></div>
      <div class="col"><h4>À vos côtés</h4><a>Mes commandes</a><a>Mes bonnes adresses</a><a>Aide & questions</a><a>Espace partenaire</a></div>
      <div class="col cta"><h4>Un petit creux ?</h4><p>Votre prochain bon repas<br>n'est jamais bien loin.</p><a href="#" class="btn">Installer l'application ↓</a><small>Sans compte pour commander.<br>Paiements simulés dans cette version.</small></div>
    </div>
    <div class="sub">© 2025 TonMenu. Votre repas préféré, en quelques clics. <span>Orange Money · MTN MoMo · Moov Money</span></div>
  </footer>
</template>
<style scoped>
.footer{ background:#0B0B0B; color:#D1D5DB; }
.inner{ max-width:1220px; margin:0 auto; padding:40px 24px; display:grid; grid-template-columns:1.6fr 1fr 1fr 1.2fr; gap:24px; }
.brand p{ font-size:11px; line-height:1.6; color:#9CA3AF; margin:12px 0; }
.brand small{ font-size:10px; color:#9CA3AF; }
.col h4{ color:#fff; font-size:11px; font-weight:800; margin:0 0 10px; }
.col a{ display:block; font-size:11px; color:#9CA3AF; margin:6px 0; text-decoration:none; }
.cta p{ font-size:11px; color:#9CA3AF; }
.cta .btn{ display:inline-block; margin-top:10px; background:#EC3D2E; color:#fff; padding:9px 14px; border-radius:999px; font-weight:700; font-size:11px; text-decoration:none; }
.cta small{ display:block; margin-top:8px; font-size:9px; color:#6B7280; }
.sub{ max-width:1220px; margin:0 auto; border-top:1px solid #1F1F1F; padding:14px 24px; display:flex; justify-content:space-between; font-size:10px; color:#6B7280; }
.sub span{ color:#9CA3AF; }
@media(max-width:900px){ .inner{ grid-template-columns:1fr 1fr; } .sub{ flex-direction:column; gap:6px; text-align:center; } }
@media(max-width:560px){ .inner{ grid-template-columns:1fr; } }
</style>
