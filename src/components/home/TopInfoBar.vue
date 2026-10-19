<template>
  <div class="topbar">
    <span>Votre repas préféré, en quelques clics.</span>
    <span class="center">100 % restauration locale · Abidjan</span>
    <a href="#">Besoin d'aide ? ↗</a>
  </div>
</template>
<style scoped>
.topbar{ display:flex; justify-content:space-between; align-items:center; background:#F8F4EE; color:#6B6B6B; font-size:11px; padding:8px 24px; max-width:1220px; margin:0 auto; }
.center{ font-weight:600; }
a{ color:#6B6B6B; text-decoration:none; }
@media(max-width:768px){ .topbar{ flex-direction:column; gap:2px; text-align:center; padding:8px 12px; } }
</style>
