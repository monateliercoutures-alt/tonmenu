<template>
  <div class="pro">
    <aside class="sidebar">
      <div class="brand">TonMenu<span>Pro</span></div>
      <div class="status"><span class="dot"></span> Ouvert <button>Fermer</button></div>
      <nav>
        <router-link v-for="l in links" :key="l.to" :to="l.to" :class="{ active: $route.path===l.to }"><component :is="l.icon" :size="16"/> {{ l.label }}</router-link>
      </nav>
      <div class="bottom">
        <div class="onboarding">Onboarding 4/7 <div class="bar"><div style="width:57%"></div></div></div>
        <button class="qr">📱 QR Code</button>
      </div>
    </aside>
    <main class="main">
      <header class="pro-header">
        <h1>{{ title }}</h1>
        <div class="actions"><span class="badge">En attente de validation</span><button class="btn">+ Ajouter un plat</button></div>
      </header>

      <!-- Dashboard preview -->
      <div v-if="$route.path.includes('/pro/commandes') || $route.path==='/pro'" class="dash">
        <div class="kpis">
          <div v-for="k in kpis" :key="k.label" class="kpi"><span>{{ k.label }}</span><strong>{{ k.value }}</strong></div>
        </div>
        <div class="orders-pro">
          <div class="tabs"><button v-for="t in ['Nouvelles','En préparation','Prêtes','En livraison','Terminées']" :key="t" :class="{ active: t==='Nouvelles' }">{{ t }}</button></div>
          <div v-for="o in mockProOrders" :key="o.id" class="order-card">
            <div class="oc-head"><strong>{{ o.id }}</strong><span class="time">{{ o.time }}</span><span class="pay" :class="o.payStatus">{{ o.payStatus }}</span></div>
            <div class="oc-body">
              <div><strong>{{ o.client }}</strong> • {{ o.mode }} • {{ o.total }} F</div>
              <div class="items">{{ o.items.join(', ') }}</div>
              <div class="note" v-if="o.note">Note: {{ o.note }}</div>
            </div>
            <div class="oc-actions">
              <button class="btn ghost">WhatsApp</button>
              <button class="btn red">Valider paiement</button>
              <button class="btn green">Accepter (10 min)</button>
              <button class="btn outline">Refuser</button>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="$route.path.includes('/menu')" class="panel">
        <h2>Menu — Catégories & plats</h2>
        <div class="cats">
          <div v-for="c in ['Poulet','Burgers','Accompagnements']" :key="c" class="cat-row">{{ c }} <span>⋮</span></div>
        </div>
        <div class="dishes">
          <div v-for="d in restaurants[0].menu" :key="d.id" class="dish-row">
            <img :src="d.image" />
            <div><strong>{{ d.name }}</strong><div class="small">{{ d.price }} F</div></div>
            <label class="switch"><input type="checkbox" checked /><span></span></label>
          </div>
        </div>
        <button class="btn red">+ Import rapide</button>
        <div class="preview">Aperçu “Comme le voit le client” disponible</div>
      </div>

      <div v-else-if="$route.path.includes('/ventes')" class="panel">
        <h2>Ventes & Statistiques</h2>
        <div class="stats">
          <div class="stat"><span>CA du jour</span><strong>185 500 F</strong></div>
          <div class="stat"><span>Commandes</span><strong>23</strong></div>
          <div class="stat"><span>Panier moyen</span><strong>8 000 F</strong></div>
        </div>
        <div class="chart">Graphique des ventes par heure (mock) — Heures de pointe: 12h-14h, 19h-21h</div>
        <div class="top-dishes">Top plats: 1. Poulet braisé 2. Bucket 10 3. Garba complet</div>
      </div>

      <div v-else-if="$route.path.includes('/finances')" class="panel">
        <h2>Finances</h2>
        <div class="solde">Solde: <strong>342 000 F</strong> — Commission TonMenu 10% — À reverser: 307 800 F</div>
        <div class="history">Historique reversements: 15/10 — 120 000 F (payé) • CSV/PDF export</div>
      </div>

      <div v-else-if="$route.path.includes('/avis')" class="panel">
        <h2>Avis</h2>
        <div class="avis" v-for="i in 3" :key="i">
          <strong>★★★★★ Kouakou M.</strong><p>Excellent poulet, livraison rapide !</p><button class="btn ghost">Répondre</button>
        </div>
      </div>

      <div v-else class="panel">
        <h2>QR Code & page publique</h2>
        <div class="qr-preview">
          <div class="qr-box">QR</div>
          <p>tonmenu.ci/r/{{ restaurants[0].id }}</p>
          <div class="btns"><button class="btn red">Télécharger PNG</button><button class="btn ghost">Partager WhatsApp</button></div>
        </div>
      </div>
    </main>

    <!-- mobile bottom nav for pro -->
    <nav class="pro-bottom">
      <router-link to="/pro/commandes"><ShoppingBag :size="18"/> Commandes</router-link>
      <router-link to="/pro/menu"><Utensils :size="18"/> Menu</router-link>
      <router-link to="/pro/ventes"><BarChart3 :size="18"/> Ventes</router-link>
      <router-link to="/pro/finances"><Wallet :size="18"/> Plus</router-link>
    </nav>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ShoppingBag, Utensils, BarChart3, Wallet } from 'lucide-vue-next'
