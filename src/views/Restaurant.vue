<template>
  <div v-if="resto" class="page">
    <div class="cover">
      <img :src="resto.cover" />
      <button class="back" @click="$router.back()"><ArrowLeft :size="18"/></button>
      <button class="heart" @click="app.toggleFav(resto.id)"><Heart :size="18" :fill="app.isFav(resto.id) ? '#ec3d2e' : 'none'" :color="app.isFav(resto.id) ? '#ec3d2e' : '#111'"/></button>
      <div class="cover-meta">
        <h1>{{ resto.name }}</h1>
        <div class="line"><ThumbsUp :size="12"/> {{ resto.rating }}% ({{ resto.reviews }}) • {{ resto.cuisine }} • {{ resto.deliveryTime }}</div>
      </div>
    </div>

    <div class="info-bar">
      <span class="open" :class="{ closed: !resto.open }">{{ resto.open ? 'Ouvert' : 'Fermé' }}</span>
      <span>•</span>
      <span>{{ resto.frais===0 ? 'Livraison gratuite' : resto.frais + ' F' }}</span>
      <span>•</span>
      <span>Min {{ resto.minOrder || 2000 }} F</span>
      <button class="share" @click="share"><Share2 :size="14"/> Partager</button>
    </div>

    <div class="cats-bar">
      <button v-for="cat in menuCats" :key="cat" :class="{ active: activeCat===cat }" @click="activeCat=cat">{{ cat }}</button>
    </div>

    <div class="menu">
      <div v-for="dish in filteredMenu" :key="dish.id" class="dish" @click="openDish(dish)">
        <div class="dish-text">
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.desc }}</p>
          <div class="price">{{ dish.price.toLocaleString('fr-FR') }} F</div>
        </div>
        <div class="dish-img">
          <img :src="dish.image" />
          <button class="add" @click.stop="quickAdd(dish)"><Plus :size="16"/></button>
        </div>
      </div>
    </div>

    <!-- Dish sheet -->
    <BottomSheet v-model="showDish">
      <div v-if="activeDish" class="dish-sheet">
        <img :src="activeDish.image" />
        <h2>{{ activeDish.name }}</h2>
        <p>{{ activeDish.desc }}</p>
        <div v-if="activeDish.extras?.length" class="extras">
          <h4>Suppléments</h4>
          <label v-for="e in activeDish.extras" :key="e.name" class="extra">
            <input type="checkbox" :value="e" v-model="selectedExtras" /> {{ e.name }} <span>+{{ e.price }} F</span>
          </label>
        </div>
        <div class="note">
          <label>Note spéciale (sans piment...)</label>
          <input v-model="specialNote" placeholder="Ex: sans oignon" />
        </div>
        <div class="qty">
          <button @click="qty=Math.max(1, qty-1)"><Minus :size="16"/></button>
          <span>{{ qty }}</span>
          <button @click="qty++"><Plus :size="16"/></button>
          <div class="total">{{ (activeDish.price * qty + selectedExtras.reduce((s,e)=> s+e.price,0)*qty).toLocaleString('fr-FR') }} F</div>
        </div>
        <button class="btn-add" @click="addToCart">Ajouter · {{ (activeDish.price * qty + selectedExtras.reduce((s,e)=> s+e.price,0)*qty).toLocaleString('fr-FR') }} F</button>
      </div>
    </BottomSheet>

    <div v-if="cart.count>0 && cart.restaurantId===resto.id" class="cart-bar">
      <router-link to="/panier" class="cart-link">
        <span>{{ cart.count }} article{{ cart.count>1 ? 's' : '' }} • {{ cart.total.toLocaleString('fr-FR') }} F</span>
        <span class="go">Voir panier <ChevronRight :size="14"/></span>
      </router-link>
    </div>
  </div>
  <div v-else class="notfound">Restaurant introuvable</div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Heart, ThumbsUp, Share2, Plus, Minus, ChevronRight } from 'lucide-vue-next'
