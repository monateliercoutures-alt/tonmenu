<template>
  <section class="wrap">
    <div class="card">
      <p>VOUS ÊTES RESTAURATEUR ?</p>
      <h2>Envie de rejoindre <br><em>TonMenu ?</em></h2>
      <small>Inscription rapide, accompagnement local et visibilité dans votre quartier.</small>
      <router-link to="/pro" class="btn">Devenir partenaire →</router-link>
    </div>
  </section>
</template>
<style scoped>
.wrap{ background:#fff; padding:72px 24px; max-width:1220px; margin:0 auto; text-align:center; }
.card{ background:#F8F4EE; border:1px solid #E5E7EB; border-radius:16px; padding:36px 20px; }
.card p{ font-size:10px; letter-spacing:.15em; font-weight:800; color:#6B6B6B; margin:0 0 8px; }
.card h2{ font-size:28px; font-weight:800; margin:0 0 8px; } .card h2 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; }
.card small{ color:#6B6B6B; font-size:12px; }
.btn{ display:inline-block; margin-top:14px; background:#EC3D2E; color:#fff; padding:10px 18px; border-radius:999px; text-decoration:none; font-weight:800; font-size:13px; }
</style>
