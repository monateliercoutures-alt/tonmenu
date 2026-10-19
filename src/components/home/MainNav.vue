<template>
  <nav class="mainnav">
    <div class="inner">
      <a href="#" class="link active">Accueil</a>
      <a href="#" class="link">Restaurants</a>
      <a href="#" class="link">Nos cuisines</a>
      <a href="#" class="link">L'esprit TonMenu</a>
      <a href="#" class="link">Comment ça marche</a>
      <a href="#" class="link pill">Espace partenaire <span>↗</span></a>
    </div>
  </nav>
</template>
<style scoped>
.mainnav{ background:#EC3D2E; position:sticky; top:58px; z-index:20; }
.inner{ max-width:1220px; margin:0 auto; padding:0 24px; display:flex; align-items:center; gap:24px; height:44px; }
.link{ color:#fff; text-decoration:none; font-size:11px; font-weight:600; white-space:nowrap; opacity:.95; }
.link.active{ text-decoration:underline; text-underline-offset:6px; opacity:1; }
.pill{ margin-left:auto; background:#fff; color:#EC3D2E; padding:7px 14px; border-radius:999px; font-weight:800; }
@media(max-width:768px){ .inner{ overflow-x:auto; scrollbar-width:none; } .inner::-webkit-scrollbar{ display:none; } }
</style>
