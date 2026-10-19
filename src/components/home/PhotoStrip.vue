<template>
  <section class="strip" aria-label="Galerie photos">
    <img v-for="(p,i) in photos" :key="i" :src="p" :alt="'Photo '+(i+1)" width="170" height="170" loading="lazy" />
  </section>
</template>
<script setup>
const photos=['/thumbs/saveur2-0.png','/thumbs/saveur2-1.png','/thumbs/saveur2-2.png','/thumbs/saveur2-3.png','/thumbs/thumb-0.png','/thumbs/thumb-3.png','/thumbs/thumb-5.png','/thumbs/thumb-8.png']
</script>
<style scoped>
.strip{ display:grid; grid-template-columns:repeat(8,1fr); gap:8px; background:#fff; padding:16px 24px; max-width:1220px; margin:0 auto; }
.strip img{ width:100%; height:170px; object-fit:cover; border-radius:12px; display:block; background:#F3F4F6; }
@media(max-width:900px){ .strip{ grid-template-columns:repeat(4,1fr); } }
@media(max-width:560px){ .strip{ grid-template-columns:repeat(2,1fr); } }
</style>
