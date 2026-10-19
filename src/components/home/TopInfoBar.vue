<template>
  <div class="topbar">
    <span>Votre repas préféré, en quelques clics.</span>
    <span class="center">100 % restauration locale · Abidjan</span>
    <a href="#">Besoin d'aide ? <span>↗</span></a>
  </div>
</template>
<style scoped>
.topbar{ display:flex; justify-content:space-between; align-items:center; background:#FAF6F0; color:#7A7A7A; font-size:10px; padding:7px 24px; max-width:1220px; margin:0 auto; letter-spacing:.02em; }
.center{ color:#7A7A7A; }
a{ color:#7A7A7A; text-decoration:none; display:inline-flex; gap:2px; }
a span{ font-size:10px; }
@media(max-width:768px){ .topbar{ font-size:9px; padding:6px 12px; } }
</style>
