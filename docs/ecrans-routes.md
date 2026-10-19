# Écrans & Routes TonMenu

## AppLayout (mobile/tablette) + SiteLayout (desktop)
Détection via `useDeviceMode()` : <1024px OU pointer:coarse OU standalone OU iPad → App. Sinon Site.
- App : BottomNav 4 onglets, pas de header site, vitrine masquée, / → /accueil
- Site : header collant (logo, Restaurants, Explorer, Devenir partenaire, Connexion, Panier), grille 3-4 colonnes, vitrine complète

## Client (TonMenu Client)
| Écran | Route | Description |
|-------|-------|-------------|
| Connexion (feuille bas) | modal | Bandeau livraison gratuite, préfixe +225, SMS/WhatsApp, Google, Autres méthodes, code 1234 |
| Code vérif | modal | 4 cases, auto-focus, resend 30s, validation auto |
| Adresse livraison | modal | Carte plein écran + pin maison, feuille "Où devons-nous livrer ?" |
| Accueil (Restaurants) | /accueil | Pilule adresse, titre Restaurants, recherche, catégories rondes, filtres sticky, sections carrousels (Meilleures chaînes, Promos, Mieux notés...), cartes restaurant, bouton Haut |
| Explorer | /explorer | En-tête jaune loupe, recherche, "Besoin d'idées ?", sections tendances/boulangerie/mieux notés |
| Commandes | /commandes ?onglet=en-cours|historique | Tabs soulignés, En cours: Suivez vos commandes + Poursuivre panier, Historique: Aucune commande + bouton vert |
| Compte | /compte | En-tête jaune avatar KM, badge NOUVEAU, aide, liste: Historique, Compte, Adresses, Favoris, Codes promo, Langue, FAQ, Notifications, Supprimer, Déconnexion |
| Profil | /compte/profil | Nom, téléphone, email |
| Adresses | /compte/adresses | Liste Maison/Travail, ajouter/modifier/supprimer |
| Favoris | /compte/favoris | Restaurants likés |
| Codes promo | /compte/codes-promo | Saisie + actifs/expirés |
| Langue | /compte/langue | Français défaut |
| FAQ | /compte/faq | Questions + WhatsApp support |
| Notifications | /compte/notifications | Toggles commande/promos/panier |
| Suppression | /compte/suppression | Confirmation + warning |
| Liste verticale | /accueil?section=... | Même que Accueil mais vertical + skeleton |
| Restaurant | /restaurant/:id | Cover, note, frais, catégories collées, plats (texte + photo + +), fiche plat feuille bas, panier flottant |
| Panier | /panier | Articles, qty, sous-total + livraison + total, code promo, Commander |
| Checkout | /checkout | Nom/téléphone/mode/adresse/GPS, choix Mobile Money avec numéro restaurant + J'ai payé, confirmation |
| Suivi | /commande/:id | Timeline 8 étapes, temps estimé, appel/WhatsApp, contrôles simuler statut |
| Vitrine | /accueil-vitrine | Hero + comment ça marche + catégories + populaires + devenir partenaire + footer (desktop only) |

## Pro (TonMenu Pro) — /pro
- /pro/commandes : KPI du jour, onglets Nouvelles/En prépa/Prêtes/En livraison/Terminées, cartes commande avec Valider paiement, Accepter/Refuser, WhatsApp, ticket cuisine
- /pro/menu : catégories (drag), plats (photo, prix, desc, options), toggle rupture, duplication, import rapide, aperçu client
- /pro/ventes : CA, nb commandes, panier moyen, graphique jour/heure, top plats
- /pro/finances : solde, commissions, reversements, export CSV/PDF
- /pro/avis : liste notes, répondre, signaler
- /pro/qr : QR code + page publique, PNG/PDF, partage WhatsApp
- Disponibilité : horaires, pause 15/30/60, Ouvert/Fermé
- Équipe : gérant/employé

## Comportements
- Panier mono-restaurant, guest allowed, notifications wa.me à chaque état
- Offline partiel: cache menu/panier, reprise à reconnexion
- Accessibilité: zones ≥44px, contrast AA, aria-current, transitions feuilles/glissements