import { restaurants } from '../../data/mockData.js'
const route = useRoute()
const links = [
  { to:'/pro/commandes', label:'Commandes', icon: ShoppingBag },
  { to:'/pro/menu', label:'Menu', icon: Utensils },
  { to:'/pro/ventes', label:'Ventes', icon: BarChart3 },
  { to:'/pro/finances', label:'Finances', icon: Wallet },
  { to:'/pro/avis', label:'Avis', icon: Wallet },
  { to:'/pro/qr', label:'QR Code', icon: Wallet },
]
const title = computed(()=> links.find(l=> route.path===l.to)?.label || 'Tableau de bord')
const kpis = [
  { label:'Nouvelles', value:'3' },
  { label:'En préparation', value:'5' },
  { label:'Prêtes', value:'2' },
  { label:"CA du jour", value:'185 500 F' },
  { label:'Note', value:'4.8 ★' },
]
const mockProOrders = [
  { id:'TM-4821', time:'il y a 1 min', payStatus:'paiement_en_attente', client:'Aya K.', mode:'Livraison', total:'8 000', items:['Poulet braisé entier'], note:'Sans piment' },
  { id:'TM-4820', time:'il y a 4 min', payStatus:'paiement_validé', client:'Moussa D.', mode:'Retrait', total:'5 500', items:['Tenders 5 pièces'] },
  { id:'TM-4819', time:'il y a 12 min', payStatus:'paiement_validé', client:'Fatou B.', mode:'Livraison', total:'12 500', items:['Bucket 10 pièces','Jus mangue'] },
]
</script>
<style scoped>
.pro{ display:flex; min-height:100vh; background:#F6F6F6; }
.sidebar{ width:240px; background:#111; color:#fff; padding:16px; display:flex; flex-direction:column; gap:16px; position:sticky; top:0; height:100vh; }
.brand{ font-size:20px; font-weight:800; }
.brand span{ background:#ec3d2e; padding:2px 6px; border-radius:6px; margin-left:6px; font-size:12px; }
.status{ display:flex; align-items:center; gap:8px; font-size:13px; }
.dot{ width:8px; height:8px; border-radius:50%; background:#0E8A5A; }
.status button{ margin-left:auto; background:#333; color:#fff; border:none; padding:6px 10px; border-radius:999px; font-weight:600; }
.sidebar nav{ display:flex; flex-direction:column; gap:4px; }
.sidebar nav a{ color:#bbb; text-decoration:none; padding:10px 12px; border-radius:10px; display:flex; gap:8px; align-items:center; font-weight:600; font-size:14px; }
.sidebar nav a.active{ background:#222; color:#fff; }
.onboarding{ font-size:12px; color:#bbb; }
.bar{ height:6px; background:#333; border-radius:999px; margin-top:6px; overflow:hidden; }
.bar div{ height:100%; background:#ec3d2e; }
.qr{ width:100%; margin-top:10px; background:#fff; color:#111; border:none; padding:8px; border-radius:10px; font-weight:700; }
.main{ flex:1; padding:16px; }
.pro-header{ display:flex; justify-content:space-between; align-items:center; background:#fff; padding:12px 16px; border-radius:14px; border:1px solid #eee; }
.badge{ background:#FFF3E0; color:#E65100; padding:6px 10px; border-radius:999px; font-size:12px; font-weight:700; }
.btn{ padding:8px 14px; border-radius:999px; font-weight:700; border:none; cursor:pointer; }
.btn.red{ background:#ec3d2e; color:#fff; }
.btn.green{ background:#0E8A5A; color:#fff; }
.btn.ghost{ background:#F2F2F2; }
.btn.outline{ background:#fff; border:1px solid #ddd; }
.kpis{ display:grid; grid-template-columns:repeat(5,1fr); gap:10px; margin-top:12px; }
.kpi{ background:#fff; border:1px solid #eee; border-radius:14px; padding:12px; text-align:center; }
.kpi span{ font-size:12px; color:#777; display:block; }
.kpi strong{ font-size:16px; }
.orders-pro{ margin-top:12px; }
.tabs{ display:flex; gap:8px; overflow:auto; }
.tabs button{ padding:8px 12px; border-radius:999px; border:1px solid #ddd; background:#fff; font-weight:600; white-space:nowrap; }
.tabs button.active{ background:#111; color:#fff; }
.order-card{ background:#fff; border:1px solid #eee; border-radius:14px; padding:12px; margin-top:10px; }
.oc-head{ display:flex; gap:8px; align-items:center; font-size:13px; }
.time{ color:#777; }
.pay{ margin-left:auto; padding:4px 8px; border-radius:999px; font-size:11px; font-weight:700; color:#fff; background:#FF9800; }
.pay.paiement_validé{ background:#0E8A5A; }
.oc-body{ margin-top:6px; font-size:13px; }
.items{ color:#555; }
.note{ color:#E65100; font-size:12px; }
.oc-actions{ display:flex; gap:8px; margin-top:10px; flex-wrap:wrap; }
.panel{ background:#fff; border:1px solid #eee; border-radius:14px; padding:16px; margin-top:12px; }
.cats{ display:flex; gap:8px; margin-top:10px; }
.cat-row{ flex:1; padding:10px; border:1px solid #eee; border-radius:10px; display:flex; justify-content:space-between; }
.dishes{ margin-top:12px; display:flex; flex-direction:column; gap:8px; }
.dish-row{ display:flex; gap:10px; align-items:center; border:1px solid #f0f0f0; border-radius:10px; padding:8px; }
.dish-row img{ width:44px; height:44px; border-radius:8px; object-fit:cover; }
.small{ font-size:12px; color:#777; }
.switch{ margin-left:auto; position:relative; width:42px; height:24px; }
.switch input{ opacity:0; width:0; height:0; }
.switch span{ position:absolute; inset:0; background:#ddd; border-radius:999px; transition:.2s; }
.switch span::after{ content:""; position:absolute; width:18px; height:18px; background:#fff; border-radius:50%; top:3px; left:3px; transition:.2s; }
.switch input:checked + span{ background:#0E8A5A; }
.switch input:checked + span::after{ transform:translateX(18px); }
.preview{ margin-top:10px; font-size:13px; color:#777; }
.stats{ display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-top:10px; }
.stat{ border:1px solid #eee; border-radius:12px; padding:12px; text-align:center; }
.stat span{ font-size:12px; color:#777; }
.chart{ margin-top:12px; background:#F9F9F9; border:1px dashed #ddd; border-radius:12px; padding:20px; text-align:center; font-size:13px; color:#555; }
.qr-preview{ text-align:center; margin-top:12px; }
.qr-box{ width:120px; height:120px; background:#111; color:#fff; display:grid; place-items:center; border-radius:12px; margin:0 auto; font-weight:800; }
.solde{ margin-top:10px; background:#EAF6EC; padding:12px; border-radius:10px; }
.pro-bottom{ display:none; }
@media(max-width:900px){
  .sidebar{ display:none; }
  .kpis{ grid-template-columns:repeat(3,1fr); }
  .pro{ padding-bottom:64px; }
  .pro-bottom{ display:flex; position:fixed; left:0; right:0; bottom:0; background:#fff; border-top:1px solid #eee; justify-content:space-around; padding:8px 0  calc(8px + env(safe-area-inset-bottom)); }
  .pro-bottom a{ display:flex; flex-direction:column; align-items:center; gap:4px; text-decoration:none; color:#777; font-size:11px; font-weight:600; }
}
</style>
