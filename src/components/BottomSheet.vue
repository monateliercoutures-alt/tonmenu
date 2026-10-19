<template>
  <teleport to="body">
    <div v-if="modelValue" class="sheet-root">
      <div class="backdrop" @click="$emit('update:modelValue', false)"></div>
      <div class="sheet" :style="sheetStyle">
        <div class="handle"></div>
        <slot />
      </div>
    </div>
  </teleport>
</template>
<script setup>
defineProps({ modelValue: Boolean, sheetStyle: Object })
defineEmits(['update:modelValue'])
</script>
<style scoped>
.sheet-root{ position:fixed; inset:0; z-index:60; display:flex; align-items:flex-end; justify-content:center; }
.backdrop{ position:absolute; inset:0; background:rgba(0,0,0,.35); backdrop-filter: blur(2px); }
.sheet{
  position:relative; background:#fff; width:100%; max-width:520px;
  border-radius:20px 20px 0 0; padding:12px 16px 24px; max-height:92vh; overflow:auto;
  box-shadow:0 -10px 40px rgba(0,0,0,.15); animation: up .28s ease;
}
.handle{ width:36px; height:4px; border-radius:999px; background:#E0E0E0; margin:6px auto 12px; }
@keyframes up{ from{ transform:translateY(18px); opacity:0 } to{ transform:translateY(0); opacity:1 } }
@media (min-width:600px){ .sheet{ border-radius:20px; margin-bottom:16px; max-height:88vh; } }
</style>
