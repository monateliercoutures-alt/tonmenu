<template>
  <div class="page">
    <div class="top"><button @click="$router.back()"><ArrowLeft :size="18"/></button><h1>Finaliser la commande</h1></div>

    <div class="section">
      <h3>Informations de livraison</h3>
      <div class="form">
        <label>Nom</label><input v-model="name" placeholder="Ex: Kouakou Mark" />
        <label>Téléphone</label>
        <div class="phone-row">
          <select v-model="prefix"><option>+225</option><option>+221</option><option>+223</option></select>
          <input v-model="phone" placeholder="01 03 02 16 72" />
        </div>
        <label>Mode</label>
        <div class="modes">
          <button :class="{ active: mode==='livraison' }" @click="mode='livraison'"><Bike :size="16"/> Livraison TonMenu Express</button>
          <button :class="{ active: mode==='retrait' }" @click="mode='retrait'"><Store :size="16"/> Retrait sur place</button>
        </div>
        <div v-if="mode==='livraison'">
          <label>Adresse / repère</label><input v-model="address" :placeholder="app.currentAddress.full" />
          <label>Instructions livreur</label><input v-model="instr" placeholder="Ex: 2e porte à droite" />
          <button class="gps" @click="useGPS"><MapPin :size="14"/> Utiliser ma position GPS</button>
          <div v-if="gps" class="gps-ok">📍 Position capturée: 5.395, -4.05</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>Paiement — Mobile Money</h3>
      <p class="hint">Le restaurant valide manuellement après réception du Mobile Money.</p>
      <div class="pay-methods">
        <button v-for="m in payments" :key="m.id" :class="['pay', m.id, { active: pay===m.id }]" @click="pay=m.id">
          <span class="dot" :style="{ background: m.color }"></span> {{ m.name }}
          <span v-if="m.number" class="num">{{ m.number }}</span>
        </button>
      </div>
      <div v-if="pay && pay!=='cash'" class="pay-detail">
        <p>Envoyez <strong>{{ cart.total.toLocaleString('fr-FR') }} F</strong> sur le numéro <strong>{{ payments.find(p=>p.id===pay)?.number }}</strong> ({{ payments.find(p=>p.id===pay)?.holder }})</p>
        <a :href="payLink" target="_blank" class="btn-wa">Ouvrir l'app de paiement / WhatsApp</a>
        <label>Référence de transaction (facultative)</label><input v-model="refTx" placeholder="Ex: TX123456" />
        <div class="btns"><button class="btn-paid" @click="confirmPaid">J'ai payé</button><button class="btn-wait" @click="payLater">Payer à la livraison</button></div>
        <p class="status">Statut: paiement en attente de validation par le restaurant</p>
      </div>
      <div v-if="pay==='cash'" class="pay-detail">
        <p>Paiement en espèces à la livraison — préparez <strong>{{ cart.total.toLocaleString('fr-FR') }} F</strong></p>
        <button class="btn-paid" @click="confirmPaid">Confirmer la commande</button>
      </div>
    </div>

    <div class="recap">
      <h3>Récapitulatif</h3>
      <div class="row" v-for="it in cart.items" :key="it.key"><span>{{ it.qty }}× {{ it.name }}</span><span>{{ (it.price*it.qty).toLocaleString('fr-FR') }} F</span></div>
      <div class="row total"><span>Total</span><span>{{ cart.total.toLocaleString('fr-FR') }} F</span></div>
      <button class="btn-commander" :disabled="!canOrder" @click="placeOrder">Confirmer · {{ cart.total.toLocaleString('fr-FR') }} F</button>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Bike, Store, MapPin } from 'lucide-vue-next'
