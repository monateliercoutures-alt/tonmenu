<template>
  <div class="vitrine">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-text">
          <div class="hero-eyebrow">Chaud. Généreux. Tout simplement bon.</div>
          <h1>Le vrai goût<br><span>de chez nous.</span></h1>
          <p class="hero-desc">De l'alloco doré à la bonne braise du quartier,<br>vos envies ont trouvé leur adresse.</p>
          <p class="hero-sub">Les cuisines d'Abidjan. <b>À votre porte.</b></p>
          <router-link to="/accueil" class="btn-hero">Découvrir les restaurants <ArrowRight :size="14"/></router-link>
          <div class="hero-foot">100 % restauration locale <span>Yopougon, en livraison chez vous.</span></div>
        </div>
        <div class="hero-media">
          <img src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900&q=80&auto=format&fit=crop" alt="Poulet braisé" />
          <div class="sticker">FAIT POUR<br><b>les bons<br>appétits.</b><small>TONMENU — ABIDJAN</small></div>
        </div>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="section">
      <div class="section-head">
        <span class="eyebrow">CHAQUE ENVIE A SON MENU</span>
        <h2>Qu'est-ce qui vous fait envie ?</h2>
      </div>
      <div class="cats-head">
        <button class="pill-red"><Utensils :size="14"/> Toutes les cuisines <span class="count">0</span></button>
        <span class="count-label">10 catégories de restauration</span>
      </div>
      <div class="cat-grid">
        <div v-for="c in cuisines" :key="c.title" class="cat-card">
          <div class="cat-img"><img :src="c.img" :alt="c.title" v-if="c.img"/><span v-else class="cat-icon"><component :is="c.icon" :size="22"/></span></div>
          <h3>{{ c.title }}</h3>
          <p>{{ c.desc }}</p>
          <span class="cat-count">0 restaurants</span>
        </div>
      </div>
    </section>

    <!-- 3 BANNERS -->
    <section class="banners">
      <div class="banner yellow">
        <div class="b-text"><small>POUR LES GRANDES FAIMS</small><h3>Un burger.<br>Et du bonheur.</h3><a>Explorer <ArrowUpRight :size="12"/></a></div>
        <img src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=500&q=80&auto=format&fit=crop" />
      </div>
      <div class="banner black">
        <div class="b-text"><small>LE GOÛT DE CHEZ NOUS</small><h3>Attiéké & poisson.<br>Tout simplement<br>bon.</h3><a>Explorer <ArrowUpRight :size="12"/></a></div>
        <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80&auto=format&fit=crop" />
        <span class="badge-float">ÇA SENT<br>BON !</span>
      </div>
      <div class="banner red">
        <div class="b-text"><small>LES CLASSIQUES QU'ON AIME</small><h3>Nos plats en sauce.<br>Du goût<br>à partager.</h3><a>Explorer <ArrowUpRight :size="12"/></a></div>
        <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80&auto=format&fit=crop" />
      </div>
    </section>

    <!-- PROCHAINES DECOUVERTES -->
    <section class="section beige">
      <div class="section-head">
        <span class="eyebrow">LES BONNES ADRESSES DU QUARTIER</span>
        <h2>Vos prochaines découvertes</h2>
        <p class="sub">De vraies cuisines, tout près de chez vous.</p>
      </div>
      <div class="discover-head">
        <span class="pill-light">Tous les restaurants <span>0</span></span>
        <button class="sort">⟡ Recommandés ▾</button>
      </div>
      <div class="discover-card">
        <div class="discover-img">
          <img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80&auto=format&fit=crop" />
          <span class="soon">BIENTÔT<br>À TABLE !</span>
        </div>
        <div class="discover-text">
          <small>LES PREMIERS PARTENAIRES ARRIVENT</small>
          <h3>Le quartier se met à table.</h3>
          <p>Nous préparons les premières bonnes adresses de Yopougon.<br>Vous avez un restaurant ? Faites découvrir votre cuisine.</p>
          <router-link to="/pro" class="btn-red">Inscrire mon restaurant <ArrowUpRight :size="14"/></router-link>
        </div>
      </div>
    </section>

    <!-- SAVEURS -->
    <section class="section">
      <div class="section-head">
        <span class="eyebrow">LA GOURMANDISE PARLE TOUTES LES LANGUES</span>
        <h2>Les saveurs qu'on aime</h2>
        <p class="sub">Des inspirations à retrouver selon les menus de nos partenaires.</p>
      </div>
      <div class="saveurs-grid">
        <div v-for="s in saveurs" :key="s.title" class="saveur">
          <div class="saveur-img"><img :src="s.img" :alt="s.title"/></div>
          <small>Cuisine locale</small>
          <h4>{{ s.title }}</h4>
          <a>Explorer les restaurants <ArrowRight :size="12"/></a>
        </div>
      </div>
      <p class="legal">Photos d'inspiration. Les plats disponibles sont ceux des menus partenaires. Les marques visibles ne constituent pas une affiliation.</p>
    </section>

    <!-- YELLOW BAR -->
    <div class="yellow-bar">
      <span>DU GOÛT, PAS DE COMPLICATIONS</span> <span class="star">✳</span>
      <span>UN QUARTIER À LA FOIS</span> <span class="star">✳</span>
      <span>LES VRAIES SAVEURS D'ABIDJAN</span> <span class="star">✳</span>
    </div>

    <!-- BONNES CUISINES -->
    <section class="section">
      <div class="quartier">
        <div class="q-media">
          <img class="main" src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=80&auto=format&fit=crop" />
          <img class="mini" src="https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=300&q=80&auto=format&fit=crop" />
          <div class="q-badge">ICI, ON AIME<br><b>bien manger.</b></div>
        </div>
        <div class="q-text">
          <small>BIENVENUE CHEZ TONMENU</small>
          <h2>Les bonnes cuisines<br>font les bons quartiers.</h2>
          <p>Une braise qui crépite, une recette qu'on se transmet, une adresse qu'on recommande aux amis. C'est cette cuisine-là qu'on veut rapprocher de vous.</p>
          <p>TonMenu commence à Yopougon, avec une idée simple : donner aux restaurants d'ici une place dans votre quotidien. Rien que de la restauration. Et beaucoup de gourmandise.</p>
          <router-link to="/accueil" class="btn-red">Trouver ma prochaine adresse <ArrowRight :size="14"/></router-link>
        </div>
      </div>
      <div class="features">
        <div><span class="f-icon">🏪</span><h5>Une cuisine qui vous plaît</h5><p>Découvrez les restaurants<br>et leurs spécialités.</p></div>
        <div><span class="f-icon">🍲</span><h5>Un menu à votre goût</h5><p>Choisissez vos plats<br>et composez votre panier.</p></div>
        <div><span class="f-icon">💳</span><h5>Vos habitudes de paiement</h5><p>Choisissez votre opérateur.<br>Mobile Money simple pour le moment.</p></div>
        <div><span class="f-icon">🚲</span><h5>Le quartier à votre porte</h5><p>Consultez le statut de préparation<br>depuis votre commande.</p></div>
      </div>
    </section>

    <!-- APP PHONE -->
    <section class="app-section">
      <div class="app-inner">
        <div class="app-text">
          <small>L'APPÉTIT N'ATTEND PAS.</small>
          <h2>Votre quartier.<br>Votre menu.<br><span>Dans votre poche.</span></h2>
          <p>Gardez TonMenu sur votre écran d'accueil.<br>Pas de téléchargement dans un store, juste un clic.</p>
          <button class="btn-dark"><Download :size="14"/> Installer TonMenu</button>
          <small class="pwa">PWA · Android, iPhone et ordinateur</small>
        </div>
        <div class="app-media">
          <div class="phone">
            <div class="phone-head">TonMenu.</div>
            <img src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&q=80&auto=format&fit=crop" />
            <div class="phone-foot">BON APPÉTIT, LE QUARTIER.</div>
          </div>
          <div class="phone-behind">
            <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80&auto=format&fit=crop" />
          </div>
          <div class="app-badge">TOUJOURS<br><b>à portée<br>de main.</b></div>
        </div>
      </div>
    </section>

    <!-- PARTNER -->
    <section class="partner">
      <div class="partner-inner">
        <div>
          <small>VOTRE TALENT MÉRITE D'ÊTRE DÉCOUVERT</small>
          <h2>Vous cuisinez. Le quartier se régale.</h2>
          <p>Un menu en ligne, des commandes et votre propre QR code.<br>Rejoignez TonMenu, simplement.</p>
        </div>
        <router-link to="/pro" class="btn-red">Devenir partenaire <ArrowUpRight :size="14"/></router-link>
      </div>
      <div class="partner-strip">
        <img v-for="i in 8" :key="i" :src="partnerImgs[i-1]" />
      </div>
    </section>

  </div>
