<template>
  <section class="strip">
    <img v-for="p in photos" :key="p" :src="p" loading="lazy" alt="" />
  </section>
</template>
<script setup>
const photos=['/extracted/saveurs/plats-en-sauce.png','/extracted/saveurs/poisson-crevettes.png','/extracted/saveurs/attieke-poisson.png','/extracted/saveurs/riz-poisson.png','/extracted/saveurs/burgers-genereux.png','/extracted/saveurs/pizzas-gourmandes.png','/extracted/saveurs/poulet-croustillant.png','/extracted/saveurs/croques-dores.png']
</script>
<style scoped>
.strip{ display:grid; grid-template-columns:repeat(8,1fr); gap:6px; padding:16px 24px; max-width:1220px; margin:0 auto; background:#fff; }
.strip img{ width:100%; height:90px; object-fit:cover; border-radius:6px; }
@media(max-width:900px){ .strip{ grid-template-columns:repeat(4,1fr); } }
</style>
