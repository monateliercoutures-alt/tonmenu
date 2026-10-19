import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref(JSON.parse(localStorage.getItem('tonmenu_cart') || '[]'))
  const restaurantId = ref(localStorage.getItem('tonmenu_cart_resto') || null)
  const note = ref('')

  const count = computed(() => items.value.reduce((a, b) => a + b.qty, 0))
  const subtotal = computed(() => items.value.reduce((a, b) => a + b.price * b.qty + (b.extrasTotal || 0), 0))
  const deliveryFee = computed(() => {
    if (!restaurantId.value) return 0
    // mock: free for most
    return 0
  })
  const total = computed(() => subtotal.value + deliveryFee.value)

  function save() {
    localStorage.setItem('tonmenu_cart', JSON.stringify(items.value))
    localStorage.setItem('tonmenu_cart_resto', restaurantId.value || '')
  }

  function addItem(restoId, dish, qty = 1, extras = [], specialNote = '') {
    if (restaurantId.value && restaurantId.value !== restoId) {
      // ask to clear - for now auto clear
      if (!confirm('Votre panier contient des articles d’un autre restaurant. Vider le panier et ajouter ce plat ?')) return false
      clear()
    }
    restaurantId.value = restoId
    const extrasTotal = extras.reduce((s, e) => s + e.price, 0) * qty
    const key = dish.id + JSON.stringify(extras) + specialNote
    const existing = items.value.find(i => i.key === key)
    if (existing) existing.qty += qty
    else items.value.push({ key, id: dish.id, name: dish.name, price: dish.price, qty, extras, extrasTotal, specialNote, image: dish.image })
    save()
    return true
  }

  function updateQty(key, delta) {
    const it = items.value.find(i => i.key === key)
    if (!it) return
    it.qty += delta
    if (it.qty <= 0) items.value = items.value.filter(i => i.key !== key)
    if (items.value.length === 0) restaurantId.value = null
    save()
  }

  function remove(key) {
    items.value = items.value.filter(i => i.key !== key)
    if (items.value.length === 0) restaurantId.value = null
    save()
  }

  function clear() {
    items.value = []
    restaurantId.value = null
    save()
  }

  return { items, restaurantId, count, subtotal, deliveryFee, total, note, addItem, updateQty, remove, clear, save }
})
