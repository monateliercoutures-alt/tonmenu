<template>
  <BottomSheet v-model="app.showLogin" :sheetStyle="{ paddingBottom: '20px' }">
    <div class="login-sheet">
      <div class="banner">
        <div class="banner-icon">🛵</div>
        <div class="banner-text"><strong>Livraison gratuite sur la 1re commande</strong><span>Pour les nouveaux clients uniquement.</span></div>
      </div>

      <h2>Bienvenue !</h2>
      <p class="subtitle">Commençons par votre numéro de téléphone</p>

      <div class="fields">
        <div class="prefix">
          <label>Préfixe</label>
          <button class="prefix-btn" @click="showPrefixes=!showPrefixes">
            <span>🇨🇮</span> +225 <ChevronDown :size="14"/>
          </button>
          <div v-if="showPrefixes" class="prefix-list">
            <button v-for="p in prefixes" :key="p.code" @click="phonePrefix=p.code; showPrefixes=false">{{ p.flag }} {{ p.code }} {{ p.name }}</button>
          </div>
        </div>
        <div class="phone">
          <label>Numéro de téléphone</label>
          <input v-model="phoneNumber" placeholder="01 03 02 16 72" inputmode="numeric" />
        </div>
      </div>

      <div class="actions">
        <button class="btn-outline" @click="sendCode('sms')">SMS</button>
        <button class="btn-green" @click="sendCode('whatsapp')">WhatsApp</button>
      </div>

      <div class="or">ou avec</div>
      <button class="btn-google" @click="google"><img src="https://www.svgrepo.com/show/475656/google-color.svg" /> Google</button>

      <button class="other" @click="showOther=!showOther">Autres méthodes <ChevronDown :size="14" :class="{ rot: showOther }"/></button>
      <div v-if="showOther" class="other-list">
        <button>Continuer avec Apple</button>
        <button>Continuer avec e-mail</button>
      </div>

      <p class="legal">En continuant, vous acceptez automatiquement nos <a>Conditions d’utilisation</a>, notre <a>Politique de confidentialité</a> et notre <a>Politique en matière de cookies</a>.</p>

      <!-- Code step -->
      <BottomSheet v-model="showCode" :sheetStyle="{ marginBottom: '0' }">
        <button class="back" @click="showCode=false"><ArrowLeft :size="18"/> Retour</button>
        <div class="code-header">
          <div class="bubble">💬</div>
          <h3>Saisissez le code</h3>
          <p>Insérez le code à 4 chiffres que nous avons envoyé (SMS{{ via==='whatsapp' ? ' ou WhatsApp' : '' }}) au <strong>{{ phonePrefix }} {{ phoneNumber || '01 03 02 16 72' }}</strong></p>
        </div>
        <div class="code-inputs">
          <input v-for="(d,i) in 4" :key="i" :ref="el=> codeRefs[i]=el" v-model="codeDigits[i]" maxlength="1" inputmode="numeric" @input="onDigit(i)" @keydown.backspace="onBack(i)" />
        </div>
        <p class="resend" v-if="timer>0">Renvoyer le code dans 00:{{ String(timer).padStart(2,'0') }}</p>
        <button v-else class="resend active" @click="timer=30">Renvoyer le code</button>
        <p v-if="error" class="err">Code incorrect. Essaie 1234 (mode démo).</p>
      </BottomSheet>
    </div>
  </BottomSheet>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, ArrowLeft } from 'lucide-vue-next'
import BottomSheet from '../../components/BottomSheet.vue'
import { useAuthStore } from '../../stores/auth.js'
import { useAppStore } from '../../stores/app.js'
const auth = useAuthStore()
const app = useAppStore()
const phonePrefix = ref('+225')
const phoneNumber = ref('')
const showPrefixes = ref(false)
const showOther = ref(false)
const showCode = ref(false)
const via = ref('sms')
const timer = ref(30)
const codeDigits = ref(['','','',''])
const codeRefs = ref([])
const error = ref(false)
let interval = null
const prefixes = [
  { flag:'🇨🇮', code:'+225', name:'Côte d’Ivoire' },
  { flag:'🇸🇳', code:'+221', name:'Sénégal' },
  { flag:'🇲🇱', code:'+223', name:'Mali' },
  { flag:'🇧🇫', code:'+226', name:'Burkina' },
  { flag:'🇬🇳', code:'+224', name:'Guinée' },
  { flag:'🇧🇯', code:'+229', name:'Bénin' },
  { flag:'🇹🇬', code:'+228', name:'Togo' },
]

