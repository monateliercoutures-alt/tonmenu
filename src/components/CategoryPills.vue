<template>
  <div class="cats">
    <button v-for="c in categories" :key="c.id" class="cat" :class="{ active: modelValue===c.id }" @click="$emit('update:modelValue', c.id)">
      <span class="icon" :style="{ background: c.color }">
        <component :is="iconMap[c.icon]" :size="18" />
      </span>
      <span class="label">{{ c.label }}</span>
    </button>
  </div>
</template>
<script setup>
import { Percent, Beef, Pizza, Sandwich, Drumstick, Fish, Flame, Soup, Utensils, CakeSlice, Croissant, CupSoda } from 'lucide-vue-next'
defineProps({ categories: Array, modelValue: String })
defineEmits(['update:modelValue'])
const iconMap = { percent: Percent, burger: Beef, pizza: Pizza, sandwich: Sandwich, drumstick: Drumstick, fish: Fish, flame: Flame, soup: Soup, utensils: Utensils, cake: CakeSlice, croissant: Croissant, cup: CupSoda }
</script>
<style scoped>
.cats{ display:flex; gap:12px; overflow:auto; padding:8px 16px 4px; scrollbar-width:none; }
.cats::-webkit-scrollbar{ display:none; }
.cat{ flex:0 0 auto; display:flex; flex-direction:column; align-items:center; gap:6px; background:none; border:none; cursor:pointer; }
.icon{ width:56px; height:56px; border-radius:50%; display:grid; place-items:center; box-shadow:0 2px 8px rgba(0,0,0,.06); border:1px solid #f0f0f0; }
.cat.active .icon{ outline:2px solid #ec3d2e; outline-offset:2px; }
.label{ font-size:11px; font-weight:600; color:#333; max-width:64px; text-align:center; line-height:1.2; white-space:nowrap; }
</style>
