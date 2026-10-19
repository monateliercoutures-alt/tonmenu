<template>
  <div class="vitrine">
    <!-- HERO exact -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-left">
          <div class="eyebrow">Chaud. Généreux. Tout simplement bon.</div>
          <h1>Le vrai goût<br>de chez nous.</h1>
          <p class="desc">De l'alloco doré à la bonne braise du quartier,<br>vos envies ont trouvé leur adresse.</p>
          <p class="sub">Les cuisines d'Abidjan. <b>À votre porte.</b></p>
          <router-link to="/accueil" class="btn-hero">Découvrir les restaurants <span>→</span></router-link>
          <div class="hero-foot"><span>100 % restauration locale</span><span class="muted">Yopougon, en livraison chez vous.</span></div>
        </div>
        <div class="hero-right">
          <img src="/extracted/exact-hero.png" alt="Poulet braisé" style="width:100%; height:100%; object-fit:cover; display:block;" />
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section id="cuisines" class="section">
      <div class="kicker">CHAQUE ENVIE A SON MENU</div>
      <h2>Qu'est-ce qui vous fait envie ?</h2>
      <div class="cat-bar">
        <button class="pill red" @click="activeCat='all'" :class="{on: activeCat==='all'}"><span class="ico">🍴</span> Toutes les cuisines <em>10</em></button>
        <span class="hint">10 catégories de restauration</span>
      </div>
      <div class="cat-grid">
        <button v-for="(c,i) in cats" :key="c.t" class="cat" @click="activeCat=c.t" :class="{on: activeCat===c.t}">
          <div class="thumb"><img :src="c.img" :alt="c.t" loading="lazy" /></div>
          <h3>{{ c.t }}</h3>
          <p>{{ c.d }}</p>
          <span class="count">0 restaurants</span>
        </button>
      </div>
    </section>

    <!-- BANNERS -->
    <section class="banners">
      <router-link v-for="(b,i) in banners" :key="i" :to="b.to" class="bn" :class="b.cls">
        <img :src="b.img" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />
        <div class="bn-overlay" :class="b.cls">
          <small>{{ b.kicker }}</small>
          <h3 v-html="b.title"></h3>
          <span>Explorer <b>↗</b></span>
        </div>
      </router-link>
    </section>

    <!-- DECOUVERTES -->
    <section class="section beige">
      <div class="kicker">LES BONNES ADRESSES DU QUARTIER</div>
      <h2>Vos prochaines découvertes</h2>
      <p class="sub">De vraies cuisines, tout près de chez vous.</p>
      <div class="bar">
        <span class="pill-light">Tous les restaurants <em>0</em></span>
        <div class="sort" ref="sortRef">
          <button @click="open=!open"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M7 12h10M10 18h4" stroke="currentColor" stroke-width="1.5"/></svg> {{ sortLabel }} <span :class="{rot:open}">▾</span></button>
          <div v-if="open" class="menu">
            <button v-for="o in opts" :key="o.v" :class="{on: sort===o.v}" @click="sort=o.v; open=false">{{ o.l }}</button>
          </div>
        </div>
      </div>
      <div v-if="list.length" class="resto-grid">
        <RestaurantCard v-for="r in list" :key="r.id" :r="r" :isFav="app.isFav(r.id)" @open="$router.push('/restaurant/'+r.id)" @fav="app.toggleFav(r.id)" />
      </div>
      <div v-else class="empty">
        <div class="empty-img"><img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=420&q=80&auto=format&fit=crop" /><span>BIENTÔT<br>À TABLE !</span></div>
        <div class="empty-txt"><small>LES PREMIERS PARTENAIRES ARRIVENT</small><h3>Le quartier se met à table.</h3><p>Nous préparons les premières bonnes adresses de Yopougon.<br>Vous avez un restaurant ? Faites découvrir votre cuisine.</p><router-link to="/pro" class="btn">Inscrire mon restaurant <span>↗</span></router-link></div>
      </div>
    </section>

    <!-- SAVEURS 1 -->
    <section class="section">
      <div class="kicker">LA GOURMANDISE PARLE TOUTES LES LANGUES</div>
      <h2>Les saveurs qu'on aime</h2>
      <p class="sub">Des inspirations à retrouver selon les menus de nos partenaires.</p>
      <div class="grid8">
        <router-link v-for="s in saveurs.slice(0,4)" :key="s.t" to="/accueil" class="s-card">
          <div class="s-img"><img :src="s.img" loading="lazy" /></div>
          <small>Cuisine locale</small><h4>{{ s.t }}</h4><span>Explorer les restaurants <b>→</b></span>
        </router-link>
      </div>
    </section>

    <!-- SAVEURS 2 -->
    <section class="section" style="padding-top:0">
      <div class="grid8">
        <router-link v-for="s in saveurs.slice(4)" :key="s.t" to="/accueil" class="s-card">
          <div class="s-img"><img :src="s.img" loading="lazy" /></div>
          <small>Cuisine locale</small><h4>{{ s.t }}</h4><span>Explorer les restaurants <b>→</b></span>
        </router-link>
      </div>
      <p class="legal">Photos d'inspiration. Les plats disponibles sont ceux des menus partenaires. Les marques visibles ne constituent pas une affiliation.</p>
    </section>

    <!-- YELLOW -->
    <div class="yellow"><span>DU GOÛT, PAS DE COMPLICATIONS</span><i>✳</i><span>UN QUARTIER À LA FOIS</span><i>✳</i><span>LES VRAIES SAVEURS D'ABIDJAN</span><i>✳</i></div>

    <!-- QUARTIERS -->
    <section id="esprit" class="section">
      <div class="duo">
        <div class="duo-img"><img class="big" src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=80&auto=format&fit=crop" /><img class="mini" src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=300&q=80&auto=format&fit=crop" /><span class="badge">ICI, ON AIME<br><b>bien manger.</b></span></div>
        <div class="duo-txt"><small>BIENVENUE CHEZ TONMENU</small><h2>Les bonnes cuisines<br>font les bons quartiers.</h2><p>Une braise qui crépite, une recette qu'on se transmet, une adresse qu'on recommande aux amis. C'est cette cuisine-là qu'on veut rapprocher de vous.</p><p>TonMenu commence à Yopougon, avec une idée simple : donner aux restaurants d'ici une place dans votre quotidien. Rien que de la restauration. Et beaucoup de gourmandise.</p><router-link to="/accueil" class="btn">Trouver ma prochaine adresse <span>→</span></router-link></div>
      </div>
      <div id="marche" class="feats">
        <div><i>🏪</i><h5>Une cuisine qui vous plaît</h5><p>Découvrez les restaurants<br>et leurs spécialités.</p></div>
        <div><i>🍲</i><h5>Un menu à votre goût</h5><p>Choisissez vos plats<br>et composez votre panier.</p></div>
        <div><i>💳</i><h5>Vos habitudes de paiement</h5><p>Choisissez votre opérateur.<br>Mobile Money simple pour le moment.</p></div>
        <div><i>🚲</i><h5>Le quartier à votre porte</h5><p>Consultez le statut de préparation<br>depuis votre commande.</p></div>
      </div>
    </section>

    <!-- APP -->
    <section class="app">
      <div class="app-inner">
        <div class="app-txt"><small>L'APPÉTIT N'ATTEND PAS.</small><h2>Votre quartier.<br>Votre menu.<br><span>Dans votre poche.</span></h2><p>Gardez TonMenu sur votre écran d'accueil.<br>Pas de téléchargement dans un store, juste un clic.</p><button class="dark" @click="install"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 3v13" stroke="white" stroke-width="1.6"/><path d="M7 11l5 5 5-5" stroke="white" stroke-width="1.6"/><path d="M3 17v3h18v-3" stroke="white" stroke-width="1.6"/></svg> Installer TonMenu</button><small class="pwa">PWA · Android, iPhone et ordinateur</small></div>
        <div class="app-visual">
          <div class="phone"><div class="ph-head">TonMenu.</div><img src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=420&q=80&auto=format&fit=crop" /><div class="ph-foot">BON APPÉTIT, LE QUARTIER.</div></div>
          <div class="phone2"><img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=420&q=80&auto=format&fit=crop" /></div>
          <span class="blob">TOUJOURS<br><b>à portée<br>de main.</b></span>
        </div>
      </div>
    </section>

    <!-- PARTNER -->
    <section class="section">
      <div class="partner-head"><div><small>VOTRE TALENT MÉRITE D'ÊTRE DÉCOUVERT</small><h2>Vous cuisinez. Le quartier se régale.</h2><p>Un menu en ligne, des commandes et votre propre QR code.<br>Rejoignez TonMenu, simplement.</p></div><router-link to="/pro" class="btn">Devenir partenaire <span>↗</span></router-link></div>
      <div class="strip"><img v-for="u in strips" :key="u" :src="u" loading="lazy" /></div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import { restaurants } from '../data/mockData.js'