function sendCode(type){
  if(!phoneNumber.value) phoneNumber.value='0103021672'
  via.value=type
  auth.setPendingPhone(phonePrefix.value+phoneNumber.value)
  showCode.value=true
  startTimer()
  setTimeout(()=> codeRefs.value[0]?.focus(), 200)
}
function startTimer(){
  timer.value=30
  clearInterval(interval)
  interval=setInterval(()=> { timer.value--; if(timer.value<=0) clearInterval(interval)}, 1000)
}
function onDigit(i){
  const v = codeDigits.value[i]
  if(!/^\d$/.test(v)) codeDigits.value[i]=''
  else if(i<3) codeRefs.value[i+1]?.focus()
  if(codeDigits.value.join('').length===4) check()
}
function onBack(i){
  if(!codeDigits.value[i] && i>0) codeRefs.value[i-1]?.focus()
}
function check(){
  const code = codeDigits.value.join('')
  if(auth.verifyCode(code)){
    error.value=false
    showCode.value=false
    app.showLogin=false
  } else error.value=true
}
function google(){ auth.loginWithGoogle(); app.showLogin=false }
</script>
<style scoped>
.banner{ background:#FFF6EC; border:1px solid #FFE9C2; border-radius:12px; padding:10px 12px; display:flex; gap:10px; align-items:center; }
.banner-icon{ font-size:24px; }
.banner-text strong{ display:block; font-size:13px; }
.banner-text span{ font-size:12px; color:#666; }
h2{ text-align:center; margin:14px 0 4px; font-size:22px; font-weight:800; }
.subtitle{ text-align:center; color:#777; font-size:13px; margin:0; }
.fields{ display:flex; gap:10px; margin-top:14px; }
.fields label{ font-size:12px; color:#666; font-weight:600; display:block; margin-bottom:6px; }
.prefix-btn{ display:flex; align-items:center; gap:6px; padding:10px 12px; border:1px solid #ddd; border-radius:12px; background:#fff; font-weight:600; }
.prefix-list{ position:absolute; background:#fff; border:1px solid #eee; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,.08); padding:6px; display:flex; flex-direction:column; z-index:10; }
.prefix-list button{ text-align:left; padding:8px 10px; border:none; background:none; font-size:13px; }
.phone{ flex:1; }
.phone input{ width:100%; padding:11px 12px; border:1px solid #ddd; border-radius:12px; font-size:15px; outline:none; }
.actions{ display:flex; gap:10px; margin-top:14px; }
.btn-outline{ flex:1; padding:12px; border-radius:999px; border:1px solid #ddd; background:#fff; font-weight:700; }
.btn-green{ flex:1; padding:12px; border-radius:999px; border:none; background:#0E8A5A; color:#fff; font-weight:700; }
.or{ text-align:center; color:#999; font-size:13px; margin:14px 0; position:relative; }
.or::before,.or::after{ content:""; position:absolute; top:50%; width:40%; height:1px; background:#eee; }
.or::before{ left:0; } .or::after{ right:0; }
.btn-google{ width:100%; display:flex; align-items:center; justify-content:center; gap:8px; padding:11px; border:1px solid #ddd; border-radius:999px; background:#fff; font-weight:700; }
.btn-google img{ width:18px; height:18px; }
.other{ width:100%; margin-top:12px; background:none; border:none; color:#0E8A5A; font-weight:700; display:flex; align-items:center; justify-content:center; gap:6px; }
.other-list{ display:flex; flex-direction:column; gap:8px; margin-top:8px; }
.other-list button{ padding:10px; border:1px solid #eee; border-radius:999px; background:#fff; }
.legal{ font-size:11px; color:#777; text-align:center; margin-top:16px; line-height:1.4; }
.legal a{ text-decoration:underline; }
.back{ display:inline-flex; align-items:center; gap:6px; background:none; border:none; font-weight:600; }
.code-header{ text-align:center; margin-top:8px; }
.bubble{ font-size:32px; }
.code-header h3{ margin:8px 0 6px; font-size:20px; font-weight:800; }
.code-header p{ font-size:13px; color:#555; }
.code-inputs{ display:flex; gap:10px; justify-content:center; margin-top:16px; }
.code-inputs input{ width:54px; height:54px; border:1px solid #ddd; border-radius:12px; text-align:center; font-size:22px; font-weight:700; outline:none; }
.code-inputs input:focus{ border-color:#ec3d2e; }
.resend{ text-align:center; color:#999; font-size:13px; margin-top:12px; }
.resend.active{ color:#0E8A5A; font-weight:700; background:none; border:none; display:block; width:100%; }
.err{ color:#D32F2F; text-align:center; font-size:13px; }
</style>
