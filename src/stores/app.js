import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const currentAddress = ref(JSON.parse(localStorage.getItem('tonmenu_address') || 'null') || { label: 'Rue Mohamed Diomandé, 389', full: 'Rue Mohamed Diomandé, 389', city: 'Yopougon, Abidjan' })
  const favorites = ref(new Set(JSON.parse(localStorage.getItem('tonmenu_fav') || '[]')))
  const orders = ref(JSON.parse(localStorage.getItem('tonmenu_orders') || '[]'))
  const showLogin = ref(false)
  const showAddressSheet = ref(false)
  const showCodeSheet = ref(false)

  function toggleFav(id) {
    if (favorites.value.has(id)) favorites.value.delete(id)
    else favorites.value.add(id)
    localStorage.setItem('tonmenu_fav', JSON.stringify([...favorites.value]))
  }
  function isFav(id) { return favorites.value.has(id) }

  function setAddress(addr) {
    currentAddress.value = addr
    localStorage.setItem('tonmenu_address', JSON.stringify(addr))
  }

  function addOrder(order) {
    orders.value.unshift(order)
    localStorage.setItem('tonmenu_orders', JSON.stringify(orders.value))
  }
  function updateOrder(id, patch) {
    const o = orders.value.find(x => x.id === id)
    if (o) Object.assign(o, patch)
    localStorage.setItem('tonmenu_orders', JSON.stringify(orders.value))
  }

  return { currentAddress, favorites, orders, showLogin, showAddressSheet, showCodeSheet, toggleFav, isFav, setAddress, addOrder, updateOrder }
})
