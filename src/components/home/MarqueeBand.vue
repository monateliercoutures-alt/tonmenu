<template>
  <div class="marquee" aria-hidden="true">
    <div class="track">
      <span v-for="n in 6" :key="n" class="item">TONMENU — LE GOÛT DU QUARTIER • COMMANDEZ LOCAL — SAVOUREZ LOCAL •&nbsp;</span>
    </div>
  </div>
</template>
<style scoped>
.marquee{ background:#FFD633; color:#111; height:60px; display:flex; align-items:center; overflow:hidden; border-top:1px solid #E5E7EB; border-bottom:1px solid #E5E7EB; }
.track{ display:flex; white-space:nowrap; animation:scroll 22s linear infinite; }
.item{ font-weight:900; letter-spacing:.06em; font-size:14px; }
@keyframes scroll{ from{ transform:translateX(0)} to{ transform:translateX(-50%)} }
@media(prefers-reduced-motion:reduce){ .track{ animation:none; } }
</style>
