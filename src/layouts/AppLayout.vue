<template>
  <div class="app-layout">
    <slot />
    <BottomNav v-if="!hideNav" />
    <ScrollTopButton />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from '../components/BottomNav.vue'
import ScrollTopButton from '../components/ScrollTopButton.vue'
const route = useRoute()
const hideNav = computed(()=> !!route.meta.hideBottomNav)
</script>
<style scoped>
.app-layout{ min-height:100vh; background:#fff; padding-bottom: 64px; }
</style>
