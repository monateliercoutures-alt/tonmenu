<template>
  <div class="page">
    <h1>Commandes</h1>
    <div class="tabs">
      <button :class="{ active: tab==='en-cours' }" @click="tab='en-cours'">En cours</button>
      <button :class="{ active: tab==='historique' }" @click="tab='historique'">Historique</button>
    </div>

    <div v-if="tab==='en-cours'" class="tab-content">
      <div class="card empty">
        <EmptyIllustration />
        <h3>Suivez vos commandes</h3>
        <p>Vos commandes en cours seront répertoriées ici</p>
        <div v-if="liveOrders.length===0" class="muted">Aucune commande active</div>
        <div v-else class="orders">
          <div v-for="o in liveOrders" :key="o.id" class="order-row" @click="$router.push(`/commande/${o.id}`)">
            <img :src="o.restaurantImage" />
            <div><strong>{{ o.restaurantName }}</strong><div class="meta">{{ o.id }} • {{ o.total }} F • {{ o.status }}</div></div>
            <ChevronRight :size="16"/>
          </div>
        </div>
      </div>

      <h2 class="sub">Poursuivre la commande</h2>
      <div class="card">
        <div class="cart-empty">
          <div class="cart-icon">🛒</div>
          <h4>Aucun panier pour le moment</h4>
          <p>Ajoutez des articles provenant des établissements pour créer de nouveaux paniers</p>
        </div>
        <div v-if="cart.count>0" class="cart-preview">
          <div class="cart-preview-head">
            <img :src="currentResto?.image" />
            <div><strong>{{ currentResto?.name }}</strong><div class="small">{{ cart.count }} articles • {{ cart.total }} F</div></div>
            <router-link to="/panier" class="btn-red">Voir panier</router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="tab-content">
      <div v-if="app.orders.length===0" class="card empty">
        <EmptyIllustration />
        <h3>Aucune commande</h3>
        <p>Vous pourrez revoir vos anciennes commandes et les renouveler directement d’ici</p>
        <router-link to="/accueil" class="btn-green">Passez votre première commande</router-link>
      </div>
      <div v-else class="history">
        <div v-for="o in app.orders" :key="o.id" class="order-card">
          <img :src="o.restaurantImage" />
          <div class="info">
            <strong>{{ o.restaurantName }}</strong>
            <div class="meta">{{ o.date }} • {{ o.total }} F</div>
            <span class="status" :style="{ background: statusColor(o.status) }">{{ o.status }}</span>
          </div>
          <button class="btn-ghost" @click="reorder(o)">Recommander</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import EmptyIllustration from '../components/EmptyIllustration.vue'
import { useAppStore } from '../stores/app.js'
import { useCartStore } from '../stores/cart.js'
import { restaurants, orderStatuses } from '../data/mockData.js'

const app = useAppStore()
const cart = useCartStore()
const tab = ref(new URLSearchParams(window.location.search).get('onglet') === 'historique' ? 'historique' : 'en-cours')

const liveOrders = computed(()=> app.orders.filter(o=> ['nouvelle','paiement_en_attente','paiement_validé','acceptée','en_préparation','prête','en_livraison'].includes(o.status)))
const currentResto = computed(()=> restaurants.find(r=> r.id===cart.restaurantId))

function statusColor(s){ return orderStatuses[s]?.color || '#999' }
function reorder(o){ alert('Panier reconstitué pour ' + o.restaurantName) }
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:16px; }
h1{ font-size:24px; font-weight:800; margin:8px 0 12px; }
.tabs{ display:flex; gap:24px; border-bottom:1px solid #eee; }
.tabs button{ flex:1; padding:12px 0; background:none; border:none; border-bottom:2px solid transparent; font-weight:600; color:#777; cursor:pointer; }
.tabs button.active{ color:#111; border-color:#111; font-weight:800; }
.card{ background:#fff; border:1px solid #eee; border-radius:16px; padding:18px; margin-top:14px; text-align:center; }
.card.empty h3{ margin:8px 0 4px; font-weight:800; }
.card.empty p{ color:#777; font-size:13px; margin:0; }
.muted{ color:#999; font-size:13px; margin-top:8px; }
.sub{ font-size:16px; font-weight:800; margin:18px 0 0; }
.cart-empty{ text-align:center; padding:10px; }
.cart-icon{ font-size:36px; }
.cart-empty h4{ margin:8px 0 4px; }
.cart-empty p{ color:#777; font-size:13px; }
.btn-green{ display:inline-block; margin-top:14px; background:#0E8A5A; color:#fff; padding:12px 18px; border-radius:999px; font-weight:700; text-decoration:none; }
.btn-red{ background:#ec3d2e; color:#fff; padding:8px 12px; border-radius:999px; text-decoration:none; font-weight:700; font-size:12px; }
.btn-ghost{ background:#fff; border:1px solid #ddd; border-radius:999px; padding:8px 12px; font-weight:600; }
.order-row{ display:flex; align-items:center; gap:10px; text-align:left; padding:8px; border:1px solid #eee; border-radius:12px; margin-top:10px; cursor:pointer; }
.order-row img{ width:48px; height:48px; border-radius:10px; object-fit:cover; }
.meta{ font-size:12px; color:#777; }
.history{ margin-top:12px; display:flex; flex-direction:column; gap:10px; }
.order-card{ display:flex; gap:10px; align-items:center; border:1px solid #eee; border-radius:14px; padding:10px; }
.order-card img{ width:56px; height:56px; border-radius:12px; object-fit:cover; }
.info{ flex:1; text-align:left; }
.status{ font-size:11px; color:#fff; padding:3px 8px; border-radius:999px; }
.cart-preview{ margin-top:12px; text-align:left; }
.cart-preview-head{ display:flex; align-items:center; gap:10px; }
.cart-preview-head img{ width:40px; height:40px; border-radius:10px; object-fit:cover; }
.small{ font-size:12px; color:#777; }
</style>
