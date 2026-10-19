<template>
  <article class="card" @click="$emit('open')" role="button" tabindex="0" @keydown.enter="$emit('open')">
    <div class="img-wrap">
      <img :src="r.image" :alt="r.name" loading="lazy" />
      <span v-if="r.promo" class="badge-promo">{{ r.promo }}</span>
      <span v-if="r.promoSub" class="badge-sub">{{ r.promoSub }}</span>
      <button class="fav" @click.stop="$emit('fav')" :aria-label="isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'">
        <Heart :size="18" :fill="isFav ? '#ec3d2e' : 'none'" :color="isFav ? '#ec3d2e' : '#333'" />
      </button>
      <div v-if="!r.open" class="closed-overlay">
        <span>Fermé • Ouvre à {{ r.openAt || '11h' }}</span>
      </div>
    </div>
    <div class="meta">
      <h3 class="name">{{ r.name }}</h3>
      <div class="line">
        <span class="like"><ThumbsUp :size="13" /> {{ r.rating }}%</span>
        <span class="reviews">({{ r.reviews >=1000 ? Math.floor(r.reviews/1000)+'k+' : r.reviews }})</span>
        <span class="dot">•</span>
        <span class="gratuit" v-if="r.deliveryFree"><Bike :size="12" /> Gratuit</span>
        <span v-else class="payant">{{ r.frais }} F</span>
        <span class="dot">•</span>
        <span class="time">{{ r.deliveryTime }}</span>
      </div>
      <div v-if="r.sponsored" class="sponsored">Sponsorisé</div>
    </div>
  </article>
</template>
<script setup>
import { Heart, ThumbsUp, Bike } from 'lucide-vue-next'
defineProps({ r: Object, isFav: Boolean })
defineEmits(['open','fav'])
</script>
<style scoped>
.card{ cursor:pointer; }
.img-wrap{
  position:relative; border-radius:16px; overflow:hidden; background:#f5f5f5;
  aspect-ratio: 16/9.2;
}
.img-wrap img{ width:100%; height:100%; object-fit:cover; display:block; }
.badge-promo{
  position:absolute; left:10px; top:10px; background:#ec3d2e; color:#fff;
  font-size:12px; font-weight:800; padding:6px 10px; border-radius:8px; letter-spacing:.2px;
}
.badge-sub{
  position:absolute; left:10px; bottom:10px; background:#fff; color:#111;
  font-size:11px; font-weight:600; padding:6px 8px; border-radius:999px; box-shadow:0 2px 8px rgba(0,0,0,.12);
}
.fav{
  position:absolute; right:10px; top:10px; width:36px; height:36px; border-radius:50%;
  background:#fff; border:none; display:grid; place-items:center; box-shadow:0 2px 10px rgba(0,0,0,.12); cursor:pointer;
}
.closed-overlay{
  position:absolute; inset:0; background:rgba(0,0,0,.38); display:grid; place-items:center; color:#fff; font-weight:700; font-size:14px;
}
.meta{ padding:8px 2px 2px; }
.name{ font-size:16px; font-weight:800; margin:0 0 4px; color:#111; line-height:1.2; }
.line{ display:flex; align-items:center; gap:6px; font-size:13px; color:#555; flex-wrap:wrap; }
.like{ display:inline-flex; align-items:center; gap:4px; font-weight:700; color:#111; }
.reviews{ color:#777; }
.dot{ color:#bbb; }
.gratuit{ display:inline-flex; align-items:center; gap:4px; background:#FFECEC; color:#ec3d2e; font-weight:700; padding:2px 7px; border-radius:999px; font-size:12px; }
.sponsored{ font-size:12px; color:#9AA0A6; margin-top:2px; }
</style>