</template>

<script setup>
import { ArrowRight, ArrowUpRight, Utensils, Download } from 'lucide-vue-next'
import { Store, ChefHat, Sandwich } from 'lucide-vue-next'

const cuisines = [
  { title:'Maquis', desc:"Restaurants ivoiriens traditionnels, souvent en plein air : kedjenou, sauce feuille, sauce graine.", img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80&auto=format&fit=crop' },
  { title:'Grillades / Rôtisserie', desc:"Poulet braisé, poisson grillé et brochettes, en kiosque ou à l'allocodrome.", img:'https://images.unsplash.com/photo-1529193591184-b1d58069c7bb?w=300&q=80&auto=format&fit=crop' },
  { title:'Attiéké & Aloco', desc:"Spécialités de manioc râpé et de banane plantain, incontournables de la street-food ivoirienne.", img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80&auto=format&fit=crop' },
  { title:'Cuisine africaine (autre)', desc:"Les saveurs d'Afrique de l'Ouest hors Côte d'Ivoire : cuisines sénégalaise, ghanéenne et autres.", img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80&auto=format&fit=crop' },
  { title:'Cuisine libanaise', desc:"Mezzés, chawarmas, grillades et spécialités libanaises à découvrir à Abidjan.", img:null, icon: Sandwich },
  { title:'Fast-food', desc:"Burgers, sandwichs et poulet frit des enseignes locales et internationales.", img:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=300&q=80&auto=format&fit=crop' },
  { title:'Pizza / Italien', desc:"Pizzas, pâtes et spécialités italiennes, à partager ou à savourer en solo.", img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80&auto=format&fit=crop' },
  { title:'Fruits de mer', desc:"Poissons, crevettes, langouste et spécialités marines, notamment côté lagune.", img:'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=300&q=80&auto=format&fit=crop' },
  { title:'Cuisine française / européenne', desc:"Bistrots, brasseries et plats des cuisines française et européenne.", img:null, icon: ChefHat },
  { title:'Pâtisserie / Snacks / Café', desc:"Viennoiseries, gâteaux, snacks et boissons chaudes pour toutes les pauses.", img:'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&q=80&auto=format&fit=crop' },
]

const saveurs = [
  { title:'Plats en sauce', img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80&auto=format&fit=crop' },
  { title:'Poisson & crevettes', img:'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=400&q=80&auto=format&fit=crop' },
  { title:'Attiéké & poisson', img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80&auto=format&fit=crop' },
  { title:'Riz & poisson', img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80&auto=format&fit=crop' },
  { title:'Burgers généreux', img:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=400&q=80&auto=format&fit=crop' },
  { title:'Pizzas gourmandes', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&auto=format&fit=crop' },
  { title:'Poulet croustillant', img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80&auto=format&fit=crop' },
  { title:'Croques dorés', img:'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400&q=80&auto=format&fit=crop' },
]

const partnerImgs = [
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=300&q=80&auto=format&fit=crop',
]
</script>

<style scoped>
.vitrine{ background:#fff; }
/* HERO */
.hero{ background:#0f0f0f; color:#fff; overflow:hidden; }
.hero-inner{ max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; min-height:520px; }
.hero-text{ padding:48px 32px 36px 24px; display:flex; flex-direction:column; justify-content:center; background:linear-gradient(180deg, #111 0%, #0f0f0f 100%); position:relative; }
.hero-eyebrow{ color:#FACC15; font-size:12px; font-style:italic; margin-bottom:14px; }
.hero-text h1{ font-size:48px; line-height:1; font-weight:900; margin:0; }
.hero-text h1 span{ font-weight:900; }
.hero-desc{ color:#bbb; font-size:13px; margin:14px 0 8px; line-height:1.4; }
.hero-sub{ font-size:13px; margin:0 0 16px; }
.hero-sub b{ color:#FACC15; }
.btn-hero{ display:inline-flex; align-items:center; gap:8px; background:#ec3d2e; color:#fff; padding:12px 18px; border-radius:999px; text-decoration:none; font-weight:700; font-size:13px; width:fit-content; }
.hero-foot{ margin-top:18px; font-size:10px; color:#777; display:flex; justify-content:space-between; border-top:1px solid #222; padding-top:10px; }
.hero-media{ position:relative; background:#111; }
.hero-media img{ width:100%; height:100%; object-fit:cover; display:block; }
.sticker{ position:absolute; top:18%; left: -14px; width:96px; height:96px; background:#FFD600; color:#111; border-radius:50%; display:grid; place-items:center; text-align:center; font-size:11px; line-height:1.1; font-weight:700; transform:rotate(-8deg); box-shadow:0 4px 16px rgba(0,0,0,.3); }
.sticker b{ font-size:13px; }
.sticker small{ font-size:7px; letter-spacing:.6px; margin-top:4px; }

/* SECTIONS */
.section{ max-width:1280px; margin:0 auto; padding:40px 20px; }
.section.beige{ background:#FAF8F5; max-width:none; padding-left: max(20px, calc((100vw - 1280px)/2 + 20px)); padding-right: max(20px, calc((100vw - 1280px)/2 + 20px)); }
.section-head{ text-align:center; margin-bottom:18px; }
.eyebrow{ color:#ec3d2e; font-size:9px; letter-spacing:1.2px; font-weight:700; }
.section-head h2{ font-size:26px; font-weight:800; margin:6px 0 4px; }
.sub{ color:#777; font-size:13px; }
.cats-head{ display:flex; justify-content:space-between; align-items:center; margin:16px 0; }
.pill-red{ display:inline-flex; align-items:center; gap:6px; background:#ec3d2e; color:#fff; border:none; padding:8px 14px; border-radius:999px; font-weight:700; font-size:12px; }
.pill-red .count{ background:#fff; color:#ec3d2e; width:16px; height:16px; border-radius:50%; display:grid; place-items:center; font-size:10px; }
.count-label{ font-size:11px; color:#999; }
.cat-grid{ display:grid; grid-template-columns: repeat(5, 1fr); gap:14px; }
.cat-card{ background:#FFFBF5; border:1px solid #F0E6D6; border-radius:14px; padding:16px 12px; text-align:center; }
.cat-img{ width:84px; height:84px; border-radius:50%; margin:0 auto 10px; overflow:hidden; background:#fff; border:3px solid #fff; box-shadow:0 2px 10px rgba(0,0,0,.06); display:grid; place-items:center; }
.cat-img img{ width:100%; height:100%; object-fit:cover; }
.cat-icon{ color:#8A9A7B; }
.cat-card h3{ font-size:12px; font-weight:800; margin:6px 0; }
.cat-card p{ font-size:11px; color:#777; line-height:1.4; min-height:52px; }
.cat-count{ display:inline-block; margin-top:8px; background:#F5EFE6; color:#777; font-size:10px; padding:4px 8px; border-radius:999px; }

/* BANNERS */
.banners{ max-width:1280px; margin:0 auto; padding:0 20px 40px; display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; }
.banner{ border-radius:14px; overflow:hidden; display:grid; grid-template-columns:1fr 1fr; position:relative; min-height:160px; }
.banner img{ width:100%; height:100%; object-fit:cover; }
.banner.yellow{ background:#FFD600; color:#111; }
.banner.black{ background:#111; color:#fff; }
.banner.red{ background:#ec3d2e; color:#fff; }
.b-text{ padding:18px; display:flex; flex-direction:column; justify-content:center; }
.b-text small{ font-size:9px; letter-spacing:.6px; opacity:.7; }
.b-text h3{ font-size:18px; font-weight:800; line-height:1.1; margin:6px 0 10px; }
.b-text a{ font-size:11px; font-weight:700; text-decoration:underline; text-underline-offset:3px; display:inline-flex; gap:4px; align-items:center; }
.badge-float{ position:absolute; right:36%; top:12%; background:#FFD600; color:#111; font-size:10px; font-weight:800; width:56px; height:56px; border-radius:50%; display:grid; place-items:center; text-align:center; transform:rotate(8deg); }

/* DISCOVER */
.discover-head{ display:flex; justify-content:space-between; align-items:center; margin:16px 0; }
.pill-light{ display:inline-flex; gap:6px; align-items:center; background:#fff; border:1px solid #e5e5e5; padding:8px 12px; border-radius:999px; font-weight:700; font-size:12px; }
.pill-light span{ background:#F5EFE6; width:16px; height:16px; border-radius:50%; display:grid; place-items:center; font-size:10px; }
.sort{ background:#fff; border:1px solid #e5e5e5; padding:8px 12px; border-radius:999px; font-size:12px; }
.discover-card{ display:grid; grid-template-columns:280px 1fr; gap:24px; background:#fff; border:1px dashed #e5dcc8; border-radius:16px; padding:20px; align-items:center; }
.discover-img{ position:relative; }
.discover-img img{ width:100%; height:200px; object-fit:cover; border-radius:50% 50% 12px 12px / 60% 60% 20% 20%; }
.soon{ position:absolute; top:8px; right:8px; background:#FFD600; color:#111; font-size:10px; font-weight:800; width:64px; height:64px; border-radius:50%; display:grid; place-items:center; text-align:center; transform:rotate(8deg); }
.discover-text small{ color:#ec3d2e; font-size:9px; letter-spacing:.8px; font-weight:700; }
.discover-text h3{ font-size:20px; font-weight:800; margin:6px 0; }
.discover-text p{ color:#777; font-size:13px; line-height:1.4; }
.btn-red{ display:inline-flex; align-items:center; gap:6px; background:#ec3d2e; color:#fff; padding:10px 16px; border-radius:999px; font-weight:700; font-size:13px; text-decoration:none; border:none; margin-top:10px; }

/* SAVEURS */
.saveurs-grid{ display:grid; grid-template-columns: repeat(4, 1fr); gap:16px; margin-top:16px; }
.saveur{ text-align:center; }
.saveur-img{ background:#FAF6F0; border-radius:14px; padding:8px; height:180px; display:grid; place-items:center; overflow:hidden; }
.saveur-img img{ width:100%; height:160px; object-fit:cover; border-radius:10px; }
.saveur small{ color:#999; font-size:10px; margin-top:8px; display:block; }
.saveur h4{ font-size:13px; font-weight:800; margin:4px 0; }
.saveur a{ font-size:11px; color:#ec3d2e; text-decoration:none; font-weight:600; display:inline-flex; gap:4px; align-items:center; }
.legal{ text-align:center; font-size:10px; color:#999; margin-top:16px; }

/* YELLOW BAR */
.yellow-bar{ background:#FFD600; padding:12px 20px; display:flex; justify-content:space-evenly; align-items:center; font-size:10px; font-weight:700; letter-spacing:.6px; }
.star{ font-size:12px; }

/* QUARTIER */
.quartier{ display:grid; grid-template-columns:1fr 1fr; gap:32px; align-items:center; margin-top:10px; }
.q-media{ position:relative; }
.q-media .main{ width:100%; height:320px; object-fit:cover; border-radius:14px; }
.q-media .mini{ position:absolute; bottom:-14px; left:-14px; width:120px; height:140px; object-fit:cover; border-radius:10px; border:4px solid #fff; box-shadow:0 6px 18px rgba(0,0,0,.12); }
.q-badge{ position:absolute; bottom:20%; right:-10px; background:#FFD600; color:#111; padding:10px 14px; border-radius:4px; font-size:11px; font-weight:700; transform:rotate(4deg); }
.q-text small{ color:#ec3d2e; font-size:9px; letter-spacing:.8px; font-weight:700; }
.q-text h2{ font-size:24px; font-weight:800; margin:6px 0; }
.q-text p{ color:#666; font-size:13px; line-height:1.5; }
.features{ display:grid; grid-template-columns: repeat(4, 1fr); gap:16px; margin-top:28px; text-align:center; }
.features h5{ font-size:12px; font-weight:800; margin:6px 0; }
.features p{ font-size:11px; color:#777; }
.f-icon{ font-size:22px; color:#ec3d2e; }

/* APP SECTION */
.app-section{ background:#c41212; color:#fff; padding:40px 20px; overflow:hidden; }
.app-inner{ max-width:1280px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:center; }
.app-text small{ color:#FFD600; font-size:9px; letter-spacing:.8px; font-weight:700; }
.app-text h2{ font-size:28px; font-weight:800; line-height:1.1; margin:8px 0; }
.app-text h2 span{ color:#FFD600; }
.app-text p{ font-size:13px; color:#ffcccc; }
.btn-dark{ display:inline-flex; align-items:center; gap:6px; background:#111; color:#fff; border:none; padding:10px 16px; border-radius:999px; font-weight:700; font-size:12px; margin-top:10px; }
.pwa{ display:block; margin-top:8px; font-size:9px; opacity:.7; }
.app-media{ position:relative; height:360px; }
.phone{ position:absolute; right:80px; top:0; width:220px; height:360px; background:#fff; border-radius:32px; overflow:hidden; border:6px solid #111; box-shadow:0 12px 32px rgba(0,0,0,.3); z-index:2; }
.phone-head{ text-align:center; padding:10px; font-weight:800; color:#ec3d2e; font-size:14px; }
.phone img{ width:100%; height:200px; object-fit:cover; }
.phone-foot{ background:#ec3d2e; color:#fff; text-align:center; padding:8px; font-size:9px; font-weight:700; }
.phone-behind{ position:absolute; right:0; top:30px; width:180px; height:280px; border-radius:24px; overflow:hidden; transform:rotate(8deg); box-shadow:0 10px 24px rgba(0,0,0,.3); }
.phone-behind img{ width:100%; height:100%; object-fit:cover; }
.app-badge{ position:absolute; left:10%; top:10%; width:84px; height:84px; background:#FFD600; color:#111; border-radius:50%; display:grid; place-items:center; text-align:center; font-size:10px; line-height:1.1; transform:rotate(-8deg); }

/* PARTNER */
.partner{ max-width:1280px; margin:0 auto; padding:40px 20px; }
.partner-inner{ display:flex; justify-content:space-between; align-items:center; gap:16px; }
.partner-inner small{ color:#ec3d2e; font-size:9px; letter-spacing:.8px; font-weight:700; }
.partner-inner h2{ font-size:22px; font-weight:800; margin:6px 0; }
.partner-inner p{ font-size:13px; color:#777; }
.partner-strip{ display:grid; grid-template-columns: repeat(8, 1fr); gap:6px; margin-top:20px; }
.partner-strip img{ width:100%; height:90px; object-fit:cover; border-radius:4px; }

/* RESPONSIVE */
@media(max-width:1024px){
  .hero-inner{ grid-template-columns:1fr; min-height:auto; }
  .hero-media{ height:340px; }
  .cat-grid{ grid-template-columns: repeat(3, 1fr); }
  .banners{ grid-template-columns:1fr; }
  .saveurs-grid{ grid-template-columns: repeat(3, 1fr); }
  .quartier{ grid-template-columns:1fr; }
  .app-inner{ grid-template-columns:1fr; }
  .partner-strip{ grid-template-columns: repeat(4, 1fr); }
}
@media(max-width:640px){
  .hero-text{ padding:24px 16px; }
  .hero-text h1{ font-size:32px; }
  .section{ padding:28px 16px; }
  .cat-grid{ grid-template-columns: repeat(2, 1fr); }
  .cat-card p{ min-height:auto; }
  .banners{ padding:0 16px 28px; }
  .discover-card{ grid-template-columns:1fr; }
  .saveurs-grid{ grid-template-columns: repeat(2, 1fr); }
  .features{ grid-template-columns: repeat(2, 1fr); }
  .yellow-bar{ flex-wrap:wrap; gap:8px; justify-content:center; font-size:9px; }
  .q-media .mini{ display:none; }
  .app-media{ height:300px; }
  .phone{ right:50%; transform:translateX(50%); width:200px; height:300px; }
  .phone-behind{ display:none; }
  .partner-inner{ flex-direction:column; text-align:center; }
}
</style>
