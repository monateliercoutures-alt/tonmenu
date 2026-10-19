import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useDeviceMode() {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1280)
  const isCoarse = ref(false)
  const isStandalone = ref(false)
  const isIpad = ref(false)

  let mqlCoarse = null
  let mqlStandalone = null

  const update = () => {
    width.value = window.innerWidth
    if (mqlCoarse) isCoarse.value = mqlCoarse.matches
    if (mqlStandalone) isStandalone.value = mqlStandalone.matches
  }

  onMounted(() => {
    mqlCoarse = window.matchMedia('(pointer: coarse)')
    mqlStandalone = window.matchMedia('(display-mode: standalone)')
    isCoarse.value = mqlCoarse.matches
    isStandalone.value = mqlStandalone.matches || window.navigator.standalone
    isIpad.value = navigator.userAgent.includes('Macintosh') && navigator.maxTouchPoints > 1
    update()
    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)
    if (mqlCoarse.addEventListener) {
      mqlCoarse.addEventListener('change', update)
      mqlStandalone.addEventListener('change', update)
    }
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
    window.removeEventListener('orientationchange', update)
    if (mqlCoarse?.removeEventListener) {
      mqlCoarse.removeEventListener('change', update)
      mqlStandalone.removeEventListener('change', update)
    }
  })

  const mode = computed(() => {
    // Mode site complet = largeur >=1024 ET souris fine ET pas standalone ET pas iPad
    // Sinon mode app
    if (width.value >= 1024 && !isCoarse.value && !isStandalone.value && !isIpad.value) {
      return 'site'
    }
    // Tablette paysage reste app si tactile
    if (isCoarse.value) return 'app'
    if (isStandalone.value) return 'app'
    if (isIpad.value) return 'app'
    return width.value < 1024 ? 'app' : 'site'
  })

  return { width, isCoarse, isStandalone, isIpad, mode }
}