import { useCartStore } from '../stores/cart.js'
import { useAppStore } from '../stores/app.js'
import { useAuthStore } from '../stores/auth.js'
import { paymentMethods, restaurants } from '../data/mockData.js'
const router = useRouter()
const cart = useCartStore(); const app = useAppStore(); const auth = useAuthStore()
const name = ref(auth.user?.name || ''); const prefix=ref('+225'); const phone=ref(auth.user?.phone?.replace('+225','') || ''); const mode=ref('livraison'); const address=ref(app.currentAddress.full); const instr=ref(''); const gps=ref(false)
const payments = paymentMethods; const pay=ref('orange'); const refTx=ref('')
const canOrder = computed(()=> name.value && phone.value && cart.count>0)
const payLink = computed(()=> {
  const m = payments.find(p=> p.id===pay.value)
  if(!m) return '#'
  const text = `Bonjour, je paie ${cart.total} F pour ma commande TonMenu via ${m.name} au ${m.number}`
  return `https://wa.me/2250707123456?text=${encodeURIComponent(text)}`
})
function useGPS(){ gps.value=true; address.value='Position GPS: Rue Mohamed Diomandé, 389' }
function confirmPaid(){}
function payLater(){ pay.value='cash' }
function placeOrder(){
  const resto = restaurants.find(r=> r.id===cart.restaurantId)
  const order = {
    id: 'TM-' + Date.now().toString().slice(-6),
    restaurantId: resto.id,
    restaurantName: resto.name,
    restaurantImage: resto.image,
    total: cart.total,
    status: pay.value==='cash' ? 'nouvelle' : 'paiement_en_attente',
    payment: pay.value,
    refTx: refTx.value,
    name: name.value,
    phone: prefix.value + phone.value,
    address: address.value,
    mode: mode.value,
    date: new Date().toLocaleDateString('fr-FR'),
    timeline: [{ status: 'nouvelle', at: new Date().toISOString() }],
    items: [...cart.items]
  }
  app.addOrder(order)
  cart.clear()
  router.push(`/commande/${order.id}`)
}
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; padding:12px 16px 40px; }
.top{ display:flex; align-items:center; gap:10px; }
.top button{ width:36px; height:36px; border-radius:50%; border:1px solid #eee; background:#fff; display:grid; place-items:center; }
.top h1{ font-size:18px; font-weight:800; margin:0; }
.section{ margin-top:16px; border:1px solid #eee; border-radius:16px; padding:14px; }
.section h3{ margin:0 0 10px; font-size:15px; font-weight:800; }
.hint{ font-size:12px; color:#777; margin:0 0 10px; }
.form{ display:flex; flex-direction:column; gap:8px; }
.form label{ font-size:12px; font-weight:600; color:#555; }
.form input, .form select{ padding:10px 12px; border:1px solid #ddd; border-radius:12px; font-size:14px; }
.phone-row{ display:flex; gap:8px; }
.phone-row select{ width:84px; }
.modes{ display:flex; gap:8px; }
.modes button{ flex:1; display:flex; align-items:center; justify-content:center; gap:6px; padding:10px; border-radius:999px; border:1px solid #ddd; background:#fff; font-weight:600; font-size:12px; }
.modes button.active{ background:#111; color:#fff; border-color:#111; }
.gps{ margin-top:6px; display:inline-flex; align-items:center; gap:6px; background:#F2F2F2; border:none; padding:8px 10px; border-radius:999px; font-weight:600; }
.gps-ok{ font-size:12px; color:#0E8A5A; margin-top:6px; }
.pay-methods{ display:flex; flex-direction:column; gap:8px; }
.pay{ display:flex; align-items:center; gap:8px; padding:12px; border:1px solid #e8e8e8; border-radius:12px; background:#fff; font-weight:600; text-align:left; }
.pay.active{ border-color:#ec3d2e; background:#FFF6F2; }
.dot{ width:10px; height:10px; border-radius:50%; }
.num{ margin-left:auto; font-size:12px; color:#777; }
.pay-detail{ margin-top:10px; background:#FFFBEA; border:1px solid #FFE9A8; border-radius:12px; padding:12px; font-size:13px; }
.pay-detail input{ width:100%; margin-top:6px; padding:10px; border:1px solid #ddd; border-radius:10px; }
.btn-wa{ display:block; margin:8px 0; text-align:center; background:#25D366; color:#fff; padding:10px; border-radius:999px; text-decoration:none; font-weight:700; }
.btns{ display:flex; gap:8px; margin-top:8px; }
.btn-paid{ flex:1; background:#ec3d2e; color:#fff; border:none; padding:10px; border-radius:999px; font-weight:700; }
.btn-wait{ flex:1; background:#fff; border:1px solid #ddd; padding:10px; border-radius:999px; font-weight:600; }
.status{ color:#E65100; font-weight:600; margin-top:8px; }
.recap{ margin-top:16px; border:1px solid #eee; border-radius:16px; padding:14px; }
.row{ display:flex; justify-content:space-between; padding:6px 0; font-size:14px; }
.row.total{ font-weight:800; border-top:1px solid #eee; margin-top:6px; padding-top:10px; }
.btn-commander{ width:100%; margin-top:12px; background:#ec3d2e; color:#fff; border:none; padding:14px; border-radius:999px; font-weight:800; font-size:15px; }
.btn-commander:disabled{ opacity:.5; }
</style>
