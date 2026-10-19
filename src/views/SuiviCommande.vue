<template>
  <div class="page">
    <div class="top"><button @click="$router.push('/commandes')"><ArrowLeft :size="18"/></button><h1>Suivi de commande</h1></div>
    <div v-if="order" class="card">
      <div class="head">
        <img :src="order.restaurantImage" />
        <div><strong>{{ order.restaurantName }}</strong><div class="small">Commande {{ order.id }} • {{ order.date }}</div></div>
        <span class="status" :style="{ background: statusColor }">{{ order.status }}</span>
      </div>
      <div class="timeline">
        <div v-for="(step,i) in steps" :key="step.key" class="step" :class="{ done: isDone(step.key), active: order.status===step.key }">
          <div class="dot"></div>
          <div class="step-info"><strong>{{ step.label }}</strong><span>{{ step.time }}</span></div>
          <Check v-if="isDone(step.key)" :size="14" />
        </div>
      </div>
      <div class="actions">
        <a :href="`tel:${order.phone}`" class="btn ghost"><Phone :size="14"/> Appeler</a>
        <a :href="waLink" target="_blank" class="btn green"><MessageCircle :size="14"/> WhatsApp</a>
      </div>
      <div class="recap">
        <div v-for="it in order.items" :key="it.key" class="row"><span>{{ it.qty }}× {{ it.name }}</span><span>{{ (it.price*it.qty).toLocaleString('fr-FR') }} F</span></div>
        <div class="row total"><span>Total</span><span>{{ order.total.toLocaleString('fr-FR') }} F</span></div>
      </div>
      <div class="controls">
        <button v-if="order.status==='paiement_en_attente'" @click="advance('paiement_validé')" class="btn red">Simuler validation paiement (restaurant)</button>
        <button v-if="order.status==='paiement_validé'" @click="advance('acceptée')" class="btn red">Accepter</button>
        <button v-if="order.status==='acceptée'" @click="advance('en_préparation')" class="btn red">En préparation</button>
        <button v-if="order.status==='en_préparation'" @click="advance('prête')" class="btn red">Marquer prête</button>
        <button v-if="order.status==='prête'" @click="advance('en_livraison')" class="btn red">En livraison</button>
        <button v-if="order.status==='en_livraison'" @click="advance('livrée')" class="btn green">Marquer livrée</button>
      </div>
    </div>
    <div v-else class="notfound">Commande introuvable</div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, Check, Phone, MessageCircle } from 'lucide-vue-next'
import { useAppStore } from '../stores/app.js'
import { orderStatuses } from '../data/mockData.js'
const route = useRoute(); const app = useAppStore()
const order = computed(()=> app.orders.find(o=> o.id===route.params.id))
const statusColor = computed(()=> orderStatuses[order.value?.status]?.color || '#999')
const steps = [
  { key:'nouvelle', label:'Reçue', time:'Il y a 2 min' },
  { key:'paiement_en_attente', label:'Paiement en attente', time:'—' },
  { key:'paiement_validé', label:'Paiement validé', time:'—' },
  { key:'acceptée', label:'Acceptée', time:'—' },
  { key:'en_préparation', label:'En préparation', time:'—' },
  { key:'prête', label:'Prête', time:'—' },
  { key:'en_livraison', label:'En livraison', time:'—' },
  { key:'livrée', label:'Livrée', time:'—' },
]
const orderSeq = ['nouvelle','paiement_en_attente','paiement_validé','acceptée','en_préparation','prête','en_livraison','livrée']
function isDone(k){ if(!order.value) return false; return orderSeq.indexOf(k) <= orderSeq.indexOf(order.value.status) }
function advance(to){ app.updateOrder(order.value.id, { status: to }) }
const waLink = computed(()=> `https://wa.me/2250707123456?text=${encodeURIComponent(`Bonjour, suivi commande ${order.value?.id} - ${order.value?.restaurantName}`)}`)
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
.top h1{ font-size:18px; font-weight:800; margin:0; }
.card{ margin-top:12px; border:1px solid #eee; border-radius:16px; padding:14px; }
.head{ display:flex; gap:10px; align-items:center; }
.head img{ width:48px; height:48px; border-radius:12px; object-fit:cover; }
.small{ font-size:12px; color:#777; }
.status{ margin-left:auto; color:#fff; padding:6px 10px; border-radius:999px; font-size:11px; font-weight:700; }
.timeline{ margin-top:14px; border-left:2px solid #eee; padding-left:16px; display:flex; flex-direction:column; gap:12px; }
.step{ display:flex; align-items:center; gap:10px; position:relative; }
.step .dot{ width:12px; height:12px; border-radius:50%; background:#ddd; border:2px solid #fff; box-shadow:0 0 0 2px #eee; position:absolute; left:-23px; }
.step.done .dot{ background:#0E8A5A; box-shadow:0 0 0 2px #C8E6C9; }
.step.active .dot{ background:#ec3d2e; }
.step-info{ flex:1; }
.step-info strong{ display:block; font-size:13px; }
.step-info span{ font-size:11px; color:#777; }
.actions{ display:flex; gap:8px; margin-top:14px; }
.btn{ flex:1; display:flex; align-items:center; justify-content:center; gap:6px; padding:10px; border-radius:999px; text-decoration:none; font-weight:700; font-size:13px; }
.btn.ghost{ background:#F2F2F2; color:#111; }
.btn.green{ background:#25D366; color:#fff; }
.btn.red{ background:#ec3d2e; color:#fff; border:none; padding:12px; border-radius:999px; font-weight:700; width:100%; margin-top:8px; }
.btn.green{ background:#0E8A5A; }
.recap{ margin-top:14px; border-top:1px solid #f0f0f0; padding-top:10px; }
.row{ display:flex; justify-content:space-between; padding:6px 0; font-size:14px; }
.row.total{ font-weight:800; }
.controls{ margin-top:12px; display:flex; flex-direction:column; gap:8px; }
.notfound{ padding:40px; text-align:center; }
</style>