import { useAppStore } from '../stores/app.js'
const app=useAppStore()
const activeCat=ref('all')
const cats=[
  {t:'Maquis', d:'Restaurants ivoiriens traditionnels, souvent en plein air : kedjenou, sauce feuille, sauce graine.', img:'/thumbs/thumb-0.png'},
  {t:'Grillades / Rôtisserie', d:"Poulet braisé, poisson grillé et brochettes, en kiosque ou à l'allocodrome.", img:'/thumbs/thumb-1.png'},
  {t:'Attiéké & Aloco', d:'Spécialités de manioc râpé et de banane plantain, incontournables de la street-food ivoirienne.', img:'/thumbs/thumb-2.png'},
  {t:'Cuisine africaine (autre)', d:"Les saveurs d'Afrique de l'Ouest hors Côte d'Ivoire : cuisines sénégalaise, ghanéenne et autres.", img:'/thumbs/thumb-3.png'},
  {t:'Cuisine libanaise', d:'Mezzés, chawarmas, grillades et spécialités libanaises à découvrir à Abidjan.', img:'/thumbs/thumb-4.png'},
  {t:'Fast-food', d:'Burgers, sandwichs et poulet frit des enseignes locales et internationales.', img:'/thumbs/thumb-5.png'},
  {t:'Pizza / Italien', d:'Pizzas, pâtes et spécialités italiennes, à partager ou à savourer en solo.', img:'/thumbs/thumb-6.png'},
  {t:'Fruits de mer', d:'Poissons, crevettes, langouste et spécialités marines, notamment côté lagune.', img:'/thumbs/thumb-7.png'},
  {t:'Cuisine française / européenne', d:'Bistrots, brasseries et plats des cuisines française et européenne.', img:'/thumbs/thumb-8.png'},
  {t:'Pâtisserie / Snacks / Café', d:'Viennoiseries, gâteaux, snacks et boissons chaudes pour toutes les pauses.', img:'/thumbs/thumb-9.png'},
]
const banners=[
  {cls:'yellow', kicker:'POUR LES GRANDES FAIMS', title:'Un burger.<br>Et du bonheur.', img:'/thumbs/banner-exact-0.png', to:'/accueil'},
  {cls:'black', kicker:'LE GOÛT DE CHEZ NOUS', title:'Attiéké & poisson.<br>Tout simplement<br>bon.', img:'/thumbs/banner-exact-1.png', to:'/accueil'},
  {cls:'red', kicker:'LES CLASSIQUES QU\'ON AIME', title:'Nos plats en sauce.<br>Du goût<br>à partager.', img:'/thumbs/banner-exact-2.png', to:'/accueil'},
]
const sort=ref('recommande'); const open=ref(false); const sortRef=ref(null)
const opts=[{v:'recommande', l:'Recommandés'}, {v:'note', l:'Les mieux notés'}, {v:'rapide', l:'Plus rapides'}, {v:'gratuit', l:'Livraison gratuite'}]
const sortLabel=computed(()=> opts.find(o=>o.v===sort.value)?.l || 'Recommandés')
const list=computed(()=> { if(sort.value==='recommande') return []; let l=[...restaurants]; if(sort.value==='note') l.sort((a,b)=>b.rating-a.rating); if(sort.value==='rapide') l.sort((a,b)=>parseInt(a.deliveryTime)-parseInt(b.deliveryTime)); if(sort.value==='gratuit') l=l.filter(r=>r.deliveryFree); return l.slice(0,6) })
function onClick(e){ if(sortRef.value && !sortRef.value.contains(e.target)) open.value=false }
onMounted(()=> document.addEventListener('click', onClick)); onUnmounted(()=> document.removeEventListener('click', onClick))
const saveurs=[
  {t:'Plats en sauce', img:'/thumbs/saveur-0.png'},
  {t:'Poisson & crevettes', img:'/thumbs/saveur-1.png'},
  {t:'Attiéké & poisson', img:'/thumbs/saveur-2.png'},
  {t:'Riz & poisson', img:'/thumbs/saveur-3.png'},
  {t:'Burgers généreux', img:'/thumbs/saveur2-0.png'},
  {t:'Pizzas gourmandes', img:'/thumbs/saveur2-1.png'},
  {t:'Poulet croustillant', img:'/thumbs/saveur2-2.png'},
  {t:'Croques dorés', img:'/thumbs/saveur2-3.png'},
]
const strips=[
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=300&q=80&auto=format&fit=crop',
]
function install(){ alert('Installer TonMenu : menu navigateur → Installer l’app') }
</script>

