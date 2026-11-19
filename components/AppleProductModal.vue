<script setup lang="ts">
const { isProductOpen, activeProduct, closeProduct } = useAppleModal()
const { categories } = useContent()

// Lightbox state for expanding image
const isLightboxOpen = ref(false)

function openLightbox() {
  isLightboxOpen.value = true
}

function closeLightbox() {
  isLightboxOpen.value = false
}

// Close on Escape key press
function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (isLightboxOpen.value) {
      closeLightbox()
    } else if (isProductOpen.value) {
      closeProduct()
    }
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', onKeyDown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', onKeyDown)
  }
})
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop with High z-index (z-[100]) above SiteHeader -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isProductOpen && activeProduct"
        class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 overflow-hidden bg-black/70 backdrop-blur-md"
        @click.self="closeProduct"
      >
        <!-- Spacious Modal Card (90-92vw, max 1150px, 85vh) -->
        <Transition
          appear
          enter-active-class="transition duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in transform"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-2"
        >
          <div
            class="relative w-[92vw] max-w-[1150px] h-[85vh] max-h-[85vh] rounded-[28px] sm:rounded-[36px] bg-white backdrop-blur-2xl border border-white/60 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col text-[#171717] my-auto"
            role="dialog"
            aria-modal="true"
            :aria-label="activeProduct.title"
          >
            <!-- Top Hero Banner: Left-Aligned Icon & Title (เหมือนตอนแรก) with Spacious Layout -->
            <div class="relative w-full bg-[#111827] overflow-hidden flex-shrink-0 pt-6 pb-6 sm:pt-7 sm:pb-7 px-6 sm:px-10 border-b border-white/10 text-left">
              <!-- Ambient Dark Image Backdrop -->
              <img
                :src="activeProduct.image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85'"
                :alt="activeProduct.title"
                class="absolute inset-0 w-full h-full object-cover opacity-25 scale-105 pointer-events-none"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-[#111827]/85 via-[#111827]/90 to-[#111827] pointer-events-none"></div>

              <!-- Top Bar Controls -->
              <div class="relative z-20 flex items-center justify-between mb-4">
                <!-- Left: Category Pill -->
                <span class="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white/90 border border-white/15 shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {{ categories[activeProduct.category]?.label || 'Enterprise Software' }}
                </span>

                <!-- Right: Action Buttons (Lightbox & Close) -->
                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="ขยายภาพสถาปัตยกรรม"
                    title="คลิกเพื่อขยายภาพ"
                    class="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all focus:outline-none border border-white/15 shadow-sm"
                    @click="openLightbox"
                  >
                    <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    aria-label="ปิดหน้าต่าง"
                    class="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-md hover:bg-white/25 hover:text-white transition-all transform hover:scale-105 active:scale-95 focus:outline-none border border-white/15 shadow-sm"
                    @click="closeProduct"
                  >
                    <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Left-Aligned Hero Stack: Squircle Icon on the Left, Title & Badges Beside It -->
              <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <!-- Squircle App Icon (512x512 HD) on Left -->
                <div class="w-18 h-18 sm:w-22 sm:h-22 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.35)] bg-white p-1 border-2 border-white/90 shrink-0 transform hover:scale-105 transition-transform duration-300">
                  <img
                    :src="activeProduct.icon || ('/images/products/icon-' + activeProduct.slug + '.png')"
                    :alt="activeProduct.code"
                    class="w-full h-full object-cover rounded-[16px] sm:rounded-[20px]"
                  />
                </div>

                <!-- Info Group: Badges & Title (Left-Aligned) -->
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="rounded-lg bg-[#16834A] px-3 py-0.5 text-xs font-bold tracking-wide uppercase text-white shadow-sm font-heading">
                      {{ activeProduct.code }}
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/35 px-3 py-0.5 text-xs text-emerald-300 font-medium shadow-sm">
                      <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      ISO/IEC 29110 Certified
                    </span>
                    <span v-if="activeProduct.deploy" class="rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-slate-300 border border-white/10">
                      {{ activeProduct.deploy }}
                    </span>
                  </div>

                  <h2 class="font-heading text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-tight text-white leading-snug drop-shadow-md">
                    {{ activeProduct.title }}
                  </h2>
                </div>
              </div>
            </div>

            <!-- Scrollable Body Content: Left-Aligned for Natural, Effortless Reading -->
            <div class="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-7 sm:space-y-8 scrollbar-subtle text-left">
              
              <!-- Target Audience Pill (Left-Aligned) -->
              <div>
                <div class="inline-flex items-center gap-2.5 text-xs sm:text-sm text-[#16834A] bg-[#16834A]/8 rounded-full px-5 py-2.5 border border-[#16834A]/20 font-heading font-medium shadow-sm">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#16834A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{{ activeProduct.audience }}</span>
                </div>
              </div>

              <!-- Product Summary: Left-Aligned & Comfortable Reading -->
              <div>
                <h3 class="text-xs uppercase tracking-wider font-bold text-slate-400 font-heading mb-2.5">
                  เกี่ยวกับระบบ
                </h3>
                <p class="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {{ activeProduct.summary }}
                </p>
              </div>

              <!-- Highlight Chips (Left-Aligned) -->
              <div>
                <h3 class="text-xs uppercase tracking-wider font-bold text-slate-400 font-heading mb-3">
                  จุดเด่นสำคัญ (Key Highlights)
                </h3>
                <div class="flex flex-wrap items-center gap-2.5">
                  <span
                    v-for="h in activeProduct.highlights"
                    :key="h"
                    class="inline-flex items-center gap-1.5 rounded-full bg-[#F4F5F4] px-4 py-2 text-xs sm:text-sm font-semibold text-[#171717] border border-black/[0.04] hover:border-[#16834A]/30 transition-colors shadow-sm"
                  >
                    <svg class="w-3.5 h-3.5 text-[#16834A]" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ h }}
                  </span>
                </div>
              </div>

              <!-- Feature Capabilities: 2-Column Spacious Grid, Left-Aligned Items -->
              <div>
                <h3 class="text-xs uppercase tracking-wider font-bold text-slate-400 font-heading mb-3.5">
                  คุณสมบัติและความสามารถ (Key Capabilities)
                </h3>
                <ul class="grid gap-3.5 sm:grid-cols-2">
                  <li
                    v-for="(f, i) in activeProduct.features"
                    :key="i"
                    class="flex items-start gap-3.5 rounded-2xl bg-[#F8F9FA] p-4 sm:p-5 border border-slate-200/70 hover:border-[#16834A]/40 transition-all hover:shadow-sm"
                  >
                    <span class="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#16834A]/10 text-[#16834A]">
                      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span class="text-sm sm:text-base text-[#171717] font-medium leading-relaxed">{{ f }}</span>
                  </li>
                </ul>
              </div>

            </div>

            <!-- Apple-Style Action Footer: Clean Spacing & Balanced Buttons -->
            <div class="flex-shrink-0 border-t border-slate-200/80 bg-white/95 backdrop-blur-md px-6 sm:px-10 py-4 sm:py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
              <!-- Secondary Button: Quote / Demo -->
              <NuxtLink
                :to="{ path: '/contact', query: { product: activeProduct.slug } }"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-slate-300 bg-white px-6 py-3 font-heading text-sm sm:text-base font-semibold text-[#171717] hover:bg-slate-50 hover:border-slate-400 transition-all active:scale-98 shadow-sm"
                @click="closeProduct"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#16834A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>นัดสาธิต / ขอใบเสนอราคา</span>
              </NuxtLink>

              <!-- Primary Button: View Full Page -->
              <NuxtLink
                :to="`/products/${activeProduct.slug}`"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#16834A] px-7 py-3 font-heading text-sm sm:text-base font-semibold text-white hover:bg-[#106B3B] shadow-md hover:shadow-lg transition-all active:scale-98"
                @click="closeProduct"
              >
                <span>ดูรายละเอียดฉบับเต็ม</span>
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
            </div>

          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Image Lightbox Modal for Full Image Expansion (Higher z-index: z-[120]) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isLightboxOpen && activeProduct"
        class="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl"
        @click="closeLightbox"
      >
        <div class="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center" @click.stop>
          <img
            :src="activeProduct.image"
            :alt="activeProduct.title"
            class="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/20"
          />
          <div class="mt-4 text-center text-white font-heading">
            <span class="rounded-lg bg-[#16834A] px-2.5 py-0.5 text-xs font-bold mr-2">
              {{ activeProduct.code }}
            </span>
            <span class="text-sm font-semibold">{{ activeProduct.title }}</span>
          </div>

          <button
            type="button"
            aria-label="ปิดรูปขยาย"
            class="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white text-[#171717] flex items-center justify-center hover:bg-slate-200 shadow-xl focus:outline-none transition-transform active:scale-95"
            @click="closeLightbox"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.scrollbar-subtle {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
}

.scrollbar-subtle::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-subtle::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-subtle::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 9999px;
}

.scrollbar-subtle::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
