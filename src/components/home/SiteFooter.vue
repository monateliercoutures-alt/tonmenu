<template>
  <footer class="footer">
    <div class="inner">
      <div class="col brand">
        <div class="logo"><img src="/extracted/logo.png" alt="TonMenu" style="height:22px" /></div>
        <p>Le goût du quartier, livré chez vous.<br>Abidjan d'abord, l'Afrique de l'Ouest ensuite.</p>
        <small>© {{ year }} TonMenu — Fait avec ❤ à Yopougon.</small>
      </div>
      <div class="col"><h4>Explorer</h4><a href="#">Cuisines</a><a href="#">Restaurants</a><a href="#">Promos</a></div>
      <div class="col"><h4>Restaurateurs</h4><router-link to="/pro">Devenir partenaire</router-link><a href="#">Connexion Pro</a><a href="#">Aide</a></div>
      <div class="col"><h4>Contact</h4><a href="#">Besoin d'aide ?</a><span>Abidjan, Côte d'Ivoire</span><span>Paiement : Mobile Money / à la livraison</span></div>
    </div>
    <div class="sub">Mentions légales · Confidentialité · CGU</div>
  </footer>
</template>
<script setup>const year=new Date().getFullYear()</script>
<style scoped>
.footer{ background:#111; color:#D1D5DB; }
.inner{ max-width:1220px; margin:0 auto; padding:36px 24px; display:grid; grid-template-columns:1.6fr 1fr 1fr 1fr; gap:24px; }
.brand p{ font-size:11px; line-height:1.6; margin:12px 0; }
.brand small{ font-size:10px; color:#9CA3AF; }
.col h4{ color:#fff; font-size:11px; font-weight:800; margin:0 0 10px; }
.col a, .col span{ display:block; font-size:11px; color:#D1D5DB; text-decoration:none; margin:6px 0; }
.sub{ border-top:1px solid #262626; padding:12px 24px; text-align:center; font-size:10px; color:#9CA3AF; }
@media(max-width:800px){ .inner{ grid-template-columns:1fr 1fr; } }
@media(max-width:500px){ .inner{ grid-template-columns:1fr; text-align:center; } }
</style>
