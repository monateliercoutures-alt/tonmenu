<template>
  <section class="wrap">
    <div class="grid">
      <div class="item"><div class="ic">⌂</div><h3>Une cuisine qui vous plaît</h3><p>Découvrez les restaurants<br>et leurs spécialités.</p></div>
      <div class="item"><div class="ic">◯</div><h3>Un menu à votre goût</h3><p>Choisissez vos plats<br>et composez votre panier.</p></div>
      <div class="item"><div class="ic">▭</div><h3>Vos habitudes de paiement</h3><p>Choisissez votre opérateur.<br>Mobile Money pour le moment.</p></div>
      <div class="item"><div class="ic">↺</div><h3>Le quartier à votre porte</h3><p>Consultez le statut de préparation<br>depuis votre commande.</p></div>
    </div>
  </section>
</template>
<style scoped>
.wrap{ background:#fff; padding:28px 24px 36px; max-width:1220px; margin:0 auto; }
.grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:20px; text-align:center; }
.ic{ color:#EC3D2E; font-size:18px; margin-bottom:8px; }
.item h3{ font-size:11px; font-weight:800; margin:0 0 6px; }
.item p{ font-size:9px; color:#6B6B6B; line-height:1.4; margin:0; }
@media(max-width:700px){ .grid{ grid-template-columns:repeat(2,1fr); } }
</style>
