<template>
  <div class="vitrine">
    <section class="hero">
      <div class="inner">
        <div class="text">
          <span class="badge">🇨🇮 Côte d’Ivoire • Abidjan</span>
          <h1>TonMenu — <span>Le goût du quartier</span></h1>
          <p>Commandez vos plats préférés à Yopougon, Cocody, Plateau, Marcory et partout à Abidjan. Livraison rapide, paiement Mobile Money, suivi en temps réel.</p>
          <div class="ctas">
            <router-link to="/accueil" class="btn red">Voir les restaurants</router-link>
            <a href="#comment" class="btn ghost">Comment ça marche</a>
          </div>
          <div class="stats">
            <div><strong>500+</strong><span>Restaurants</span></div>
            <div><strong>15-35</strong><span>min livraison</span></div>
            <div><strong>4.8★</strong><span>Note moyenne</span></div>
          </div>
        </div>
        <div class="visual">
          <img src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=900&q=80&auto=format&fit=crop" />
          <div class="float a">
            <img src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=200&q=80&auto=format&fit=crop" />
            <div><strong>Le Roi du Poulet</strong><span>★★★★★ 97% • Gratuit • 15-35 min</span></div>
          </div>
          <div class="float b"><Clock :size="14"/> Livraison en 20 min • <strong>Gratuit</strong></div>
        </div>
      </div>
    </section>

    <section id="comment" class="how">
      <h2>Comment ça marche ?</h2>
      <div class="steps">
        <div><div class="n">1</div><h4>Choisissez</h4><p>Parcourez les restaurants autour de vous, filtrez par cuisine, note et temps de livraison.</p></div>
        <div><div class="n">2</div><h4>Commandez</h4><p>Ajoutez au panier, choisissez livraison ou retrait, payez en Orange/MTN/Moov Money.</p></div>
        <div><div class="n">3</div><h4>Savourez</h4><p>Suivez votre commande en temps réel et notez le restaurant.</p></div>
      </div>
    </section>

    <section class="cats-sec">
      <h2>Catégories populaires</h2>
      <div class="cats-grid">
        <div v-for="c in categories" :key="c.id" class="cat-card" :style="{ background: c.color }">
          <span>{{ c.label }}</span>
        </div>
      </div>
    </section>

    <section class="restos">
      <h2>Restaurants populaires</h2>
      <div class="grid">
        <RestaurantCard v-for="r in restaurants.slice(0,6)" :key="r.id" :r="r" :isFav="false" @open="$router.push(`/restaurant/${r.id}`)" />
      </div>
      <router-link to="/accueil" class="see-all">Voir tous les restaurants →</router-link>
    </section>

    <section class="partner">
      <div class="partner-card">
        <div>
          <h3>Vous êtes restaurateur ?</h3>
          <p>Rejoignez TonMenu, gérez votre menu, recevez des commandes et validez les paiements Mobile Money en toute simplicité. QR code inclus.</p>
          <router-link to="/pro" class="btn white">Devenir partenaire</router-link>
        </div>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format&fit=crop" />
      </div>
    </section>
  </div>
</template>
<script setup>
import { Clock } from 'lucide-vue-next'
import { categories, restaurants } from '../data/mockData.js'
import RestaurantCard from '../components/RestaurantCard.vue'
</script>
<style scoped>
.vitrine{ max-width:1200px; margin:0 auto; }
.hero{ padding:32px 20px; }
.hero .inner{ display:grid; grid-template-columns:1.1fr .9fr; gap:24px; align-items:center; }
.badge{ background:#FFF6CC; border:1px solid #FFE082; padding:6px 10px; border-radius:999px; font-size:12px; font-weight:700; }
.hero h1{ font-size:40px; font-weight:800; line-height:1.1; margin:12px 0; }
.hero h1 span{ color:#ec3d2e; }
.hero p{ color:#555; font-size:16px; line-height:1.5; }
.ctas{ display:flex; gap:10px; margin-top:16px; }
.btn{ padding:12px 18px; border-radius:999px; font-weight:800; text-decoration:none; }
.btn.red{ background:#ec3d2e; color:#fff; }
.btn.ghost{ background:#fff; border:1px solid #ddd; color:#111; }
.btn.white{ background:#fff; color:#111; padding:10px 16px; border-radius:999px; text-decoration:none; font-weight:700; }
.stats{ display:flex; gap:18px; margin-top:18px; }
.stats div{ text-align:center; }
.stats strong{ display:block; font-size:18px; }
.stats span{ font-size:12px; color:#777; }
.visual{ position:relative; }
.visual img{ width:100%; border-radius:18px; object-fit:cover; height:360px; }
.float{ position:absolute; background:#fff; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,.12); padding:8px; display:flex; gap:10px; align-items:center; }
.float a img, .float img{ width:44px; height:44px; border-radius:10px; }
.float.a{ left:12px; bottom:18px; }
.float.b{ right:12px; top:18px; font-size:12px; font-weight:600; }
.how, .cats-sec, .restos, .partner{ padding:28px 20px; }
.how h2, .cats-sec h2, .restos h2{ font-size:24px; font-weight:800; margin:0 0 16px; }
.steps{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; }
.steps div{ border:1px solid #eee; border-radius:16px; padding:16px; text-align:center; }
.n{ width:36px; height:36px; border-radius:50%; background:#ec3d2e; color:#fff; display:grid; place-items:center; font-weight:800; margin:0 auto 10px; }
.cats-grid{ display:grid; grid-template-columns:repeat(6, 1fr); gap:10px; }
.cat-card{ padding:14px; border-radius:14px; text-align:center; font-weight:700; font-size:13px; }
.grid{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; }
.see-all{ display:block; text-align:center; margin:16px 0 0; color:#ec3d2e; font-weight:700; text-decoration:none; }
.partner-card{ display:grid; grid-template-columns:1.2fr .8fr; gap:16px; background:#ec3d2e; color:#fff; border-radius:18px; padding:20px; align-items:center; }
.partner-card img{ width:100%; border-radius:14px; height:180px; object-fit:cover; }
@media(max-width:900px){ .hero .inner{ grid-template-columns:1fr; } .grid{ grid-template-columns:1fr 1fr; } .steps{ grid-template-columns:1fr; } .cats-grid{ grid-template-columns:repeat(3,1fr); } .partner-card{ grid-template-columns:1fr; } }
</style>
