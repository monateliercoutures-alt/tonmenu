<template>
  <div class="page">
    <div class="header-yellow">
      <button class="help">Aide</button>
      <div class="profile-row" @click="goProfile">
        <div class="avatar">{{ user.initials }}</div>
        <div class="name-block">
          <div class="name">{{ user.name }} <span class="badge">NOUVEAU</span></div>
          <div class="sub">Connectez-vous à vos amis</div>
        </div>
        <ChevronRight :size="18" />
      </div>
    </div>

    <div class="sheet">
      <h2>Compte</h2>
      <div class="menu">
        <router-link to="/commandes?onglet=historique" class="row">
          <div class="left"><ShoppingBag :size="18"/> Historique des commandes</div>
          <span class="pill-grey">Voir sur Commandes</span>
        </router-link>

        <router-link to="/compte/profil" class="row">
          <div class="left"><User :size="18"/> Compte</div><ChevronRight :size="16"/>
        </router-link>

        <router-link to="/compte/adresses" class="row">
          <div class="left"><MapPin :size="18"/> Adresses</div><ChevronRight :size="16"/>
        </router-link>

        <router-link to="/compte/favoris" class="row">
          <div class="left"><Heart :size="18"/> Mes favoris</div><ChevronRight :size="16"/>
        </router-link>

        <router-link to="/compte/codes-promo" class="row">
          <div class="left"><Ticket :size="18"/> Codes promo</div><ChevronRight :size="16"/>
        </router-link>

        <router-link to="/compte/langue" class="row">
          <div class="left"><Languages :size="18"/> Langue</div><span class="value">Français</span><ChevronRight :size="16"/>
        </router-link>

        <router-link to="/compte/faq" class="row">
          <div class="left"><HelpCircle :size="18"/> FAQ</div><ChevronRight :size="16"/>
        </router-link>

        <router-link to="/compte/notifications" class="row">
          <div class="left"><Bell :size="18"/> Notifications</div><ChevronRight :size="16"/>
        </router-link>

        <router-link to="/compte/suppression" class="row danger">
          <div class="left"><Trash2 :size="18"/> Supprimer mon compte et mes données</div><ChevronRight :size="16"/>
        </router-link>

        <button class="row" @click="confirmLogout=true">
          <div class="left"><LogOut :size="18"/> Se déconnecter</div>
        </button>
      </div>
    </div>

    <!-- Logout confirm -->
    <BottomSheet v-model="confirmLogout">
      <h3>Confirmer la déconnexion</h3>
      <p>Voulez-vous vraiment vous déconnecter ?</p>
      <div class="actions">
        <button class="btn ghost" @click="confirmLogout=false">Annuler</button>
        <button class="btn red" @click="logout">Se déconnecter</button>
      </div>
    </BottomSheet>

    <!-- Guest gate -->
    <div v-if="!auth.isLogged" class="guest-overlay">
      <div class="guest-card">
        <h3>Connectez-vous</h3>
        <p>Accédez à votre historique, vos adresses et vos favoris.</p>
        <button class="btn red" @click="app.showLogin=true">Se connecter</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ShoppingBag, User, MapPin, Heart, Ticket, Languages, HelpCircle, Bell, Trash2, LogOut, ChevronRight } from 'lucide-vue-next'
import BottomSheet from '../components/BottomSheet.vue'
import { useAuthStore } from '../stores/auth.js'
import { useAppStore } from '../stores/app.js'
const auth = useAuthStore()
const app = useAppStore()
const router = useRouter()
const user = auth.user || { name: 'Kouakou Mark', initials: 'KM' }
const confirmLogout = ref(false)
function logout(){ auth.logout(); confirmLogout.value=false; router.push('/accueil') }
function goProfile(){ router.push('/compte/profil') }
</script>
<style scoped>
.page{ max-width:720px; margin:0 auto; background:#F6F6F6; min-height:100vh; }
.header-yellow{ background:#FFF6CC; padding:18px 16px 28px; border-radius:0 0 18px 18px; position:relative; }
.help{ position:absolute; right:16px; top:12px; background:#0E8A5A; color:#fff; border:none; border-radius:999px; padding:8px 14px; font-weight:700; }
.profile-row{ display:flex; align-items:center; gap:12px; margin-top:34px; cursor:pointer; }
.avatar{ width:52px; height:52px; border-radius:50%; background:#BFE8D0; display:grid; place-items:center; font-weight:800; color:#0E4B2A; flex:0 0 auto; }
.name{ font-weight:800; font-size:18px; display:flex; align-items:center; gap:8px; }
.badge{ background:#fff; border:1px solid #FFD60A; color:#111; font-size:10px; padding:3px 6px; border-radius:6px; font-weight:700; }
.sub{ color:#666; font-size:12px; }
.sheet{ background:#fff; border-radius:18px 18px 0 0; margin-top:-12px; padding:16px; min-height:60vh; }
.sheet h2{ font-size:20px; font-weight:800; margin:0 0 12px; }
.menu{ display:flex; flex-direction:column; }
.row{ display:flex; align-items:center; justify-content:space-between; padding:14px 4px; border-bottom:1px solid #F0F0F0; text-decoration:none; color:#111; background:none; border-left:none; border-right:none; border-top:none; width:100%; cursor:pointer; font-size:14px; font-weight:500; }
.left{ display:flex; align-items:center; gap:10px; }
.pill-grey{ background:#F2F2F2; color:#333; padding:6px 10px; border-radius:999px; font-size:12px; font-weight:600; }
.value{ color:#777; font-size:13px; }
.row.danger{ color:#D32F2F; }
.actions{ display:flex; gap:10px; margin-top:16px; }
.btn{ flex:1; padding:12px; border-radius:999px; font-weight:700; border:none; cursor:pointer; }
.btn.ghost{ background:#F2F2F2; }
.btn.red{ background:#ec3d2e; color:#fff; }
.guest-overlay{ position:fixed; inset:0; background:rgba(255,255,255,.86); display:grid; place-items:center; z-index:5; padding:20px; }
.guest-card{ background:#fff; border:1px solid #eee; border-radius:16px; padding:20px; text-align:center; max-width:360px; width:100%; box-shadow:0 10px 30px rgba(0,0,0,.08); }
</style>
