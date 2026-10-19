<template>
  <div class="page">
    <div class="top">
      <button @click="$router.back()"><ArrowLeft :size="18"/></button>
      <h1>Panier</h1>
      <span class="count">{{ cart.count }} articles</span>
    </div>

    <div v-if="cart.count===0" class="empty">
      <EmptyIllustration />
      <h3>Votre panier est vide</h3>
      <router-link to="/accueil" class="btn-red">Découvrir des restaurants</router-link>
    </div>

    <div v-else>
      <div class="resto-head">
        <img :src="resto?.image" />
        <div><strong>{{ resto?.name }}</strong><div class="small">{{ resto?.address }}</div></div>
      </div>

      <div class="items">
        <div v-for="it in cart.items" :key="it.key" class="item">
          <div class="item-info">
            <strong>{{ it.name }}</strong>
            <div class="small" v-if="it.extras.length">{{ it.extras.map(e=> e.name).join(', ') }}</div>
            <div class="small" v-if="it.specialNote">Note: {{ it.specialNote }}</div>
            <div class="price">{{ it.price.toLocaleString('fr-FR') }} F</div>
          </div>
          <div class="qty">
            <button @click="cart.updateQty(it.key, -1)"><Minus :size="14"/></button>
            <span>{{ it.qty }}</span>
            <button @click="cart.updateQty(it.key, 1)"><Plus :size="14"/></button>
          </div>
        </div>
      </div>

      <div class="summary">
        <div class="row"><span>Sous-total</span><span>{{ cart.subtotal.toLocaleString('fr-FR') }} F</span></div>
        <div class="row"><span>Frais de livraison</span><span>{{ cart.deliveryFee===0 ? 'Gratuit' : cart.deliveryFee + ' F' }}</span></div>
        <div class="row total"><span>Total</span><span>{{ cart.total.toLocaleString('fr-FR') }} F</span></div>
      </div>

      <div class="actions">
        <input v-model="promo" placeholder="Code promo" />
        <button class="btn-apply">Appliquer</button>
      </div>

      <router-link to="/checkout" class="btn-commander">Commander · {{ cart.total.toLocaleString('fr-FR') }} F</router-link>
      <p class="secure">Paiement sécurisé • Une seule commande par restaurant</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { ArrowLeft, Minus, Plus } from 'lucide-vue-next'
import EmptyIllustration from '../components/EmptyIllustration.vue'
import { useCartStore } from '../stores/cart.js'
import { restaurants } from '../data/mockData.js'
const cart = useCartStore()
const resto = computed(()=> restaurants.find(r=> r.id===cart.restaurantId))
const promo = ref('')
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px 100px; }
.top{ display:flex; align-items:center; gap:10px; padding:8px 0; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
.top h1{ font-size:20px; font-weight:800; margin:0; }
.count{ margin-left:auto; color:#777; font-size:13px; }
.empty{ text-align:center; padding:30px 0; }
.btn-red{ display:inline-block; margin-top:12px; background:#ec3d2e; color:#fff; padding:12px 18px; border-radius:999px; text-decoration:none; font-weight:700; }
.resto-head{ display:flex; gap:10px; align-items:center; padding:12px; border:1px solid #eee; border-radius:14px; }
.resto-head img{ width:44px; height:44px; border-radius:10px; object-fit:cover; }
.small{ font-size:12px; color:#777; }
.items{ margin-top:12px; display:flex; flex-direction:column; gap:10px; }
.item{ display:flex; justify-content:space-between; align-items:center; padding:12px; border:1px solid #eee; border-radius:14px; }
.item-info{ flex:1; }
.price{ font-weight:800; margin-top:4px; }
.qty{ display:flex; align-items:center; gap:8px; }
.qty button{ width:32px; height:32px; border-radius:50%; border:1px solid #ddd; background:#fff; display:grid; place-items:center; }
.qty span{ min-width:16px; text-align:center; font-weight:700; }
.summary{ margin-top:14px; border:1px solid #eee; border-radius:14px; padding:12px; }
.row{ display:flex; justify-content:space-between; padding:6px 0; font-size:14px; }
.row.total{ font-weight:800; border-top:1px solid #eee; margin-top:6px; padding-top:10px; }
.actions{ display:flex; gap:8px; margin-top:12px; }
.actions input{ flex:1; padding:10px 12px; border:1px solid #ddd; border-radius:999px; }
.btn-apply{ padding:10px 16px; border-radius:999px; border:none; background:#111; color:#fff; font-weight:700; }
.btn-commander{ display:block; margin-top:14px; text-align:center; background:#ec3d2e; color:#fff; padding:14px; border-radius:999px; text-decoration:none; font-weight:800; }
.secure{ text-align:center; color:#777; font-size:12px; margin-top:8px; }
</style>
