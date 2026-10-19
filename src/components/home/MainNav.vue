<template>
  <nav class="mainnav" aria-label="Navigation principale">
    <div class="inner">
      <router-link to="/" class="link" active-class="active">Accueil</router-link>
      <router-link to="/accueil" class="link">Restaurants</router-link>
      <a href="#cuisines" class="link">Nos cuisines</a>
      <a href="#histoire" class="link">L'esprit TonMenu</a>
      <a href="#marche" class="link">Comment ça marche</a>
      <a href="#contact" class="link">Espace partenaire ↗</a>
      <router-link to="/pro" class="pill">Vous êtes restaurateur ?</router-link>
    </div>
  </nav>
</template>
<style scoped>
.mainnav{ background:#EC3D2E; position:sticky; top:52px; z-index:20; }
.inner{ max-width:1220px; margin:0 auto; padding:0 24px; display:flex; align-items:center; gap:22px; height:43px; }
.link{ color:#fff; text-decoration:none; font-size:11px; font-weight:600; letter-spacing:.2px; white-space:nowrap; }
.link:hover,.link.active{ text-decoration:underline; text-underline-offset:6px; }
.pill{ margin-left:auto; background:#fff; color:#EC3D2E; font-size:11px; font-weight:800; padding:7px 14px; border-radius:999px; text-decoration:none; }
@media(max-width:900px){ .inner{ overflow-x:auto; scrollbar-width:none; gap:14px; } .inner::-webkit-scrollbar{ display:none; } }
</style>