import BottomSheet from '../components/BottomSheet.vue'
import { restaurants } from '../data/mockData.js'
import { useCartStore } from '../stores/cart.js'
import { useAppStore } from '../stores/app.js'
const route = useRoute(); const router = useRouter()
const cart = useCartStore(); const app = useAppStore()
const resto = computed(()=> restaurants.find(r=> r.id===route.params.id))
const menuCats = computed(()=> ['Tous', ...new Set((resto.value?.menu||[]).map(d=> d.name.includes('Poulet')?'Poulet':'Classiques'))])
const activeCat = ref('Tous')
const filteredMenu = computed(()=> resto.value?.menu || [])
const showDish = ref(false); const activeDish = ref(null); const qty=ref(1); const selectedExtras=ref([]); const specialNote=ref('')
function openDish(d){ activeDish.value=d; qty.value=1; selectedExtras.value=[]; specialNote.value=''; showDish.value=true }
function quickAdd(d){ openDish(d) }
function addToCart(){
  cart.addItem(resto.value.id, activeDish.value, qty.value, selectedExtras.value, specialNote.value)
  showDish.value=false
}
function share(){
  const url = window.location.href
  if(navigator.share) navigator.share({ title: resto.value.name, url })
  else {
    const wa = `https://wa.me/?text=${encodeURIComponent(`Découvre ${resto.value.name} sur TonMenu: ${url}`)}`
    window.open(wa,'_blank')
  }
}
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding-bottom:80px; }
.cover{ position:relative; height:220px; overflow:hidden; }
.cover img{ width:100%; height:100%; object-fit:cover; }
.back, .heart{ position:absolute; top:12px; width:36px; height:36px; border-radius:50%; background:#fff; border:none; display:grid; place-items:center; box-shadow:0 2px 10px rgba(0,0,0,.12); }
.back{ left:12px; } .heart{ right:12px; }
.cover-meta{ position:absolute; left:0; right:0; bottom:0; padding:16px; background:linear-gradient(transparent, rgba(0,0,0,.65)); color:#fff; }
.cover-meta h1{ margin:0; font-size:20px; font-weight:800; }
.line{ font-size:12px; opacity:.95; margin-top:4px; display:flex; gap:6px; align-items:center; }
.info-bar{ display:flex; align-items:center; gap:8px; padding:10px 16px; font-size:13px; border-bottom:1px solid #f0f0f0; flex-wrap:wrap; }
.open{ background:#EAF6EC; color:#0E8A5A; padding:4px 8px; border-radius:999px; font-weight:700; font-size:12px; }
.open.closed{ background:#FFEBEE; color:#D32F2F; }
.share{ margin-left:auto; display:inline-flex; align-items:center; gap:6px; background:#fff; border:1px solid #eee; padding:6px 10px; border-radius:999px; font-weight:600; }
.cats-bar{ display:flex; gap:8px; overflow:auto; padding:10px 16px; border-bottom:1px solid #f3f3f3; scrollbar-width:none; }
.cats-bar::-webkit-scrollbar{ display:none; }
.cats-bar button{ white-space:nowrap; padding:8px 14px; border-radius:999px; border:1px solid #e8e8e8; background:#fff; font-weight:600; font-size:13px; }
.cats-bar button.active{ background:#111; color:#fff; border-color:#111; }
.menu{ padding:8px 16px; }
.dish{ display:flex; gap:12px; padding:12px 0; border-bottom:1px solid #f5f5f5; cursor:pointer; }
.dish-text{ flex:1; }
.dish-text h3{ margin:0; font-size:15px; font-weight:700; }
.dish-text p{ margin:4px 0 6px; color:#666; font-size:13px; line-height:1.3; }
.price{ font-weight:800; }
.dish-img{ position:relative; width:88px; height:88px; flex:0 0 auto; }
.dish-img img{ width:100%; height:100%; object-fit:cover; border-radius:12px; }
.add{ position:absolute; right:-6px; bottom:-6px; width:30px; height:30px; border-radius:50%; background:#fff; border:1px solid #eee; display:grid; place-items:center; box-shadow:0 2px 8px rgba(0,0,0,.1); }
.dish-sheet img{ width:100%; height:180px; object-fit:cover; border-radius:14px; }
.dish-sheet h2{ margin:12px 0 4px; font-size:18px; font-weight:800; }
.dish-sheet p{ color:#666; font-size:13px; margin:0; }
.extras{ margin-top:12px; }
.extras h4{ font-size:14px; margin:0 0 8px; }
.extra{ display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #f0f0f0; font-size:13px; }
.extra span{ color:#777; }
.note{ margin-top:12px; }
.note label{ font-size:12px; color:#666; font-weight:600; }
.note input{ width:100%; margin-top:6px; padding:10px 12px; border:1px solid #ddd; border-radius:12px; font-size:13px; }
.qty{ display:flex; align-items:center; gap:12px; margin-top:14px; }
.qty button{ width:36px; height:36px; border-radius:50%; border:1px solid #ddd; background:#fff; display:grid; place-items:center; }
.qty span{ font-weight:800; min-width:20px; text-align:center; }
.total{ margin-left:auto; font-weight:800; }
.btn-add{ width:100%; margin-top:12px; background:#ec3d2e; color:#fff; border:none; padding:14px; border-radius:999px; font-weight:800; font-size:14px; }
.cart-bar{ position:fixed; left:50%; transform:translateX(-50%); bottom:14px; width:min(680px, calc(100% - 16px)); z-index:20; }
.cart-link{ display:flex; justify-content:space-between; align-items:center; background:#111; color:#fff; padding:12px 16px; border-radius:999px; text-decoration:none; font-weight:700; box-shadow:0 8px 24px rgba(0,0,0,.18); }
.go{ display:inline-flex; align-items:center; gap:4px; background:#ec3d2e; padding:6px 10px; border-radius:999px; font-size:12px; }
.notfound{ padding:40px; text-align:center; }
</style>
