<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>Mes favoris</h1></div>
    <div v-if="favRestaurants.length===0" class="empty">
      <Heart :size="32" />
      <p>Aucun favori pour le moment</p>
    </div>
    <div v-else class="list">
      <RestaurantCard v-for="r in favRestaurants" :key="r.id" :r="r" :isFav="true" @open="$router.push(`/restaurant/${r.id}`)" @fav="app.toggleFav(r.id)" />
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { ArrowLeft, Heart } from 'lucide-vue-next'
import RestaurantCard from '../../components/RestaurantCard.vue'
import { restaurants } from '../../data/mockData.js'
import { useAppStore } from '../../stores/app.js'
const app = useAppStore()
const favRestaurants = computed(()=> restaurants.filter(r=> app.isFav(r.id)))
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
h1{ font-size:18px; font-weight:800; margin:0; }
.empty{ text-align:center; padding:30px; color:#777; }
.list{ display:flex; flex-direction:column; gap:12px; margin-top:12px; }
</style>
