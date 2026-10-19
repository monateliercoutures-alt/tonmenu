<template>
  <div class="page">
    <!-- Top address pill -->
    <div class="topbar">
      <AddressPill :address="app.currentAddress" @open="app.showAddressSheet=true" />
    </div>

    <h1 class="title">Restaurants</h1>

    <div class="search-wrap">
      <Search :size="18" />
      <input v-model="query" placeholder="Recherche dans Restaurants" />
    </div>

    <!-- Categories -->
    <CategoryPills :categories="categories" v-model="activeCat" />

    <!-- Filters -->
    <FilterPills />

    <!-- Sections -->
    <section v-for="sec in filteredSections" :key="sec.id" class="section">
      <div class="sec-head">
        <div>
          <h2>{{ sec.title }}</h2>
          <p>{{ sec.subtitle }}</p>
        </div>
        <router-link :to="`/accueil?section=${sec.id}`" class="arrow"><ArrowRight :size="16"/></router-link>
      </div>
      <div class="carousel">
        <RestaurantCard
          v-for="r in restaurantsBySection(sec.id)"
          :key="r.id"
          :r="r"
          :isFav="app.isFav(r.id)"
          @open="goResto(r.id)"
          @fav="app.toggleFav(r.id)"
        />
      </div>
    </section>

    <!-- Vertical list fallback -->
    <section class="section">
      <div class="sec-head"><div><h2>Autour de chez vous</h2><p>À moins de 2 km</p></div></div>
      <div class="vertical">
        <RestaurantCard v-for="r in filteredRestaurants" :key="r.id" :r="r" :isFav="app.isFav(r.id)" @open="goResto(r.id)" @fav="app.toggleFav(r.id)" />
      </div>
    </section>

    <!-- Login / Address sheets -->
    <LoginSheet />
    <AddressSheet />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search, ArrowRight } from 'lucide-vue-next'
import AddressPill from '../components/AddressPill.vue'
import CategoryPills from '../components/CategoryPills.vue'
import FilterPills from '../components/FilterPills.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import LoginSheet from '../views/shared/LoginSheet.vue'
import AddressSheet from '../views/shared/AddressSheet.vue'
import { categories, restaurants, sections } from '../data/mockData.js'
import { useAppStore } from '../stores/app.js'

const router = useRouter()
const app = useAppStore()
const query = ref('')
const activeCat = ref('')

const filteredSections = computed(()=> sections)

function restaurantsBySection(secId){
  if(activeCat.value){
    const byCat = restaurants.filter(r=> r.category===activeCat.value)
    if(byCat.length) return byCat.slice(0,4)
  }
  if(query.value){
    return restaurants.filter(r=> r.name.toLowerCase().includes(query.value.toLowerCase())).slice(0,4)
  }
  // simple distribution
  if(secId==='chaines') return restaurants.slice(0,4)
  if(secId==='promos') return restaurants.filter(r=> r.promo).slice(0,4)
  if(secId==='mieux-notes') return [...restaurants].sort((a,b)=> b.rating - a.rating).slice(0,4)
  if(secId==='autour') return restaurants.slice(2,6)
  return restaurants.slice(4,8)
}

const filteredRestaurants = computed(()=>{
  let list = restaurants
  if(activeCat.value) list = list.filter(r=> r.category===activeCat.value)
  if(query.value) list = list.filter(r=> r.name.toLowerCase().includes(query.value.toLowerCase()) || r.cuisine.toLowerCase().includes(query.value.toLowerCase()))
  return list
})

function goResto(id){ router.push(`/restaurant/${id}`) }
</script>

<style scoped>
.page{ max-width:720px; margin:0 auto; background:#fff; }
.topbar{ padding:10px 16px 0; display:flex; justify-content:center; }
.title{ font-size:28px; font-weight:800; margin:14px 16px 10px; }
.search-wrap{ margin:0 16px; display:flex; align-items:center; gap:10px; background:#F2F2F2; border-radius:999px; padding:10px 14px; }
.search-wrap input{ border:none; background:transparent; outline:none; flex:1; font-size:14px; }
.section{ margin-top:18px; }
.sec-head{ display:flex; justify-content:space-between; align-items:center; padding:0 16px; }
.sec-head h2{ font-size:17px; font-weight:800; margin:0; }
.sec-head p{ font-size:12.5px; color:#777; margin:2px 0 0; }
.arrow{ width:32px; height:32px; border-radius:50%; background:#fff; border:1px solid #eee; display:grid; place-items:center; text-decoration:none; color:#111; }
.carousel{ display:flex; gap:14px; overflow:auto; padding:12px 16px; scroll-snap-type:x mandatory; scrollbar-width:none; }
.carousel::-webkit-scrollbar{ display:none; }
.carousel > *{ flex:0 0 82%; scroll-snap-align:start; max-width:360px; }
.vertical{ display:flex; flex-direction:column; gap:14px; padding:12px 16px; }
@media(min-width:720px){ .carousel > *{ flex:0 0 44%; } }
@media(min-width:1024px){ .page{ max-width:1200px; } .carousel > *{ flex:0 0 28%; } .vertical{ display:grid; grid-template-columns:1fr 1fr; } }
</style>
