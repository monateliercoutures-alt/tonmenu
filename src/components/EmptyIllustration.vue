<template>
  <div class="ill">
    <div class="ghost-box">
      <div class="ghost">◕‿◕</div>
      <div class="box">
        <span class="q">?</span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ type: String })
</script>
<style scoped>
.ill{ display:grid; place-items:center; padding:12px; }
.ghost-box{ position:relative; width:160px; height:120px; }
.ghost{ position:absolute; left:86px; top:6px; width:64px; height:56px; background:#F5F5F5; border-radius:28px 28px 22px 22px; display:grid; place-items:center; font-size:18px; color:#bbb; box-shadow:0 4px 16px rgba(0,0,0,.06); }
.ghost::after{ content:""; position:absolute; bottom:-6px; left:14px; right:14px; height:10px; background:#F5F5F5; border-radius:0 0 12px 12px; }
.box{ position:absolute; left:10px; top:22px; width:96px; height:84px; background:#fff; border:1.5px solid #EAEAEA; border-radius:10px; display:grid; place-items:center; box-shadow:0 6px 18px rgba(0,0,0,.06); transform: rotate(-6deg); }
.q{ font-size:28px; font-weight:800; color:#FFC400; background:#FFF6CC; width:36px; height:36px; display:grid; place-items:center; border-radius:50%; }
</style>
