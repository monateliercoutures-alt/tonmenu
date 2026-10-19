<template>
  <footer id="contact" class="footer">
    <div class="inner">
      <div class="brand">
        <span class="logo"><i/>TonMenu.</span>
        <p>Le goût du quartier, livré chez vous.<br>Abidjan d'abord, l'Afrique de l'Ouest ensuite.</p>
        <small>© {{ year }} TonMenu — Fait avec ❤ à Yopougon.</small>
      </div>
      <div class="col"><h4>Explorer</h4><a href="#">Cuisines</a><a href="#">Restaurants</a><a href="#">Promos</a></div>
      <div class="col"><h4>Restaurateurs</h4><router-link to="/pro">Devenir partenaire</router-link><a href="#">Connexion Pro</a><a href="#">Aide</a></div>
      <div class="col"><h4>Contact</h4><a href="#">Besoin d'aide ?</a><span>Abidjan, Côte d'Ivoire</span><a href="#">Paiement : Mobile Money / à la livraison</a></div>
    </div>
    <div class="sub">Mentions légales · Confidentialité · CGU</div>
  </footer>
</template>
<script setup>const year=new Date().getFullYear()</script>
<style scoped>
.footer{ background:#262826; color:#E5E7EB; }
.inner{ max-width:1220px; margin:0 auto; padding:32px 24px; display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:20px; }
.logo{ font-family:'Playfair Display', serif; font-style:italic; font-size:18px; display:flex; align-items:center; gap:8px; color:#fff; }
.logo i{ width:22px; height:22px; border-radius:6px; background:#EC3D2E; display:inline-block; }
.brand p{ font-size:12px; line-height:1.5; color:#D1D5DB; margin:10px 0; }
.brand small{ font-size:11px; color:#9CA3AF; }
.col h4{ font-size:12px; font-weight:800; margin:0 0 10px; color:#fff; }
.col a, .col span{ display:block; font-size:12px; color:#D1D5DB; text-decoration:none; margin:6px 0; }
.col a:hover{ color:#fff; }
.sub{ max-width:1220px; margin:0 auto; padding:10px 24px; border-top:1px solid rgba(255,255,255,.08); font-size:11px; color:#9CA3AF; text-align:center; }
@media(max-width:900px){ .inner{ grid-template-columns:1fr 1fr; } }
@media(max-width:560px){ .inner{ grid-template-columns:1fr; } }
</style>
