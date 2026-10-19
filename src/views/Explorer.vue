<template>
  <div class="page">
    <div class="hero">
      <div class="pill-wrap"><AddressPill :address="app.currentAddress" @open="app.showAddressSheet=true" /></div>
      <h1>Explorer</h1>
      <div class="loupe"><Search :size="44" /></div>
    </div>

    <div class="search-wrap">
      <Search :size="18" />
      <input v-model="q" placeholder="Recherche dans TonMenu" @input="onSearch" />
    </div>

    <div class="hint">
      <div class="star">✦</div>
      <div>
        <strong>Besoin d’idées ?</strong>
        <p>Trouvez des établissements tendance, méconnus ou adorés par vos amis.</p>
      </div>
    </div>

    <section v-for="sec in explorerSections" :key="sec.title" class="section">
      <div class="sec-head">
        <div>
          <h2>{{ sec.title }}</h2>
          <p>{{ sec.subtitle }}</p>
        </div>
        <button class="arrow"><ArrowRight :size="16"/></button>
      </div>
      <div class="carousel">
        <RestaurantCard v-for="r in sec.items" :key="r.id" :r="r" :isFav="app.isFav(r.id)" @open="$router.push(`/restaurant/${r.id}`)" @fav="app.toggleFav(r.id)" />
      </div>
    </section>

    <AddressSheet />
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { Search, ArrowRight } from 'lucide-vue-next'
import AddressPill from '../components/AddressPill.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import AddressSheet from './shared/AddressSheet.vue'
import { restaurants } from '../data/mockData.js'
import { useAppStore } from '../stores/app.js'
const app = useAppStore()
const q = ref('')
function onSearch(){}
const explorerSections = computed(()=>[
  { title:'Les plus tendances', subtitle:'Constamment en tête des tendances, semaine après semaine', items: restaurants.slice(0,3) },
  { title:'Boulangerie et pâtisserie', subtitle:'Des gourmandises livrées à votre porte', items: restaurants.filter(r=> r.category==='petitdej').slice(0,3) },
  { title:'Les mieux notés', subtitle:'Les adresses les mieux notées ce mois-ci', items: [...restaurants].sort((a,b)=> b.rating - a.rating).slice(0,3) },
  { title:'Nouveautés', subtitle:'Fraîchement arrivés sur TonMenu', items: restaurants.slice(5,8) },
])
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding-bottom:20px; }
.hero{ background:#FFF6CC; border-radius:0 0 18px 18px; padding:16px 16px 28px; position:relative; overflow:hidden; }
.hero h1{ margin:14px 0 0; font-size:28px; font-weight:800; }
.loupe{ position:absolute; right:12px; top:18px; width:120px; height:120px; background:#FFD60A; border-radius:50% 50% 50% 50% / 60% 60% 40% 40%; display:grid; place-items:center; transform:rotate(-8deg); opacity:.9; }
.pill-wrap{ display:flex; justify-content:center; }
.search-wrap{ margin:16px; display:flex; align-items:center; gap:10px; background:#F2F2F2; border-radius:999px; padding:10px 14px; }
.search-wrap input{ flex:1; border:none; background:transparent; outline:none; font-size:14px; }
.hint{ margin:16px; background:#EAF6EC; border-radius:14px; padding:14px; display:flex; gap:12px; }
.hint .star{ width:44px; height:44px; border-radius:50%; background:#FFD60A; display:grid; place-items:center; font-weight:800; flex:0 0 auto; }
.hint strong{ font-size:14px; }
.hint p{ margin:4px 0 0; font-size:13px; color:#555; }
.section{ margin-top:18px; }
.sec-head{ display:flex; justify-content:space-between; align-items:center; padding:0 16px; }
.sec-head h2{ font-size:16px; font-weight:800; margin:0; }
.sec-head p{ font-size:12px; color:#777; margin:2px 0 0; }
.arrow{ width:32px; height:32px; border-radius:50%; background:#fff; border:1px solid #eee; display:grid; place-items:center; }
.carousel{ display:flex; gap:14px; overflow:auto; padding:12px 16px; scrollbar-width:none; }
.carousel::-webkit-scrollbar{ display:none; }
.carousel > *{ flex:0 0 82%; max-width:360px; }
@media(min-width:1024px){ .page{ max-width:1200px; } .carousel > *{ flex:0 0 28%; } }
</style>