<style scoped>
.vitrine{ background:#fff; }
.hero{ background:#0A0A0A; color:#fff; overflow:hidden; }
.hero-inner{ max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; min-height:560px; }
.hero-left{ padding:48px 24px 18px; display:flex; flex-direction:column; justify-content:center; background:#0A0A0A; }
.eyebrow{ color:#FACC15; font-size:10px; font-style:italic; }
.hero-left h1{ font-size:52px; line-height:.95; font-weight:900; margin:10px 0; letter-spacing:-1px; }
.desc{ color:#A1A1AA; font-size:11px; line-height:1.4; margin:0; }
.sub{ font-size:11px; margin:6px 0 12px; }
.sub b{ color:#FACC15; }
.btn-hero{ display:inline-flex; gap:6px; align-items:center; background:#EC3D2E; color:#fff; padding:11px 16px; border-radius:999px; font-size:11px; font-weight:700; text-decoration:none; width:fit-content; }
.hero-foot{ margin-top:14px; border-top:1px solid #1F1F1F; padding-top:8px; display:flex; justify-content:space-between; font-size:9px; color:#71717A; }
.hero-right{ position:relative; background:#111; overflow:hidden; }
.hero-right img{ width:100%; height:100%; object-fit:cover; }
.section{ max-width:1280px; margin:0 auto; padding:36px 24px; }
.section.beige{ background:#FAF8F3; max-width:none; padding-left:max(24px, calc((100vw - 1280px)/2 + 24px)); padding-right:max(24px, calc((100vw - 1280px)/2 + 24px)); }
.kicker{ color:#EC3D2E; font-size:7.5px; letter-spacing:1.4px; font-weight:800; display:block; text-align:center; }
.section h2{ text-align:center; font-size:24px; font-weight:800; margin:6px 0 4px; }
.sub{ text-align:center; color:#71717A; font-size:11px; }
.cat-bar{ display:flex; justify-content:space-between; align-items:center; margin:14px 0; flex-wrap:wrap; gap:8px; }
.pill{ display:inline-flex; gap:6px; align-items:center; background:#EC3D2E; color:#fff; border:none; padding:8px 12px; border-radius:999px; font-size:11px; font-weight:700; cursor:pointer; }
.pill em{ background:#fff; color:#EC3D2E; font-style:normal; min-width:16px; height:16px; border-radius:50%; display:grid; place-items:center; font-size:9px; }
.pill.on{ background:#111; }
.hint{ font-size:10px; color:#A1A1AA; }
.cat-grid{ display:grid; grid-template-columns:repeat(5,1fr); gap:14px; }
.cat{ background:#FFFBF0; border:1px solid #F0E6D0; border-radius:12px; padding:14px 10px; text-align:center; cursor:pointer; }
.cat.on{ outline:2px solid #EC3D2E; outline-offset:2px; }
.thumb{ width:78px; height:78px; border-radius:50%; margin:0 auto 8px; overflow:hidden; background:#fff; border:2px solid #fff; box-shadow:0 1px 6px rgba(0,0,0,.06); display:grid; place-items:center; }
.thumb img{ width:100%; height:100%; object-fit:cover; }
.cat h3{ font-size:11px; font-weight:800; margin:4px 0; }
.cat p{ font-size:9px; color:#71717A; line-height:1.3; min-height:42px; }
.count{ display:inline-block; margin-top:6px; background:#F3EFE6; color:#78716C; font-size:9px; padding:4px 8px; border-radius:999px; }
.banners{ max-width:1280px; margin:0 auto; padding:0 24px 36px; display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
.bn{ border-radius:12px; overflow:hidden; position:relative; min-height:170px; display:block; text-decoration:none; }
.bn img{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
.bn-overlay{ position:absolute; inset:0; width:52%; padding:16px; display:flex; flex-direction:column; justify-content:center; }
.bn-overlay.yellow{ background:#FFD600; color:#111; }
.bn-overlay.black{ background:#111; color:#fff; }
.bn-overlay.red{ background:#EC3D2E; color:#fff; }
.bn-overlay small{ font-size:7px; letter-spacing:.6px; opacity:.7; }
.bn-overlay h3{ font-size:15px; font-weight:800; line-height:1.1; margin:6px 0 8px; }
.bn-overlay span{ font-size:10px; font-weight:700; text-decoration:underline; }
.bar{ display:flex; justify-content:space-between; align-items:center; margin:14px 0; flex-wrap:wrap; gap:8px; }
.pill-light{ display:inline-flex; gap:6px; align-items:center; background:#fff; border:1px solid #E5E7EB; padding:8px 12px; border-radius:999px; font-size:11px; font-weight:700; }
.pill-light em{ background:#F3EFE6; width:16px; height:16px; border-radius:50%; display:grid; place-items:center; font-size:9px; font-style:normal; }
.sort{ position:relative; }
.sort button{ display:inline-flex; gap:6px; align-items:center; background:#fff; border:1px solid #E5E7EB; padding:8px 12px; border-radius:999px; font-size:11px; font-weight:600; cursor:pointer; }
.menu{ position:absolute; right:0; top:36px; background:#fff; border:1px solid #E5E7EB; border-radius:10px; box-shadow:0 8px 20px rgba(0,0,0,.08); padding:6px; min-width:160px; display:flex; flex-direction:column; z-index:10; }
.menu button{ text-align:left; padding:8px 10px; border:none; background:none; border-radius:6px; font-size:11px; cursor:pointer; }
.menu button.on{ background:#FEF3C7; }
.resto-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
.empty{ display:grid; grid-template-columns:300px 1fr; gap:24px; background:#fff; border:1px dashed #E7E0C8; border-radius:14px; padding:20px; align-items:center; }
.empty-img{ position:relative; }
.empty-img img{ width:100%; height:190px; object-fit:cover; border-radius:60% 60% 12px 12px / 40% 40% 20% 20%; }
.empty-img span{ position:absolute; top:8px; right:6px; background:#FFD600; color:#111; font-size:9px; font-weight:800; width:62px; height:62px; border-radius:50%; display:grid; place-items:center; text-align:center; transform:rotate(7deg); }
.empty-txt small{ color:#EC3D2E; font-size:7px; letter-spacing:.8px; font-weight:800; }
.empty-txt h3{ font-size:18px; font-weight:800; margin:4px 0; }
.empty-txt p{ color:#78716C; font-size:11px; line-height:1.4; }
.btn{ display:inline-flex; gap:6px; align-items:center; background:#EC3D2E; color:#fff; padding:10px 16px; border-radius:999px; font-size:11px; font-weight:700; text-decoration:none; width:fit-content; }
.grid8{ display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:14px; }
.s-card{ background:none; border:none; text-align:center; text-decoration:none; color:inherit; }
.s-img{ background:#FAF6F0; border-radius:10px; padding:6px; height:170px; display:grid; place-items:center; }
.s-img img{ width:100%; height:158px; object-fit:cover; border-radius:8px; }
.s-card small{ color:#A1A1AA; font-size:9px; margin-top:6px; display:block; }
.s-card h4{ font-size:11px; font-weight:800; margin:3px 0; color:#111; }
.s-card span{ font-size:10px; color:#EC3D2E; font-weight:600; }
.legal{ text-align:center; font-size:9px; color:#A1A1AA; margin-top:10px; }
.yellow{ background:#FFD600; padding:10px 24px; display:flex; justify-content:space-evenly; align-items:center; font-size:9px; font-weight:800; letter-spacing:.5px; }
.duo{ display:grid; grid-template-columns:1fr 1fr; gap:28px; align-items:center; }
.duo-img{ position:relative; }
.duo-img .big{ width:100%; height:310px; object-fit:cover; border-radius:12px; }
.duo-img .mini{ position:absolute; bottom:-12px; left:-12px; width:110px; height:130px; object-fit:cover; border-radius:8px; border:3px solid #fff; box-shadow:0 6px 16px rgba(0,0,0,.12); }
.badge{ position:absolute; bottom:18%; right:-10px; background:#FFD600; color:#111; padding:8px 12px; border-radius:4px; font-size:10px; font-weight:700; transform:rotate(3deg); }
.duo-txt small{ color:#EC3D2E; font-size:7px; letter-spacing:.8px; font-weight:800; }
.duo-txt h2{ font-size:22px; font-weight:800; margin:6px 0; line-height:1.1; }
.duo-txt p{ color:#71717A; font-size:11px; line-height:1.4; }
.feats{ display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:24px; text-align:center; }
.feats h5{ font-size:10px; font-weight:800; margin:6px 0; }
.feats p{ font-size:9px; color:#78716C; }
.feats i{ font-size:18px; color:#EC3D2E; }
.app{ background:#C41212; color:#fff; padding:36px 24px; overflow:hidden; }
.app-inner{ max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:center; }
.app-txt small{ color:#FFD600; font-size:7px; letter-spacing:.8px; font-weight:800; }
.app-txt h2{ font-size:26px; font-weight:800; line-height:1.05; margin:6px 0; }
.app-txt h2 span{ color:#FFD600; }
.app-txt p{ font-size:11px; color:#FECACA; }
.dark{ display:inline-flex; gap:6px; align-items:center; background:#111; color:#fff; border:none; padding:10px 14px; border-radius:999px; font-weight:700; font-size:11px; margin-top:8px; cursor:pointer; }
.pwa{ display:block; margin-top:6px; font-size:8px; opacity:.7; }
.app-visual{ position:relative; height:360px; }
.phone{ position:absolute; right:80px; top:0; width:210px; height:350px; background:#fff; border-radius:28px; overflow:hidden; border:5px solid #111; box-shadow:0 12px 28px rgba(0,0,0,.3); }
.ph-head{ text-align:center; padding:8px; font-weight:800; color:#EC3D2E; font-size:11px; }
.phone img{ width:100%; height:200px; object-fit:cover; }
.ph-foot{ background:#EC3D2E; color:#fff; text-align:center; padding:7px; font-size:8px; font-weight:800; }
.phone2{ position:absolute; right:0; top:28px; width:170px; height:270px; border-radius:22px; overflow:hidden; transform:rotate(7deg); box-shadow:0 8px 20px rgba(0,0,0,.3); }
.phone2 img{ width:100%; height:100%; object-fit:cover; }
.blob{ position:absolute; left:10%; top:8%; width:80px; height:80px; background:#FFD600; color:#111; border-radius:50%; display:grid; place-items:center; text-align:center; font-size:9px; line-height:1.1; transform:rotate(-7deg); }
.partner-head{ display:flex; justify-content:space-between; align-items:center; gap:16px; }
.partner-head small{ color:#EC3D2E; font-size:7px; letter-spacing:.8px; font-weight:800; }
.partner-head h2{ font-size:20px; font-weight:800; margin:4px 0; }
.partner-head p{ font-size:11px; color:#78716C; }
.strip{ display:grid; grid-template-columns:repeat(8,1fr); gap:6px; margin-top:16px; }
.strip img{ width:100%; height:84px; object-fit:cover; border-radius:4px; }
@media(max-width:1024px){ .hero-inner{ grid-template-columns:1fr; } .hero-right{ height:320px; } .cat-grid{ grid-template-columns:repeat(3,1fr); } .banners{ grid-template-columns:1fr; } .grid8{ grid-template-columns:repeat(3,1fr); } .duo{ grid-template-columns:1fr; } .app-inner{ grid-template-columns:1fr; } .strip{ grid-template-columns:repeat(4,1fr); } .resto-grid{ grid-template-columns:1fr 1fr; } }
@media(max-width:640px){
  .hero-left{ padding:24px 16px 16px; } .hero-left h1{ font-size:34px; }
  .section{ padding:28px 16px; } .cat-grid{ grid-template-columns:repeat(2,1fr); }
  .banners{ padding:0 16px 28px; } .empty{ grid-template-columns:1fr; }
  .grid8{ grid-template-columns:repeat(2,1fr); } .feats{ grid-template-columns:repeat(2,1fr); }
  .yellow{ flex-wrap:wrap; gap:6px; justify-content:center; }
  .duo-img .mini{ display:none; } .app-visual{ height:300px; } .phone{ right:50%; transform:translateX(50%); } .phone2{ display:none; }
  .partner-head{ flex-direction:column; text-align:center; } .resto-grid{ grid-template-columns:1fr; }
}
</style>
