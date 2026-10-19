<template>
  <section class="wrap">
    <div class="grid">
      <a v-for="(b,i) in banners" :key="i" class="banner" :style="{background:b.bg}" href="#decouvertes">
        <div class="txt">
          <small>{{ b.kicker }}</small>
          <h3 v-html="b.title"></h3>
          <p>{{ b.meta }}</p>
          <span class="cta">{{ b.cta }} →</span>
        </div>
        <img :src="b.img" :alt="b.alt" width="390" height="250" loading="lazy" />
      </a>
    </div>
  </section>
</template>
<script setup>
const banners=[
  {kicker:'PACKS FAMILLE', title:'Un <em>repas</em><br>pour tous', meta:'Plats copieux — à partager', cta:'Voir les packs', bg:'#FFD633', img:'/thumbs/banner-exact-0.png', alt:'Repas familial'},
  {kicker:'NOUVEAUTÉS', title:'Les <em>pépites</em><br>du moment', meta:'Spécialités ivoiriennes revisitées', cta:'Découvrir', bg:'#262826', img:'/thumbs/banner-exact-1.png', alt:'Nouveautés du moment'},
  {kicker:'LIVRAISON EXPRESS', title:'Commandez,<br>on <em>s’occupe</em> du reste', meta:'Paiement à la livraison', cta:'Commander', bg:'#EC3D2E', img:'/thumbs/banner-exact-2.png', alt:'Livraison express'},
]
</script>
<style scoped>
.wrap{ background:#FDFBF7; padding:24px; max-width:1220px; margin:0 auto; }
.grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.banner{ border-radius:12px; overflow:hidden; display:grid; grid-template-columns:1fr 150px; min-height:150px; text-decoration:none; position:relative; }
.banner img{ width:100%; height:100%; object-fit:cover; }
.txt{ padding:16px; display:flex; flex-direction:column; justify-content:center; }
.txt small{ font-size:8px; letter-spacing:.12em; font-weight:800; color:rgba(0,0,0,.6); }
.txt h3{ margin:6px 0; font-size:16px; line-height:1.1; font-weight:800; color:inherit; }
.txt:where(:nth-child(n)) h3 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; }
.banner:nth-child(1) .txt{ color:#111; } .banner:nth-child(2) .txt{ color:#fff; } .banner:nth-child(2) small{ color:rgba(255,255,255,.8); } .banner:nth-child(3) .txt{ color:#fff; } .banner:nth-child(3) small{ color:rgba(255,255,255,.9); }
.txt p{ font-size:11px; margin:0 0 10px; opacity:.8; }
.cta{ font-size:11px; font-weight:800; background:#fff; color:#111; padding:6px 10px; border-radius:999px; align-self:flex-start; }
.banner:nth-child(2) .cta{ background:#FFD633; } .banner:nth-child(3) .cta{ background:#FFD633; }
@media(max-width:900px){ .grid{ grid-template-columns:1fr; } .banner{ grid-template-columns:1fr 140px; } }
</style>
