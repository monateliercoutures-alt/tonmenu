<template>
  <section class="strip">
    <img v-for="(p,i) in photos" :key="i" :src="p" loading="lazy" alt="" />
  </section>
</template>
<script setup>
const photos=[
  '/thumbs/strip-0.png',
  '/thumbs/strip-1.png',
  '/thumbs/strip-2.png',
  '/thumbs/strip-3.png',
  '/thumbs/strip-4.png',
  '/thumbs/strip-5.png',
  '/thumbs/strip-6.png',
  '/thumbs/strip-7.png'
]
</script>
<style scoped>
.strip{ display:grid; grid-template-columns:repeat(8,1fr); gap:6px; padding:16px 24px; max-width:1220px; margin:0 auto; background:#fff; }
.strip img{ width:100%; height:90px; object-fit:cover; border-radius:6px; }
@media(max-width:900px){ .strip{ grid-template-columns:repeat(4,1fr); } }
</style>
