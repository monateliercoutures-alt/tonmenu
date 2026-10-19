import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('tonmenu_user') || 'null'))
  const pendingPhone = ref(localStorage.getItem('tonmenu_pending_phone') || '')

  const isLogged = computed(() => !!user.value)

  function setPendingPhone(phone) {
    pendingPhone.value = phone
    localStorage.setItem('tonmenu_pending_phone', phone)
  }

  function verifyCode(code) {
    // Mock: 1234 always valid
    if (code === '1234') {
      const newUser = {
        id: 'u1',
        name: 'Kouakou Mark',
        phone: pendingPhone.value || '+2250103021672',
        initials: 'KM',
        avatar: null,
      }
      user.value = newUser
      localStorage.setItem('tonmenu_user', JSON.stringify(newUser))
      return true
    }
    return false
  }

  function loginWithGoogle() {
    const newUser = { id: 'u2', name: 'Kouakou Mark', phone: '+2250103021672', initials: 'KM' }
    user.value = newUser
    localStorage.setItem('tonmenu_user', JSON.stringify(newUser))
  }

  function logout() {
    user.value = null
    localStorage.removeItem('tonmenu_user')
  }

  return { user, isLogged, pendingPhone, setPendingPhone, verifyCode, loginWithGoogle, logout }
})
