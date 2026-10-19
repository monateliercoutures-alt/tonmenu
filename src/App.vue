<template>
  <component :is="layout">
    <router-view />
  </component>
  <!-- Global sheets -->
  <LoginSheet />
  <AddressSheet />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDeviceMode } from './composables/useDeviceMode.js'
import AppLayout from './layouts/AppLayout.vue'
import SiteLayout from './layouts/SiteLayout.vue'
import LoginSheet from './views/shared/LoginSheet.vue'
import AddressSheet from './views/shared/AddressSheet.vue'

const route = useRoute()
const { mode } = useDeviceMode()

const layout = computed(() => {
  // Pro routes always use their own layout
  if (route.path.startsWith('/pro')) return 'div'
  // Explicit meta
  if (route.meta.layout === 'site') return SiteLayout
  if (route.meta.layout === 'app') return AppLayout
  // Device mode based
  if (mode.value === 'site' && route.path === '/') return SiteLayout
  // Restaurant, panier, checkout, suivi => no bottom nav but still app layout wrapper
  if (route.meta.hideBottomNav) return AppLayout
  // Default: app vs site
  return mode.value === 'site' ? SiteLayout : AppLayout
})
</script>

<style>
:root{
  --tonmenu-red:#ec3d2e;
  --tonmenu-yellow:#FFD60A;
  --tonmenu-yellow-soft:#FFF6CC;
  --tonmenu-green:#0E8A5A;
  --tonmenu-bg:#ffffff;
  --radius:16px;
}
*{ box-sizing:border-box; }
html,body{ margin:0; padding:0; background:#fff; color:#111; font-family:'Plus Jakarta Sans','DM Sans',system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; }
a{ color:inherit; }
button{ font-family:inherit; }
img{ max-width:100%; }
h1,h2,h3{ letter-spacing:-.2px; }
</style>
