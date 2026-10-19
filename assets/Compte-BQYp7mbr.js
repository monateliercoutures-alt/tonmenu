import{c as d,_ as h,I as C,u as M,b as v,d as o,t as f,g as t,e as n,f as e,w as l,J as w,h as _,j as x,k as b,B as V,m as k,K as H,U as I,M as L}from"./index-CaSuNSLv.js";import{C as i}from"./chevron-right-D5T8XK-s.js";import{H as S}from"./heart-C0Us00gW.js";/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=d("BellIcon",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=d("CircleHelpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=d("LanguagesIcon",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=d("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=d("TicketIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=d("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),U={class:"page"},K={class:"header-yellow"},O={class:"avatar"},$={class:"name-block"},E={class:"name"},F={class:"sheet"},P={class:"menu"},R={class:"left"},D={class:"left"},J={class:"left"},Q={class:"left"},Z={class:"left"},G={class:"left"},W={class:"left"},X={class:"left"},Y={class:"left"},ss={class:"left"},os={class:"actions"},es={key:0,class:"guest-overlay"},ts={class:"guest-card"},ns={__name:"Compte",setup(ls){const p=C(),y=M(),m=V(),c=p.user||{name:"Kouakou Mark",initials:"KM"},r=b(!1);function g(){p.logout(),r.value=!1,m.push("/accueil")}function z(){m.push("/compte/profil")}return(as,s)=>{const a=x("router-link");return k(),v("div",U,[o("div",K,[s[6]||(s[6]=o("button",{class:"help"},"Aide",-1)),o("div",{class:"profile-row",onClick:z},[o("div",O,f(t(c).initials),1),o("div",$,[o("div",E,[n(f(t(c).name)+" ",1),s[4]||(s[4]=o("span",{class:"badge"},"NOUVEAU",-1))]),s[5]||(s[5]=o("div",{class:"sub"},"Connectez-vous à vos amis",-1))]),e(t(i),{size:18})])]),o("div",F,[s[19]||(s[19]=o("h2",null,"Compte",-1)),o("div",P,[e(a,{to:"/commandes?onglet=historique",class:"row"},{default:l(()=>[o("div",R,[e(t(H),{size:18}),s[7]||(s[7]=n(" Historique des commandes",-1))]),s[8]||(s[8]=o("span",{class:"pill-grey"},"Voir sur Commandes",-1))]),_:1}),e(a,{to:"/compte/profil",class:"row"},{default:l(()=>[o("div",D,[e(t(I),{size:18}),s[9]||(s[9]=n(" Compte",-1))]),e(t(i),{size:16})]),_:1}),e(a,{to:"/compte/adresses",class:"row"},{default:l(()=>[o("div",J,[e(t(L),{size:18}),s[10]||(s[10]=n(" Adresses",-1))]),e(t(i),{size:16})]),_:1}),e(a,{to:"/compte/favoris",class:"row"},{default:l(()=>[o("div",Q,[e(t(S),{size:18}),s[11]||(s[11]=n(" Mes favoris",-1))]),e(t(i),{size:16})]),_:1}),e(a,{to:"/compte/codes-promo",class:"row"},{default:l(()=>[o("div",Z,[e(t(j),{size:18}),s[12]||(s[12]=n(" Codes promo",-1))]),e(t(i),{size:16})]),_:1}),e(a,{to:"/compte/langue",class:"row"},{default:l(()=>[o("div",G,[e(t(q),{size:18}),s[13]||(s[13]=n(" Langue",-1))]),s[14]||(s[14]=o("span",{class:"value"},"Français",-1)),e(t(i),{size:16})]),_:1}),e(a,{to:"/compte/faq",class:"row"},{default:l(()=>[o("div",W,[e(t(B),{size:18}),s[15]||(s[15]=n(" FAQ",-1))]),e(t(i),{size:16})]),_:1}),e(a,{to:"/compte/notifications",class:"row"},{default:l(()=>[o("div",X,[e(t(A),{size:18}),s[16]||(s[16]=n(" Notifications",-1))]),e(t(i),{size:16})]),_:1}),e(a,{to:"/compte/suppression",class:"row danger"},{default:l(()=>[o("div",Y,[e(t(T),{size:18}),s[17]||(s[17]=n(" Supprimer mon compte et mes données",-1))]),e(t(i),{size:16})]),_:1}),o("button",{class:"row",onClick:s[0]||(s[0]=u=>r.value=!0)},[o("div",ss,[e(t(N),{size:18}),s[18]||(s[18]=n(" Se déconnecter",-1))])])])]),e(w,{modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=u=>r.value=u)},{default:l(()=>[s[20]||(s[20]=o("h3",null,"Confirmer la déconnexion",-1)),s[21]||(s[21]=o("p",null,"Voulez-vous vraiment vous déconnecter ?",-1)),o("div",os,[o("button",{class:"btn ghost",onClick:s[1]||(s[1]=u=>r.value=!1)},"Annuler"),o("button",{class:"btn red",onClick:g},"Se déconnecter")])]),_:1},8,["modelValue"]),t(p).isLogged?_("",!0):(k(),v("div",es,[o("div",ts,[s[22]||(s[22]=o("h3",null,"Connectez-vous",-1)),s[23]||(s[23]=o("p",null,"Accédez à votre historique, vos adresses et vos favoris.",-1)),o("button",{class:"btn red",onClick:s[3]||(s[3]=u=>t(y).showLogin=!0)},"Se connecter")])]))])}}},us=h(ns,[["__scopeId","data-v-f9ef3bb5"]]);export{us as default};
