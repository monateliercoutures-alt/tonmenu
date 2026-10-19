<template>
  <section class="wrap">
    <div class="grid">
      <a v-for="b in banners" :key="b.alt" class="banner" :href="b.href">
        <img :src="b.img" :alt="b.alt" loading="lazy" />
      </a>
    </div>
  </section>
</template>
<script setup>
const banners=[
  {img:'/extracted/banners/banner-0.png', alt:'Un burger. Et du bonheur.', href:'#decouvertes'},
  {img:'/extracted/banners/banner-1.png', alt:'Attiéké & poisson. Tout simplement bon.', href:'#decouvertes'},
  {img:'/extracted/banners/banner-2.png', alt:'Nos plats en sauce. Du goût à partager.', href:'#decouvertes'},
]
</script>
<style scoped>
.wrap{ background:#fff; padding:0 24px 36px; max-width:1220px; margin:0 auto; }
.grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.banner{ border-radius:12px; overflow:hidden; display:block; height:250px; }
.banner img{ width:100%; height:100%; object-fit:cover; display:block; }
@media(max-width:900px){ .grid{ grid-template-columns:1fr; } .banner{ height:200px; } }
</style>
