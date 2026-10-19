# Modèle de données TonMenu

## 1. Users
- id, phone (+225), name, role: client | restaurant | admin | livreur, password_hash, created_at
- Client peut commander sans compte (guest → phone + nom seulement)

## 2. Restaurants
- id, name, slug, phone, commune/quartier, type_cuisine, logo, cover, address, lat/lng, horaires JSON {lun: [{open,close}]}, zone_livraison, frais, temps_prep_moyen, modes: livraison/retrait/cash, status: brouillon|en_attente|publié|suspendu, commission_rate, created_at

## 3. Categories
- id, restaurant_id, name, position, visible

## 4. Dishes (plats)
- id, restaurant_id, category_id, name, desc, price_FCFA, image, position, available, rupture_until, prep_time

## 5. Dish Options & Suppléments
- id, dish_id, type: taille/accompagnement/supplément, name, price_FCFA, required

## 6. Orders (commande)
- id (TM-XXXX), restaurant_id, client_name, client_phone, mode: livraison|retrait, address, repère, instructions, lat/lng, status: nouvelle → paiement_en_attente → paiement_validé → acceptée → en_préparation → prête → en_livraison/retirée → livrée (branches: refusée, annulée, paiement_échoué, litige), subtotal, delivery_fee, total, promo_code, created_at, updated_at
- timeline JSON: [{status, at, by}]

## 7. Order Items
- id, order_id, dish_id, dish_name, qty, unit_price, extras JSON, special_note, total

## 8. Payments
- id, order_id, method: orange|mtn|moov|cash, amount, restaurant_number, ref_tx (facultative), status: en_attente|validé|échoué, validated_at, validated_by

## 9. Couriers (livreurs)
- id, name, phone, status: disponible|indisponible|en_course, current_order_id, created_by_admin

## 10. Reviews
- id, order_id, restaurant_id, client_phone, rating (1-5 → % ), comment, reply, created_at, moderated

## 11. Payouts / Reversements
- id, restaurant_id, period, gross, commission, net, status: en_attente|payé, paid_at

## 12. Employees (équipe restaurant)
- id, restaurant_id, name, phone, role: gerant|employe, permissions JSON

## 13. Addresses (client)
- id, user_id|phone, label: Maison|Travail|Autre, address, detail, instructions, lat/lng

## 14. Promo Codes
- id, code, discount_type, value, min_order, expires_at, usage_limit

## Endpoints API (Phase 2)
- POST /api/auth/send-code, /verify, /login, /register-restaurant
- GET /api/restaurants?commune=&q=&category=&sort=
- GET /api/restaurants/:id/menu
- POST /api/orders (guest allowed), GET /api/orders/:id/tracking, PATCH /api/orders/:id/status
- POST /api/payments/validate (restaurant manuel)
- GET /api/couriers/available, POST /api/deliveries/assign
- GET /api/admin/stats, /restaurants, /orders, /payouts
- POST /api/qr/generate (backend → PNG/PDF)

## Règles
- Un panier = un restaurant. Changement → confirmation vider panier.
- Validation manuelle paiement: restaurant compare SMS Mobile Money → bouton Valider.
- Notifications: liens wa.me pré-remplis à chaque transition d’état.

