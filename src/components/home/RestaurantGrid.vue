<template>
  <section id="decouvertes" class="wrap">
    <p class="eyebrow">— SÉLECTION TONMENU</p>
    <h2>Vos prochaines <em>découvertes.</em></h2>
    <div class="empty">
      <div class="icon">🍽️</div>
      <p><b>Aucun restaurant</b> pour cette recherche.</p>
      <small>Les restaurateurs arrivent — inscrivez le vôtre ou revenez bientôt.</small>
      <router-link to="/pro" class="btn">Inscrire mon restaurant</router-link>
    </div>
  </section>
</template>
<style scoped>
.wrap{ background:#F8F4EE; padding:72px 24px; max-width:1220px; margin:0 auto; text-align:center; }
.eyebrow{ color:#EC3D2E; font-size:10px; letter-spacing:.15em; font-weight:800; margin:0 0 8px; }
h2{ font-size:30px; font-weight:800; margin:0 0 22px; }
h2 em{ font-family:'Playfair Display', serif; font-style:italic; font-weight:400; }
.empty{ background:#fff; border:1px dashed #E5E7EB; border-radius:12px; padding:32px 20px; max-width:560px; margin:0 auto; }
.icon{ font-size:28px; } .empty p{ margin:10px 0 6px; font-size:13px; } .empty small{ color:#6B6B6B; font-size:12px; }
.btn{ display:inline-block; margin-top:14px; background:#EC3D2E; color:#fff; padding:10px 16px; border-radius:999px; text-decoration:none; font-weight:700; font-size:13px; }
</style>
