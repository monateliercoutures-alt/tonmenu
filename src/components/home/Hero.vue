<template>
  <section class="hero">
    <div class="inner">
      <div class="copy">
        <p class="eyebrow">— COMMANDEZ LOCAL, SAVOUREZ LOCAL.</p>
        <h1>Les meilleurs de <em>Yopougon,</em> <span>votre faim</span> <b>livrée chez vous.</b></h1>
        <div class="ctas">
          <div class="ctaWrap">
            <button class="primary" @click="show=true">Commander maintenant <span>→</span></button>
            <div v-if="show" class="dropdown" @click="show=false">
              <router-link to="/restaurants">Voir les restaurants</router-link>
              <router-link to="/accueil">Parcourir les menus</router-link>
            </div>
          </div>
          <a href="#decouvertes" class="ghost">Voir les menus</a>
        </div>
        <div class="trust"><span class="avatars" aria-hidden="true"><i/><i/><i/></span><small>Déjà <b>+4 500</b> commandes livrées à Abidjan</small></div>
      </div>
      <div class="media">
        <img src="/extracted/exact-hero.png" alt="Poulet rôti accompagné de frites" loading="eager" fetchpriority="high" />
        <div class="badge" aria-label="Livraison gratuite"><span>Gratuite</span><em>*</em><small>livraison</small><b class="arr">→</b></div>
      </div>
    </div>
    <div class="bottom">
      <span>⏱ Délai moyen observé <b>~35 min</b></span>
      <span>•</span>
      <span>📍 <b>Abidjan</b> · Cocody • Yopougon • Marcory • Plateau</span>
      <span>•</span>
      <span>🛡 Paiement à la livraison ou Mobile Money</span>
    </div>
  </section>
</template>
<script setup>import {ref} from 'vue'; const show=ref(false)</script>
<style scoped>
.hero{ background:#262826; color:#fff; }
.inner{ max-width:1220px; margin:0 auto; padding:48px 24px 28px; display:grid; grid-template-columns:1fr 520px; gap:28px; align-items:center; min-height:575px; }
.eyebrow{ color:#EC3D2E; font-size:10px; letter-spacing:.15em; font-weight:800; margin:0 0 14px; }
h1{ font-family:'Plus Jakarta Sans', sans-serif; font-size:64px; line-height:1.02; font-weight:800; margin:0; }
h1 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; color:#fff; }
h1 span{ color:#FFD633; } h1 b{ font-weight:800; }
.ctas{ display:flex; gap:10px; margin-top:22px; flex-wrap:wrap; }
.primary{ background:#EC3D2E; color:#fff; border:none; border-radius:999px; padding:12px 18px; font-weight:800; font-size:13px; cursor:pointer; display:inline-flex; align-items:center; gap:8px; }
.primary span{ background:#fff; color:#EC3D2E; width:22px; height:22px; border-radius:50%; display:grid; place-items:center; font-size:12px; }
.ghost{ border:1px solid rgba(255,255,255,.7); color:#fff; border-radius:999px; padding:10px 18px; font-weight:700; font-size:13px; text-decoration:none; }
.trust{ display:flex; align-items:center; gap:10px; margin-top:14px; }
.avatars{ display:flex; } .avatars i{ width:22px; height:22px; border-radius:50%; border:2px solid #262826; background:#FFD633; margin-left:-6px; } .avatars i:first-child{ margin-left:0; background:#EC3D2E; } .avatars i:last-child{ background:#fff; }
.trust small{ font-size:11px; color:#D1D5DB; }
.media{ position:relative; height:420px; }
.media img{ width:100%; height:100%; object-fit:cover; border-radius:18px; display:block; }
.badge{ position:absolute; right:10px; top:-6px; width:86px; height:86px; border-radius:50%; background:#FFD633; color:#111; border:2px dashed #111; display:grid; place-items:center; text-align:center; line-height:1; padding-top:6px; }
.badge span{ font-size:8px; font-weight:800; letter-spacing:.4px; text-transform:uppercase; }
.badge em{ font-family:'Playfair Display', serif; font-style:italic; font-size:18px; line-height:1; }
.badge small{ font-size:9px; font-weight:800; } .badge .arr{ position:absolute; right:-6px; top:50%; transform:translateY(-50%); background:#111; color:#fff; width:18px; height:18px; border-radius:50%; display:grid; place-items:center; font-size:10px; }
.ctaWrap{ position:relative; }
.dropdown{ position:absolute; top:calc(100% + 8px); left:0; background:#fff; border:1px solid #E5E7EB; border-radius:12px; min-width:220px; overflow:hidden; z-index:5; box-shadow:0 10px 24px rgba(0,0,0,.14); }
.dropdown a{ display:block; padding:10px 14px; color:#111; text-decoration:none; font-size:13px; } .dropdown a:hover{ background:#FDFBF7; }
.bottom{ max-width:1220px; margin:0 auto; padding:12px 24px; display:flex; gap:14px; justify-content:center; flex-wrap:wrap; font-size:12px; color:#D1D5DB; border-top:1px solid rgba(255,255,255,.12); }
.bottom b{ color:#fff; }
@media(max-width:1024px){ .inner{ grid-template-columns:1fr; min-height:auto; } .media{ height:360px; } h1{ font-size:42px; } }
@media(max-width:768px){ h1{ font-size:32px; } .media{ height:300px; } }
</style>
