<template>
  <BottomSheet v-model="app.showAddressSheet">
    <div class="addr-sheet">
      <div class="map">
        <div class="map-bg">
          <!-- stylized map -->
          <div class="street v1"></div>
          <div class="street v2"></div>
          <div class="street h1"></div>
          <div class="street h2"></div>
          <div class="pin-wrap">
            <div class="circle"></div>
            <div class="pin"><Home :size="18" color="#fff"/></div>
            <div class="label">Rue Mohamed Diomandé, 389</div>
          </div>
          <div class="blue-dot"></div>
          <div class="landmark">Immaculé de Marie</div>
        </div>
        <button class="close" @click="app.showAddressSheet=false"><X :size="18"/></button>
        <button class="locate" @click="locate"><Navigation :size="18"/></button>
        <div class="google-mark">Google</div>
      </div>
      <div class="bottom">
        <h3>Où devons-nous livrer ?</h3>
        <button class="current" @click="useCurrent">
          <Navigation :size="18"/> 
          <div class="cur-text"><strong>Emplacement actuel</strong><span>{{ app.currentAddress.full }}</span></div>
        </button>
        <button class="add" @click="addNew">Ajouter une nouvelle adresse</button>

        <div v-if="showForm" class="form">
          <input v-model="newAddr" placeholder="Repère (ex: en face de la pharmacie...)" />
          <input v-model="newDetail" placeholder="Étage / Appartement" />
          <input v-model="newInstr" placeholder="Instructions pour le livreur" />
          <div class="labels">
            <button :class="{ active: label==='Maison' }" @click="label='Maison'">Maison</button>
            <button :class="{ active: label==='Travail' }" @click="label='Travail'">Travail</button>
            <button :class="{ active: label==='Autre' }" @click="label='Autre'">Autre</button>
          </div>
          <button class="btn-red" @click="save">Enregistrer</button>
        </div>

        <div v-if="saved.length" class="saved">
          <h4>Adresses enregistrées</h4>
          <div v-for="a in saved" :key="a.id" class="saved-row">
            <div><strong>{{ a.label }}</strong><div class="small">{{ a.address }} — {{ a.detail }}</div></div>
            <button @click="selectSaved(a)">Choisir</button>
          </div>
        </div>
      </div>
    </div>
  </BottomSheet>
</template>
<script setup>
import { ref } from 'vue'
import { X, Navigation, Home } from 'lucide-vue-next'
import BottomSheet from '../../components/BottomSheet.vue'
import { useAppStore } from '../../stores/app.js'
const app = useAppStore()
const showForm = ref(false)
const newAddr = ref(''), newDetail = ref(''), newInstr = ref(''), label = ref('Maison')
import { mockAddresses } from '../../data/mockData.js'
const saved = ref([...mockAddresses])
function addNew(){ showForm.value = !showForm.value }
function save(){
  if(!newAddr.value) return
  const addr = { id: Date.now().toString(), label: label.value, address: newAddr.value, detail: newDetail.value + ' ' + newInstr.value }
  saved.value.unshift(addr)
  app.setAddress({ label: addr.label, full: addr.address })
  showForm.value=false
  app.showAddressSheet=false
}
function selectSaved(a){ app.setAddress({ label: a.label, full: a.address }); app.showAddressSheet=false }
function useCurrent(){ app.showAddressSheet=false }
function locate(){ /* mock */ }
</script>
<style scoped>
.addr-sheet{ padding:0; margin:-12px -16px -24px; }
.map{ position:relative; height:320px; overflow:hidden; }
.map-bg{ position:absolute; inset:0; background:#EAF3FF; }
.street{ position:absolute; background:#fff; border:1px solid #e5e9f0; }
.v1{ left:28%; top:0; bottom:0; width:18px; }
.v2{ left:62%; top:0; bottom:0; width:14px; }
.h1{ left:0; right:0; top:36%; height:14px; }
.h2{ left:0; right:0; top:62%; height:12px; }
.circle{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:120px; height:120px; border-radius:50%; background:rgba(56,132,255,.15); border:1px solid rgba(56,132,255,.2); }
.pin{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:42px; height:42px; background:#0E8A5A; border:2px solid #fff; border-radius:50% 50% 50% 0; transform:translate(-50%,-50%) rotate(-45deg); display:grid; place-items:center; box-shadow:0 4px 14px rgba(0,0,0,.2); }
.pin > *{ transform:rotate(45deg); }
.label{ position:absolute; left:50%; top:32%; transform:translateX(-50%); background:#111; color:#fff; font-size:11px; font-weight:700; padding:6px 10px; border-radius:999px; white-space:nowrap; }
.blue-dot{ position:absolute; left:46%; top:54%; width:10px; height:10px; background:#2F80FF; border:2px solid #fff; border-radius:50%; box-shadow:0 2px 8px rgba(0,0,0,.2); }
.landmark{ position:absolute; left:54%; top:52%; font-size:11px; color:#5a6b80; background:#fff; padding:4px 8px; border-radius:999px; box-shadow:0 2px 8px rgba(0,0,0,.06); }
.close{ position:absolute; left:12px; top:12px; width:36px; height:36px; border-radius:50%; background:#fff; border:none; display:grid; place-items:center; box-shadow:0 2px 10px rgba(0,0,0,.1); }
.locate{ position:absolute; right:12px; bottom:14px; width:40px; height:40px; border-radius:50%; background:#fff; border:none; display:grid; place-items:center; box-shadow:0 2px 10px rgba(0,0,0,.12); }
.google-mark{ position:absolute; left:12px; bottom:10px; font-size:11px; color:#777; font-weight:700; background:#fff; padding:4px 8px; border-radius:8px; }
.bottom{ padding:14px 16px 20px; background:#fff; }
.bottom h3{ font-size:16px; font-weight:800; margin:0 0 10px; }
.current{ width:100%; display:flex; align-items:center; gap:10px; padding:12px; border:1px solid #eee; border-radius:14px; background:#fff; text-align:left; }
.cur-text strong{ display:block; font-size:13px; }
.cur-text span{ font-size:12px; color:#777; }
.add{ width:100%; margin-top:10px; padding:12px; border-radius:999px; background:#F2F2F2; border:none; font-weight:700; }
.form{ margin-top:12px; display:flex; flex-direction:column; gap:8px; }
.form input{ padding:10px 12px; border:1px solid #ddd; border-radius:12px; font-size:14px; }
.labels{ display:flex; gap:8px; }
.labels button{ flex:1; padding:8px; border-radius:999px; border:1px solid #ddd; background:#fff; font-weight:600; }
.labels button.active{ background:#ec3d2e; color:#fff; border-color:#ec3d2e; }
.btn-red{ background:#ec3d2e; color:#fff; border:none; padding:12px; border-radius:999px; font-weight:700; }
.saved{ margin-top:14px; }
.saved h4{ font-size:13px; margin:0 0 8px; }
.saved-row{ display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid #eee; border-radius:12px; margin-bottom:8px; }
.small{ font-size:12px; color:#777; }
.saved-row button{ background:#FFF6CC; border:none; padding:6px 10px; border-radius:999px; font-weight:700; }
</style>
