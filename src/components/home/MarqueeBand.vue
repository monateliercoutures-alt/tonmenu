<template>
  <div class="marquee">
    <div class="track">
      <span>DU GOÛT, PAS DE COMPLICATIONS</span><i>✳</i>
      <span>UN QUARTIER À LA FOIS</span><i>✳</i>
      <span>LES VRAIES SAVEURS D'ABIDJAN</span><i>✳</i>
      <span>DU GOÛT, PAS DE COMPLICATIONS</span><i>✳</i>
      <span>UN QUARTIER À LA FOIS</span><i>✳</i>
      <span>LES VRAIES SAVEURS D'ABIDJAN</span><i>✳</i>
    </div>
  </div>
</template>
<style scoped>
.marquee{ background:#FFD633; color:#111; height:48px; display:flex; align-items:center; overflow:hidden; }
.track{ display:flex; align-items:center; gap:40px; white-space:nowrap; animation:scroll 20s linear infinite; padding:0 24px; }
.track span{ font-size:10px; font-weight:800; letter-spacing:.08em; }
.track i{ font-size:10px; font-style:normal; }
@keyframes scroll{ from{ transform:translateX(0)} to{ transform:translateX(-50%)} }
</style>
