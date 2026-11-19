import type { InfoModalOptions, Product } from '~/types/content'

const isProductOpen = ref(false)
const activeProduct = ref<Product | null>(null)

const isInfoOpen = ref(false)
const activeInfo = ref<InfoModalOptions | null>(null)

export const useAppleModal = () => {
  function lockScroll() {
    if (import.meta.client) {
      document.body.classList.add('overflow-hidden')
    }
  }

  function unlockScroll() {
    if (import.meta.client) {
      if (!isProductOpen.value && !isInfoOpen.value) {
        document.body.classList.remove('overflow-hidden')
      }
    }
  }

  function openProduct(product: Product) {
    activeProduct.value = product
    isProductOpen.value = true
    lockScroll()
  }

  function closeProduct() {
    isProductOpen.value = false
    unlockScroll()
    setTimeout(() => {
      if (!isProductOpen.value) {
        activeProduct.value = null
      }
    }, 300)
  }

  function openInfo(options: InfoModalOptions) {
    activeInfo.value = options
    isInfoOpen.value = true
    lockScroll()
  }

  function closeInfo() {
    isInfoOpen.value = false
    unlockScroll()
    if (activeInfo.value?.onCancel) {
      activeInfo.value.onCancel()
    }
    setTimeout(() => {
      if (!isInfoOpen.value) {
        activeInfo.value = null
      }
    }, 300)
  }

  function confirmInfo() {
    if (activeInfo.value?.onConfirm) {
      activeInfo.value.onConfirm()
    }
    closeInfo()
  }

  return {
    isProductOpen,
    activeProduct,
    openProduct,
    closeProduct,
    isInfoOpen,
    activeInfo,
    openInfo,
    closeInfo,
    confirmInfo,
  }
}
