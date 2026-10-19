<template>
  <nav class="mainnav" aria-label="Navigation principale">
    <div class="inner">
      <router-link to="/accueil" class="link" active-class="active">Accueil</router-link>
      <a href="#" class="link hasdrop">Cuisines ▾</a>
      <router-link to="/restaurants" class="link" active-class="active">Restaurants</router-link>
      <a href="#" class="link">Promos</a>
      <a href="#contact" class="link">Contact</a>
      <router-link to="/pro" class="pill">Vous êtes restaurateur ?</router-link>
    </div>
  </nav>
</template>
<style scoped>
.mainnav{ background:#EC3D2E; position:sticky; top:58px; z-index:20; }
.inner{ max-width:1220px; margin:0 auto; padding:0 24px; display:flex; align-items:center; gap:22px; height:43px; }
.link{ color:#fff; text-decoration:none; font-size:12px; font-weight:600; letter-spacing:.2px; opacity:.95; white-space:nowrap; }
.link:hover,.link.active{ opacity:1; text-decoration:underline; text-underline-offset:6px; }
.hasdrop{ position:relative; }
.pill{ margin-left:auto; background:#fff; color:#EC3D2E; font-size:11px; font-weight:800; padding:7px 14px; border-radius:999px; text-decoration:none; }
.pill:hover{ background:#FFD633; color:#111; }
@media(max-width:768px){ .inner{ overflow-x:auto; scrollbar-width:none; } .inner::-webkit-scrollbar{ display:none; } .pill{ margin-left:6px; } }
</style>
